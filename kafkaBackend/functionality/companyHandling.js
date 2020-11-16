/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysqlConnection = require('../mysqlConnection');
const { secret } = require('../config');
const Company = require('../model/Company');
const Student = require('../model/Student');
const Job = require('../model/Job');
const Static = require('../model/Static');

// eslint-disable-next-line camelcase
async function handle_request(msg, callback) {
  // eslint-disable-next-line default-case
  switch (msg.api) {
    case 'getCompanyProfile': {
      const res = {};
      try {
        const { CompanyID } = msg.query;
        Company.findOne({ CompanyID }, (err, results) => {
          if (results) {
            res.status = 200;
            res.end = JSON.stringify(results);
            callback(null, res);
          } else {
            res.status = 403;
            res.end = 'Information Not Found';
            callback(null, res);
          }
        });
      } catch {
        res.status = 500;
        res.end = 'Network Error';
        callback(null, res);
      }
      break;
    }
  }
}
exports.handle_request = handle_request;
