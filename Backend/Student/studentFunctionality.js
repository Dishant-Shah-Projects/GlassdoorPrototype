/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const url = require('url');
const { ok } = require('assert');
const mysqlConnection = require('../mysqlConnection');
const { secret } = require('../config');
const Company = require('../model/Company');
const Student = require('../model/Student');
const Job = require('../model/Job');
const Static = require('../model/Static');
const redisClient = require('../redisClient');

// get the details required for the student navigation bar
const navbar = async (req, res) => {
  const { StudentID } = url.parse(req.url, true).query;
  try {
    const resultData = [];
    await Student.findOne({ StudentID }, (err, results) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end('Student not found');
      } else {
        resultData.push(results);
      }
    });
    await Company.find({}, { _id: 0, CompanyName: 1, CompanyID: 1 }, (err, results) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end('Company Names not found');
      } else {
        resultData.push(results);
      }
    });
    await Job.find({}, { _id: 0, Title: 1 }, (err, results) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end('Jobs not found');
      } else {
        resultData.push(results);
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify(resultData));
      }
    });
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// To fetch the avgRating of a company
const fetchAvgRating = async (ID) => {
  try {
    const fetchAvgRatingQuery = 'CALL avgRating(?)';
    const con = await mysqlConnection();
    const [results, fields] = await con.query(fetchAvgRatingQuery, ID);
    con.end();
    if (results[0][0].AvgRating === null) return 0;
    return results[0][0].AvgRating;
  } catch (error) {
    return 0;
  }
};

