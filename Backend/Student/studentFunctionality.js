/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const url = require('url');
const mysqlConnection = require('../mysqlConnection');
const { secret } = require('../config');
const Company = require('../model/Company');
const Student = require('../model/Student');
const Job = require('../model/Job');
const Static = require('../model/Static');

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
  const { SearchString, State, PageNo } = url.parse(req.url, true).query;
  let resultData = [];
  const companyResult = [];
  if (SearchString.length === 0 && State.length === 0) {
    const companyResults = await Company.find()
      .limit(10)
      .skip(PageNo * 10)
      .exec();
    const count = await Company.find().countDocuments();
    const noOfPages = Math.ceil(count / 4);
    for (let i = 0; i < companyResults.length; i += 1) {
      const ID = companyResults[i].CompanyID;
      const tempObj = {};
      tempObj.CompanyName = companyResults[i].CompanyID;
      tempObj.ProfileImg = companyResults[i].ProfileImg;
      tempObj.CompanyName = companyResults[i].CompanyName;
      tempObj.City = companyResults[i].City;
      tempObj.State = companyResults[i].State;
      tempObj.Website = companyResults[i].Website;
      tempObj.GeneralReviewCount = companyResults[i].GeneralReviewCount;
      tempObj.SalaryReviewCount = companyResults[i].SalaryReviewCount;
      tempObj.InterviewReviewCount = companyResults[i].InterviewReviewCount;
      // eslint-disable-next-line no-await-in-loop
      const avgRating = await fetchAvgRating(ID);
      tempObj.AvgRating = Math.round(avgRating * 10) / 10;
      companyResult.push(tempObj);
    }
    resultData = [companyResult, count, noOfPages];
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(resultData));
  } else if (SearchString.length !== 0 && State.length === 0) {
    const companyResults = await Company.find({
      CompanyName: { $regex: `${SearchString}`, $options: 'i' },
    })
      .limit(10)
      .skip(PageNo * 10)
      .exec();
    const count = await Company.find().countDocuments({
      CompanyName: { $regex: `${SearchString}`, $options: 'i' },
    });
    const noOfPages = Math.ceil(count / 4);
    for (let i = 0; i < companyResults.length; i += 1) {
      const ID = companyResults[i].CompanyID;
      const tempObj = {};
      tempObj.CompanyName = companyResults[i].CompanyID;
      tempObj.ProfileImg = companyResults[i].ProfileImg;
      tempObj.CompanyName = companyResults[i].CompanyName;
      tempObj.City = companyResults[i].City;
      tempObj.State = companyResults[i].State;
      tempObj.Website = companyResults[i].Website;
      tempObj.GeneralReviewCount = companyResults[i].GeneralReviewCount;
      tempObj.SalaryReviewCount = companyResults[i].SalaryReviewCount;
      tempObj.InterviewReviewCount = companyResults[i].InterviewReviewCount;
      // eslint-disable-next-line no-await-in-loop
      const avgRating = await fetchAvgRating(ID);
      tempObj.AvgRating = Math.round(avgRating * 10) / 10;
      companyResult.push(tempObj);
    }
    resultData = [companyResult, count, noOfPages];
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(resultData));
  } else if (SearchString.length === 0 && State.length !== 0) {
    const companyResults = await Company.find({
      State: { $regex: `${SearchString}`, $options: 'i' },
    })
      .limit(10)
      .skip(PageNo * 10)
      .exec();
    const count = await Company.find().countDocuments({
      State: { $regex: `${SearchString}`, $options: 'i' },
    });
    const noOfPages = Math.ceil(count / 4);
    for (let i = 0; i < companyResults.length; i += 1) {
      const ID = companyResults[i].CompanyID;
      const tempObj = {};
      tempObj.CompanyName = companyResults[i].CompanyID;
      tempObj.CompanyName = companyResults[i].CompanyName;
      tempObj.ProfileImg = companyResults[i].ProfileImg;
      tempObj.City = companyResults[i].City;
      tempObj.State = companyResults[i].State;
      tempObj.Website = companyResults[i].Website;
      tempObj.GeneralReviewCount = companyResults[i].GeneralReviewCount;
      tempObj.SalaryReviewCount = companyResults[i].SalaryReviewCount;
      tempObj.InterviewReviewCount = companyResults[i].InterviewReviewCount;
      // eslint-disable-next-line no-await-in-loop
      const avgRating = await fetchAvgRating(ID);
      tempObj.AvgRating = Math.round(avgRating * 10) / 10;
      companyResult.push(tempObj);
    }
    resultData = [companyResult, count, noOfPages];
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(resultData));
  } else {
    const companyResults = await Company.find({
      $and: [
        { CompanyName: { $regex: `${SearchString}`, $options: 'i' } },
        { State: { $regex: `${State}`, $options: 'i' } },
      ],
    })
      .limit(10)
      .skip(PageNo * 10)
      .exec();
    const count = await Company.find().countDocuments({
      $and: [
        { CompanyName: { $regex: `${SearchString}`, $options: 'i' } },
        { State: { $regex: `${State}`, $options: 'i' } },
      ],
    });
    const noOfPages = Math.ceil(count / 4);
    for (let i = 0; i < companyResults.length; i += 1) {
      const ID = companyResults[i].CompanyID;
      const tempObj = {};
      tempObj.CompanyName = companyResults[i].CompanyID;
      tempObj.ProfileImg = companyResults[i].ProfileImg;
      tempObj.CompanyName = companyResults[i].CompanyName;
      tempObj.City = companyResults[i].City;
      tempObj.State = companyResults[i].State;
      tempObj.Website = companyResults[i].Website;
      tempObj.GeneralReviewCount = companyResults[i].GeneralReviewCount;
      tempObj.SalaryReviewCount = companyResults[i].SalaryReviewCount;
      tempObj.InterviewReviewCount = companyResults[i].InterviewReviewCount;
      // eslint-disable-next-line no-await-in-loop
      const avgRating = await fetchAvgRating(ID);
      tempObj.AvgRating = Math.round(avgRating * 10) / 10;
      companyResult.push(tempObj);
    }
    resultData = [companyResult, count, noOfPages];
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(resultData));
  }
};

