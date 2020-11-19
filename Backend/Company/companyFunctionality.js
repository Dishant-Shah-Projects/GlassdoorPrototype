/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysqlConnection = require('../mysqlConnection');
const { secret } = require('../config');
const Company = require('../model/Company');
const Student = require('../model/Student');
const Static = require('../model/Static');
const Job = require('../model/Job');

// get the profile for the company
const getCompanyProfile = async (req, res) => {
  const ID = req.query.CompanyID;
  try {
    Company.findOne({ CompanyID: ID }, (err, results) => {
      if (results) {
        res.status(200).end(JSON.stringify(results));
      } else {
        res.writeHead(403, { 'content-type': 'text/json' });
        res.end(JSON.stringify('Information Not Found'));
      }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// update the company profile
const companyProfileUpdate = async (req, res) => {
  // eslint-disable-next-line no-console
  try {
    const {
      CompanyID,
      Website,
      Size,
      Type,
      Revenue,
      Headquarter,
      Industry,
      Founded,
      CompanyMission,
      CEO,
      CompanyDescription,
      City,
      State,
    } = req.body;
    Company.findOneAndUpdate(
      { CompanyID },
      {
        Website,
        Size,
        Type,
        Revenue,
        Headquarter,
        Industry,
        Founded,
        CompanyMission,
        CEO,
        CompanyDescription,
        City,
        State,
      },
      (e, output) => {
        if (e) {
          // eslint-disable-next-line no-console
          res.writeHead(404, {
            'Content-Type': 'text/plain',
          });
          res.end('Entry Not Found');
        } else {
          res.writeHead(201, {
            'Content-Type': 'text/plain',
          });
          res.end(JSON.stringify('Profile Updated'));
        }
      }
    );
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};
// get the Company Review for the company
const companyReviews = async (req, res) => {
  // eslint-disable-next-line no-console
  const { CompanyID } = req.query;
  let con = null;
  // eslint-disable-next-line no-console
  try {
    const userInsertProcedure = 'CALL fetchReview(?)';

    con = await mysqlConnection();
    const [results, fields] = await con.query(userInsertProcedure, CompanyID);
    con.end();
    if (results) {
      res.writeHead(200, { 'content-type': 'text/json' });
      res.end(JSON.stringify(results));
    } else {
      res.writeHead(403, { 'content-type': 'text/json' });
      res.end(JSON.stringify('No Reviews Found'));
    }
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
// Post Job to the company
const postJob = async (req, res) => {
  // eslint-disable-next-line no-console
  const {
    CompanyID,
    CompanyName,
    Title,
    JobDescription,
    Responsibilities,
    Qualifications,
    ExpectedSalary,
    Industry,
    Country,
    Remote,
    StreetAddress,
    City,
    State,
    Zip,
  } = req.body;
  // eslint-disable-next-line no-console
  let con = null;
  try {
    const userInsertProcedure = 'CALL jobInsert(?,?,CURDATE(),?,?,?)';

    con = await mysqlConnection();
    const [results, fields] = await con.query(userInsertProcedure, [
      CompanyName,
      CompanyID,
      StreetAddress,
      City,
      State,
    ]);
    con.end();
    const job = new Job({
      JobID: results[0][0].JobID,
      Title,
      CompanyID,
      CompanyName,
      CurrentStatus: 'Open',
      Industry,
      Remote,
      StreetAddress,
      City,
      State,
      Country,
      Zip,
      PostedDate: Date.now(),
      JobDescription,
      Responsibilities,
      Qualifications,
      ExpectedSalary,
      Votes: 0,
    });
    job.save((e, data) => {
      if (e) {
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end('Network Error');
      } else {
        res.writeHead(201, {
          'Content-Type': 'text/plain',
        });
        res.end(JSON.stringify('Job Created'));
      }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  } finally {
    if (con) {
      con.end();
    }
  }
  return res;
};

const favoriteReview = async (req, res) => {
  // eslint-disable-next-line no-console
  const { ID, Favorite } = req.body;
  let con = null;
  // eslint-disable-next-line no-console
  try {
    const query = 'UPDATE GENERAL_REVIEW SET Favorite = ? WHERE ID=?';

    con = await mysqlConnection();
    const [results, fields] = await con.query(query, [Favorite, ID]);
    con.end();
    if (results) {
      res.writeHead(201, { 'content-type': 'text/json' });
      res.end(JSON.stringify('response submitted'));
    } else {
      res.writeHead(500, { 'content-type': 'text/json' });
      res.end(JSON.stringify('error'));
    }
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
const reviewResponse = async (req, res) => {
  // eslint-disable-next-line no-console
  const { ID, Response } = req.body;
  let con = null;
  // eslint-disable-next-line no-console
  try {
    const query = 'UPDATE GENERAL_REVIEW SET Response = ? WHERE ID=?';

    con = await mysqlConnection();
    const [results, fields] = await con.query(query, [Response, ID]);
    con.end();
    if (results) {
      res.writeHead(201, { 'content-type': 'text/json' });
      res.end(JSON.stringify('response submitted'));
    } else {
      res.writeHead(500, { 'content-type': 'text/json' });
      res.end(JSON.stringify('error'));
    }
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
const featuredReview = async (req, res) => {
  // eslint-disable-next-line no-console
  const { CompanyID, ID, Response } = req.body;
  let con = null;
  // eslint-disable-next-line no-console
  try {
    const query = 'SELECT * FROM GENERAL_REVIEW WHERE ID=?';

    con = await mysqlConnection();
    const [results, fields] = await con.query(query, ID);
    con.end();
    Company.findOneAndUpdate({ CompanyID }, { FeaturedReview: results[0] }, (e, output) => {
      if (e) {
        // eslint-disable-next-line no-console
        res.writeHead(404, {
          'Content-Type': 'text/plain',
        });
        res.end('Entry Not Found');
      } else {
        res.writeHead(201, {
          'Content-Type': 'text/plain',
        });
        res.end(JSON.stringify('Review Updated'));
      }
    });
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

// get the profile for the company
const getJobs = async (req, res) => {
  const { CompanyID, PageNo } = req.query;
  try {
    const Jobs = await Job.find({ CompanyID });
    const count = Jobs.length;
    const noOfPages = Math.ceil(count / 10);
    const resultObj = {};
    const Jobresult = await Job.find({ CompanyID })
      .limit(10)
      .skip(PageNo * 10);
    resultObj.jobs = Jobresult;
    resultObj.count = count;
    resultObj.noOfPages = noOfPages;
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(resultObj));
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// get the applications received for a job
const jobsApplications = async (req, res) => {
  const { JobID, applicationPageNo } = req.query;
  let con = null;
  const limit = 10;
  const offset = applicationPageNo * 10;
  try {
    const fetchApplicationsQuery = 'CALL getApplications(?,?,?)';
    con = await mysqlConnection();
    const [results, fields] = await con.query(fetchApplicationsQuery, [JobID, limit, offset]);
    con.end();
    if (results[1][0].TotalCount === 0) {
      res.writeHead(200, { 'content-type': 'text/json' });
      res.end(JSON.stringify('No Applications found'));
    } else {
      const resultdata = [];
      resultdata.push(results[0]);
      resultdata.push(results[1]);
      res.writeHead(200, { 'content-type': 'text/json' });
      res.end(JSON.stringify(resultdata));
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

// update the applications status
const jobsApplicantUpdate = async (req, res) => {
  const { JobID, StudentID, Status } = req.query;
  let con = null;
  try {
    const updateApplicationsStatusQuery = 'CALL updateApplicationsStatus(?,?,?)';
    con = await mysqlConnection();
    const [results, fields] = await con.query(updateApplicationsStatusQuery, [
      JobID,
      StudentID,
      Status,
    ]);
    con.end();
    res.writeHead(200, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Updated the status'));
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

module.exports = {
  getCompanyProfile,
  companyProfileUpdate,
  companyReviews,
  postJob,
  favoriteReview,
  reviewResponse,
  featuredReview,
  getJobs,
  jobsApplications,
  jobsApplicantUpdate,
};