// fetch the results of the company search
const searchCompany = async (req, res) => {
  try {
    const { SearchString, State, PageNo } = url.parse(req.url, true).query;
    const filterArray = [];
    if (SearchString.length !== 0) {
      filterArray.push({ CompanyName: { $regex: `${SearchString}`, $options: 'i' } });
    }
    if (State.length !== 0) {
      filterArray.push({ State });
    }
    let companyResults = null;
    let count = 0;
    if (filterArray.length !== 0) {
      companyResults = await Company.find({ $and: filterArray })
        .limit(10)
        .skip(PageNo * 10)
        .exec();
      count = await Company.find({ $and: filterArray }).countDocuments();
    } else {
      companyResults = await Company.find()
        .limit(10)
        .skip(PageNo * 10)
        .exec();
      count = await Company.find().countDocuments();
    }

    const noOfPages = Math.ceil(count / 10);
    const resultData = [companyResults, count, noOfPages];
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(resultData));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

// Search all jobs
const searchJob = async (req, res) => {
  try {
    const { SearchString, JobType, State, SalStart, SalEnd, PageNo } = url.parse(
      req.url,
      true
    ).query;
    const filterObj = {};
    if (SearchString.length !== 0) {
      filterObj.CompanyName = { $regex: `${SearchString}`, $options: 'i' };
    }
    if (JobType.length !== 0) {
      filterObj.JobType = JobType;
    }
    if (SalStart !== SalEnd) {
      const tempObj = {};
      tempObj.$gte = Number(SalStart);
      tempObj.$lte = Number(SalEnd);
      filterObj.ExpectedSalary = tempObj;
    }
    if (State.length !== 0) {
      filterObj.State = State;
    }
    const jobResults = await Job.aggregate([
      {
        $match: filterObj,
      },
      {
        $lookup: {
          from: 'companies',
          localField: 'CompanyID',
          foreignField: 'CompanyID',
          as: 'jobdetails',
          // pipeline: [{ $match: { $expr: { $eq: ['$CompanyID', '$CompanyID'] } } }],
        },
      },
      {
        $project: {
          Title: 1,
          CompanyID: 1,
          CompanyName: 1,
          State: 1,
          City: 1,
          ExpectedSalary: 1,
          PostedDate: 1,
          StreetAddress: 1,
          JobType: 1,
          Qualifications: 1,
          Responsibilities: 1,
          JobDescription: 1,
          Country: 1,
          CurrentStatus: 1,
          jobdetails: 1,
        },
      },
    ])
      .sort({ PostedDate: -1 })
      .limit(10)
      .skip(PageNo * 10);
    const resultCount = await Job.aggregate([
      {
        $match: filterObj,
      },
      {
        $lookup: {
          from: 'Company',
          as: 'jobdetails',
          pipeline: [{ $match: { $expr: { $eq: ['$CompanyID', '$CompanyID'] } } }],
        },
      },
      // {
      //   $project: {
      //     Title: 1,
      //     CompanyID: 1,
      //     CompanyName: 1,
      //     State: 1,
      //     ExpectedSalary: 1,
      //   },
      // },
    ]);
    const count = resultCount.length;
    const noOfPages = Math.ceil(count / 4);
    const resultObj = {};
    resultObj.jobs = jobResults;
    resultObj.count = count;
    resultObj.noOfPages = noOfPages;
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(resultObj));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

// get the suggested jobs for students
const getJobSuggestions = async (req, res) => {
  /* eslint-disable */
  const { StudentID } = url.parse(req.url, true).query;
  let jobTitle = '';
  let resultData = [];
  try {
    await Student.findOne({ StudentID }, (err, results) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end('Student not found');
      } else {
        jobTitle = results.JobTitle;
      }
    });
    let titleMatchJob = await Job.find({ Title: { $regex: `.*${jobTitle}.*` } })
      .limit(4)
      .exec();
    resultData = titleMatchJob;
    if (resultData.length < 4) {
      let sortDateJob = await Job.find({ Title: { $not: /${jobTitle}/ } })
        .sort({ PostedDate: -1 })
        .limit(4 - resultData.length)
        .exec();
      resultData = resultData.concat(sortDateJob);
    }
    var companyResult = [];
    for (var i = 0; i < resultData.length; i++) {
      let companyID = resultData[i].CompanyID;
      let company = await Company.findOne({ CompanyID: companyID }).exec();
      let tmpObj = {};
      tmpObj['Title'] = resultData[i].Title;
      tmpObj['TitCompanyIDle'] = resultData[i].CompanyID;
      tmpObj['CompanyName'] = resultData[i].CompanyName;
      tmpObj['CurrentStatus'] = resultData[i].CurrentStatus;
      tmpObj['Industry'] = resultData[i].Industry;
      tmpObj['StreetAddress'] = resultData[i].StreetAddress;
      tmpObj['City'] = resultData[i].City;
      tmpObj['State'] = resultData[i].State;
      tmpObj['Country'] = resultData[i].Country;
      tmpObj['Zip'] = resultData[i].Zip;
      tmpObj['PostedDate'] = resultData[i].PostedDate;
      tmpObj['JobDescription'] = resultData[i].JobDescription;
      tmpObj['Respobsibilities'] = resultData[i].Respobsibilities;
      tmpObj['Qualifications'] = resultData[i].Qualifications;
      tmpObj['ExpectedSalary'] = resultData[i].ExpectedSalary;
      tmpObj['Votes'] = resultData[i].TitVotesle;
      tmpObj['ProfileImg'] = company.ProfileImg;
      companyResult.push(tmpObj);
    }
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(companyResult));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
  /* eslint-enable */
};
// post company favourite jobs for students
const companyFavouriteJobs = async (req, res) => {
  const { StudentID, JobID } = req.body;
  try {
    Student.update({ StudentID }, { $push: { FavouriteJobs: JobID } }, (err) => {
      if (err) {
        res.writeHead(500, { 'content-type': 'text/json' });
        res.end(JSON.stringify('Network Error'));
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify('Added'));
      }
    });
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// To submit an application for a job
const companyApplyJob = async (req, res) => {
  const {
    JobID,
    StudentID,
    StudentName,
    ResumeURL,
    CoverLetterURL,
    Ethnicity,
    Gender,
    Disability,
    VeteranStatus,
  } = req.body;
  let con = null;
  try {
    const jobApplicationProcedure = 'CALL applicationSubmit(?,?,?,?,?,?,?,?,?,"Submitted")';
    con = await mysqlConnection();
    // eslint-disable-next-line no-unused-vars
    const [results, fields] = await con.query(jobApplicationProcedure, [
      JobID,
      StudentID,
      StudentName,
      ResumeURL,
      CoverLetterURL,
      Ethnicity,
      Gender,
      Disability,
      VeteranStatus,
    ]);
    con.end();
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Applied Successfully'));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};
// remove favourite jobs for students
const removeFavouriteJobs = async (req, res) => {
  const { StudentID, JobID } = req.body;
  try {
    Student.update({ StudentID }, { $pull: { FavouriteJobs: JobID } }, (err) => {
      if (err) {
        res.writeHead(500, { 'content-type': 'text/json' });
        res.end(JSON.stringify('Network Error'));
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify('Removed'));
      }
    });
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// API Calls for returning the interviews NEED TO ADD PROFILE IMAGES
const searchInterview = async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { SearchString, State, PageNo } = req.body;
  let con = null;
  try {
    const offset = PageNo * 10;
    const searchQuery =
      'SELECT * FROM INTERVIEW_REVIEW WHERE INSTR(CompanyName, ?) > 0 AND Status = "Approved" LIMIT 10 OFFSET ?;';
    con = await mysqlConnection();
    const [results] = await con.query(searchQuery, [SearchString, offset]);
    // const company = await Company.find({ CompanyID });
    const countQuery =
      'SELECT COUNT(*) AS TOTALCOUNT FROM INTERVIEW_REVIEW WHERE INSTR(CompanyName, ?) > 0 AND Status = "Approved";';
    const [count] = await con.query(countQuery, [SearchString]);
    const resultData = { results, count };
    con.end();
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify(resultData));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

// To get the salary reviews
const salaryReview = async (req, res) => {
  let con = null;
  try {
    const { PageNo, CompanyID } = req.query;
    const offset = PageNo * 10;
    const searchQuery =
      'SELECT JobTitle, AVG(BaseSalary + Bonuses) As AverageSalary, MIN(BaseSalary + Bonuses) AS MinSalary, MAX(BaseSalary + Bonuses) As MaxSalary FROM SALARY_REVIEW WHERE CompanyID=? AND Status = ? GROUP BY JobTitle LIMIT 10 OFFSET ?;';
    con = await mysqlConnection();
    const [results] = await con.query(searchQuery, [CompanyID, 'Approved', offset]);
    const company = await Company.find({ CompanyID });
    let ProfileImg = null;
    if (company[0].ProfileImg) {
      ProfileImg = company[0].ProfileImg;
    }
    const countQuery =
      'SELECT COUNT(distinct(JobTitle)) AS TOTALCOUNT FROM SALARY_REVIEW WHERE CompanyID=? AND Status = ?;';
    const [count] = await con.query(countQuery, [CompanyID, 'Approved', offset]);
    const resultData = { results, ProfileImg, count };
    con.end();
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify(resultData));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};
// post resume of student
const resumesAdd = async (req, res) => {
  const { StudentID, ResumeURL } = req.body;
  try {
    Student.update({ StudentID }, { $push: { Resumes: ResumeURL } }, (err) => {
      if (err) {
        res.writeHead(500, { 'content-type': 'text/json' });
        res.end(JSON.stringify('Network Error'));
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify('Added Resume'));
      }
    });
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// remove resume for students
const resumesDelete = async (req, res) => {
  const { StudentID, ResumeURL } = req.body;
  try {
    await Student.update({ StudentID }, { $pull: { Resumes: ResumeURL } }, (err) => {
      if (err) {
        res.writeHead(500, { 'content-type': 'text/json' });
        res.end(JSON.stringify('Network Error'));
      }
    });
    const result = await Student.findOne({ StudentID }, { ResumePrimary: 1, _id: 0 }).exec();
    if (result.ResumePrimary === ResumeURL) {
      await Student.update({ StudentID }, { ResumePrimary: '' }).exec();
    }
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify('Removed'));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// To withdraw from a job application
const jobWithdraw = async (req, res) => {
  const { JobID, StudentID } = req.body;
  let con = null;
  try {
    const applicationWithdrawProcedure = 'CALL applicationWithDraw(?,?)';
    con = await mysqlConnection();
    // eslint-disable-next-line no-unused-vars
    const [results, fields] = await con.query(applicationWithdrawProcedure, [JobID, StudentID]);
    con.end();
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Withdrawn Successfully'));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

// Update the profile information
const profileUpdate = async (req, res) => {
  try {
    const { StudentID } = req.body;
    Student.findOne({ StudentID }, (err, results) => {
      if (err) {
        res.writeHead(500, { 'content-type': 'text/json' });
        res.end(JSON.stringify('Network Error'));
      }
      if (results) {
        Student.updateOne({ StudentID }, { ...req.body }, (er, data) => {
          if (er) {
            res.writeHead(500, { 'content-type': 'text/json' });
            res.end(JSON.stringify('Network Error'));
          }
          if (data) {
            res.writeHead(200, { 'content-type': 'text/json' });
            res.end(JSON.stringify('Updated Successfully'));
          }
        });
      }
    });
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
};
// get the details required for the student navigation bar
const companyProfile = async (req, res) => {
  const { CompanyID } = req.query;
  try {
    const company = await Company.findOne({ CompanyID });
    Company.findOneAndUpdate(
      { CompanyID },
      { $inc: { ViewCount: 1 } },

      (err) => {
        if (err) {
          res.writeHead(500, { 'content-type': 'text/json' });
          res.end(JSON.stringify('Network'));
        } else {
          res.writeHead(200, { 'content-type': 'text/json' });
          res.end(JSON.stringify(company));
        }
      }
    );
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// get the company reviews
const companyReview = async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { CompanyID, PageNo } = req.query;
  let con = null;
  try {
    const resultData = [];
    const count =
      'SELECT count(*) as reviewcount FROM GENERAL_REVIEW WHERE CompanyID=? AND Status = ?;';

    const offset = PageNo * 10;
    const searchQuery =
      'SELECT * FROM GENERAL_REVIEW WHERE CompanyID=? AND Status = ? LIMIT 10 OFFSET ?;';
    con = await mysqlConnection();
    const [results] = await con.query(count, [CompanyID, 'Approved']);
    resultData.push({ count: results[0].reviewcount });
    const no = Math.ceil(results[0].reviewcount / 10);
    resultData.push({ noOfPages: no });
    const [results2] = await con.query(searchQuery, [CompanyID, 'Approved', offset]);
    resultData.push(results2);
    con.end();
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify(resultData));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

// add the company review and increment the review count
const addCompanyReview = async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const {
    CompanyID,
    StudentID,
    CompanyName,
    Pros,
    Cons,
    Description,
    Rating,
    EmployeeStatus,
    CEOApproval,
    JobType,
    Recommended,
    JobTitle,
    Headline,
  } = req.body;
  let con = null;
  try {
    const count = 'CALL reviewInsert(?,?,?,?,?,?,?,?,"NotApproved",0,?,?,?,?,?,CURDATE(),NULL,0);';
    con = await mysqlConnection();
    await con.query(count, [
      CompanyID,
      StudentID,
      CompanyName,
      Pros,
      Cons,
      Description,
      Rating,
      EmployeeStatus,
      CEOApproval,
      JobType,
      Recommended,
      JobTitle,
      Headline,
    ]);
    con.end();
    const reviewday = await Static.findOne({}).select('reviews');
    const today = new Date().toISOString().slice(0, 10);
    if (reviewday.reviews[0].Date.toISOString().slice(0, 10) === today) {
      reviewday.reviews[0].reviewcount += 1;
    } else {
      reviewday.reviews.unshift({ Date: today, reviewcount: 1 });
    }
    if (reviewday.reviews.length > 7) {
      reviewday.reviews.pop();
    }
    Static.findOneAndUpdate(
      {},
      { reviews: reviewday.reviews },

      (err) => {
        if (err) {
          res.writeHead(500, { 'content-type': 'text/json' });
          res.end(JSON.stringify('Network'));
        } else {
          Company.findOneAndUpdate(
            { CompanyID },
            {
              $inc: {
                GeneralReviewCount: 1,
                TotalGeneralReviewRating: Rating,
                approveCEOcount: CEOApproval,
                recommendedcount: Recommended,
              },
            },

            (error, results) => {
              if (error) {
                res.writeHead(500, { 'content-type': 'text/json' });
                res.end(JSON.stringify('Network'));
              }
              if (results) {
                res.writeHead(200, { 'content-type': 'text/json' });
                res.end(JSON.stringify('Company Review Added'));
              }
            }
          );
        }
      }
    );
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

// get the company reviews without pagination
// const getAllReview = async (req, res) => {
//   // eslint-disable-next-line no-unused-vars
//   const { CompanyID } = req.query;
//   let con = null;
//   try {
//     const redisKey = `getAllReview-CompanyID=${CompanyID}`;
//     redisClient.get(redisKey, async (err, data) => {
//       // data is available in Redis
//       if (data) {
//         res.writeHead(200, { 'content-type': 'text/json' });
//         res.end(data);
//       } else {
//         try {
//           const searchQuery = 'SELECT * FROM GENERAL_REVIEW WHERE CompanyID=?;';
//           con = await mysqlConnection();
//           const [results2] = await con.query(searchQuery, CompanyID);
//           con.end();
//           // Add to redis
//           redisClient.setex(redisKey, 36000, JSON.stringify(results2));
//           res.writeHead(200, { 'content-type': 'text/json' });
//           res.end(JSON.stringify(results2));
//         } catch (error) {
//           res.writeHead(500, { 'content-type': 'text/json' });
//           res.end(JSON.stringify('Network Error'));
//         }
//       }
//     });
//   } catch (error) {
//     res.writeHead(500, { 'content-type': 'text/json' });
//     res.end(JSON.stringify('Network Error'));
//   } finally {
//     if (con) {
//       con.end();
//     }
//   }
//   return res;
// };

// add the salary review and increment the salary review count
const salaryAddReview = async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const {
    CompanyID,
    StudentID,
    BaseSalary,
    Bonuses,
    JobTitle,
    Years,
    StreetAddress,
    City,
    State,
    Zip,
  } = req.body;
  let con = null;
  try {
    const interviewReviewInsert =
      'CALL salaryReviewInsert (?,?,"Not Approved", curdate(), ?, ?,?,?, ?, ?,?,?);';
    con = await mysqlConnection();
    await con.query(interviewReviewInsert, [
      CompanyID,
      StudentID,
      BaseSalary,
      Bonuses,
      JobTitle,
      Years,
      StreetAddress,
      City,
      State,
      Zip,
    ]);
    con.end();
    Company.findOneAndUpdate(
      { CompanyID },
      { $inc: { SalaryReviewCount: 1 } },

      (err, results) => {
        if (err) {
          res.writeHead(500, { 'content-type': 'text/json' });
          res.end(JSON.stringify('Network'));
        }
        if (results) {
          res.writeHead(200, { 'content-type': 'text/json' });
          res.end(JSON.stringify('Salary Review Added'));
        }
      }
    );
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};
// get the feature Reviews for the company
const featureReview = async (req, res) => {
  const { CompanyID } = req.query;
  let con = null;
  try {
    const resultData = {};
    const company = await Company.findOne({ CompanyID }).select('FeaturedReview');
    resultData.featuredReview = company.FeaturedReview;
    const posquery =
      'SELECT* FROM GENERAL_REVIEW WHERE CompanyID=? AND Rating>3 ORDER BY Helpful DESC LIMIT 1;';
    const negquery =
      'SELECT* FROM GENERAL_REVIEW WHERE CompanyID=? AND Rating<=3 ORDER BY Helpful DESC LIMIT 1;';
    con = await mysqlConnection();
    const [results] = await con.query(posquery, CompanyID);
    // eslint-disable-next-line prefer-destructuring
    resultData.positiveReview = results[0];
    const [results2] = await con.query(negquery, CompanyID);
    // eslint-disable-next-line prefer-destructuring
    resultData.negativeReview = results2[0];
    con.end();
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify(resultData));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

// get the interview Review for the company
const getInterviewReivew = async (req, res) => {
  let con = null;
  try {
    const { PageNo, CompanyID } = req.query;
    const offset = PageNo * 10;
    const searchQuery =
      'SELECT * FROM INTERVIEW_REVIEW WHERE CompanyID=? AND Status = "Approved" LIMIT 10 OFFSET ?;';
    con = await mysqlConnection();
    const [results] = await con.query(searchQuery, [CompanyID, offset]);
    const company = await Company.find({ CompanyID });
    let ProfileImg = null;
    if (company[0].ProfileImg) {
      ProfileImg = company[0].ProfileImg;
    }
    const countQuery =
      'SELECT COUNT(*) AS TOTALCOUNT FROM INTERVIEW_REVIEW WHERE CompanyID=? AND Status = "Approved";';
    const [count] = await con.query(countQuery, [CompanyID]);
    const resultData = { results, ProfileImg, count };
    con.end();
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify(resultData));
  } catch (error) {
    // eslint-disable-next-line no-console
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

// add the salary review and increment the salary review count
const interviewAddReview = async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const {
    CompanyID,
    StudentID,
    CompanyName,
    OverallExperience,
    JobTitle,
    Description,
    Difficulty,
    OfferStatus,
    InterviewQuestions,
    Answers,
  } = req.body;
  let con = null;
  try {
    const interviewReviewInsert =
      'CALL interviewReviewInsert (?,?,?,"Not Approved",0, curdate(), ?,?,?,?, ?, ?,?);';
    con = await mysqlConnection();
    await con.query(interviewReviewInsert, [
      CompanyID,
      StudentID,
      CompanyName,
      OverallExperience,
      JobTitle,
      Description,
      Difficulty,
      OfferStatus,
      InterviewQuestions,
      Answers,
    ]);
    con.end();

    Company.findOneAndUpdate(
      { CompanyID },
      { $inc: { InterviewReviewCount: 1 } },

      (error, results) => {
        if (error) {
          res.writeHead(500, { 'content-type': 'text/json' });
          res.end(JSON.stringify('Network'));
        }
        if (results) {
          res.writeHead(200, { 'content-type': 'text/json' });
          res.end(JSON.stringify('Interview Review Added'));
        }
      }
    );
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }

  return res;
};

// get the interview Data for the company
const interviewData = async (req, res) => {
  const { CompanyID } = req.query;
  let con = null;
  try {
    const query =
      'SELECT  sum(case when OverallExperience = "Positive" then 1 else 0 end) as positive,sum(case when OverallExperience = "Negative" then 1 else 0 end) as negative,sum(case when OverallExperience = "Neutral" then 1 else 0 end) as neutral,count(OverallExperience) as total, AVG(Difficulty) as difficulty FROM INTERVIEW_REVIEW WHERE CompanyID=? and Status=?;';
    con = await mysqlConnection();
    const [results] = await con.query(query, [CompanyID, 'Approved']);
    con.end();
    const resultObj = {};
    // eslint-disable-next-line func-names
    resultObj.negative = results[0].negative;
    resultObj.positive = results[0].positive;
    resultObj.neutral = results[0].neutral;
    resultObj.totalInterviews = results[0].total;
    resultObj.avgDifficulty = results[0].difficulty;
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify(resultObj));
  } catch (error) {
    // eslint-disable-next-line no-console
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

// update company helpful  for the general review
const companyHelpfulReview = async (req, res) => {
  const { CompanyID, ID, StudentID } = req.body;
  let con = null;
  try {
    con = await mysqlConnection();
    const posquery = 'UPDATE GENERAL_REVIEW SET Helpful = Helpful+1 WHERE CompanyID=? AND ID=?;';
    // eslint-disable-next-line no-unused-vars
    const [results] = await con.query(posquery, [CompanyID, ID]);
    con.end();
    await Student.update({ StudentID }, { $push: { HelpfullGeneralReviews: ID } });
    const company = await Company.findOne({ CompanyID }).select('FeaturedReview');
    if (company.FeaturedReview.ID === ID) {
      company.FeaturedReview.Helpful += 1;
      Company.findOneAndUpdate(
        { CompanyID },
        { FeaturedReview: company.FeaturedReview },

        (err, response) => {
          if (err) {
            res.writeHead(500, { 'content-type': 'text/json' });
            res.end(JSON.stringify('Network'));
          }
          if (response) {
            res.writeHead(200, { 'content-type': 'text/json' });
            res.end(JSON.stringify({ message: 'ok' }));
          }
        }
      );
    } else {
      res.writeHead(200, { 'content-type': 'text/json' });
      res.end(JSON.stringify({ message: 'ok' }));
    }
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

// update company helpful  for the interview review
const companyInterviewHelpfulReview = async (req, res) => {
  const { CompanyID, ID, StudentID } = req.body;
  let con = null;
  try {
    con = await mysqlConnection();
    const posquery =
      'UPDATE INTERVIEW_REVIEW SET Helpful = Helpful+1 WHERE CompanyID=? AND InterviewReviewID=?;';
    // eslint-disable-next-line no-unused-vars
    const [results] = await con.query(posquery, [CompanyID, ID]);
    con.end();
    await Student.update({ StudentID }, { $push: { HelpfullInterviewReviews: ID } });
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify({ message: 'ok' }));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

// search company jobs
const companyJobs = async (req, res) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { CompanyID, Title, City, PageNo } = url.parse(req.url, true).query;
    const filterArray = [];
    if (Title.length !== 0) {
      filterArray.push({ Title: { $regex: `${Title}`, $options: 'i' } });
    }
    if (City.length !== 0) {
      filterArray.push({ City: { $regex: `${City}`, $options: 'i' } });
    }
    filterArray.push({ CompanyID: { $eq: `${CompanyID}` } });
    let companyResults = null;
    let count = 0;
    companyResults = await Job.find({ $and: filterArray })
      .limit(10)
      .skip(PageNo * 10)
      .exec();
    count = await Job.find({ $and: filterArray }).countDocuments();
    const noOfPages = Math.ceil(count / 10);
    const resultData = [companyResults, count, noOfPages];
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(resultData));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

module.exports = {
  navbar,
  searchCompany,
  getJobSuggestions,
  searchJob,
  companyApplyJob,
  companyFavouriteJobs,
  removeFavouriteJobs,
  searchInterview,
  resumesAdd,
  resumesDelete,
  jobWithdraw,
  profileUpdate,
  companyProfile,
  companyReview,
  addCompanyReview,
  salaryAddReview,
  featureReview,
  getInterviewReivew,
  interviewAddReview,
  interviewData,
  companyHelpfulReview,
  companyJobs,
  salaryReview,
  companyInterviewHelpfulReview,
  // getAllReview,
};