// Search all jobs
const searchJob = async (req, res) => {
  try {
    const { JobType, State, SalStart, SalEnd, PageNo } = url.parse(req.url, true).query;
    const filterObj = {};
    if (JobType.length !== 0) {
      filterObj.Title = JobType;
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
          ExpectedSalary: 1,
          jobdetails: 1,
        },
      },
    ])
      .sort({ PostedDate: -1 })
      .limit(5)
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
      let sortDateJob = await Job.find({ Title: { $not: /${jobTitle}/ }})
      .sort({ PostedDate: -1 })
      .limit(4 - resultData.length)
      .exec();
      resultData = resultData.concat(sortDateJob);
    }
    var companyResult = [];
    for (var i = 0; i < resultData.length; i++) {
      let companyID = resultData[i].CompanyID;
      let company = await Company.findOne({ CompanyID: companyID}).exec();
      let tmpObj = {};
      tmpObj["Title"] = resultData[i].Title;
      tmpObj["TitCompanyIDle"] = resultData[i].CompanyID;
      tmpObj["CompanyName"] = resultData[i].CompanyName;
      tmpObj["CurrentStatus"] = resultData[i].CurrentStatus;
      tmpObj["Industry"] = resultData[i].Industry;
      tmpObj["StreetAddress"] = resultData[i].StreetAddress;
      tmpObj["City"] = resultData[i].City;
      tmpObj["State"] = resultData[i].State;
      tmpObj["Country"] = resultData[i].Country;
      tmpObj["Zip"] = resultData[i].Zip;
      tmpObj["PostedDate"] = resultData[i].PostedDate;
      tmpObj["JobDescription"] = resultData[i].JobDescription;
      tmpObj["Respobsibilities"] = resultData[i].Respobsibilities;
      tmpObj["Qualifications"] = resultData[i].Qualifications;
      tmpObj["ExpectedSalary"] = resultData[i].ExpectedSalary;
      tmpObj["Votes"] = resultData[i].TitVotesle;
      tmpObj["ProfileImg"] = company.ProfileImg;
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

// get the suggested jobs for students
const getFavouriteJobs = async (req, res) => {
  const { StudentID } = url.parse(req.url, true).query;
  const { JobID } = req.body;
  try {
    Student.update(
      { StudentID },
      { $push: { FavouriteJobs: JobID } },
      (err) => {
        if (err) {
          res.writeHead(500, { 'content-type': 'text/json' });
          res.end(JSON.stringify('Network Error'));
        } else {
          res.writeHead(200, {
            'Content-Type': 'application/json',
          });
          res.end(JSON.stringify('Added'));
        }
      },
    );
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

module.exports = {
  navbar,
  searchCompany,
  getJobSuggestions,
  searchJob,
  getFavouriteJobs,
};
