/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysqlConnection = require('../mysqlConnection');
const { secret } = require('../config');
const Company = require('../model/Company');
const Student = require('../model/Student');
const Static = require('../model/Static');

// get the profile for the company
const getCompanyProfile = async (req, res) => {
  // eslint-disable-next-line no-console
  const ID = req.query.CompanyID;
  // eslint-disable-next-line no-console
  try {
    Company.findOne({ CompanyID: ID }, (err, results) => {
      if (results) {
        // eslint-disable-next-line no-console
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

module.exports = {
  getCompanyProfile,
  companyProfileUpdate,
};
