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
const redisClient = require('../redisClient');
// eslint-disable-next-line camelcase
async function handle_request(msg, callback) {
  // eslint-disable-next-line default-case
  switch (msg.api) {
    case 'getProfile': {
      const res = {};
      try {
        const { customerID } = msg.query;
      } catch {
        res.status = 500;
        res.end = 'Network Error';
        callback(null, res);
      }
      break;
    }
    case 'getAllReview': {
      const { CompanyID } = msg.query;
      let con = null;
      const res = {};
      try {
        const redisKey = `getAllReview-CompanyID=${CompanyID}`;
        redisClient.get(redisKey, async (err, data) => {
          // data is available in Redis
          if (data) {
            console.log('in redis');
            res.status = 200;
            res.end = JSON.stringify(data);
            callback(null, res);
          } else {
            try {
              const searchQuery = 'SELECT Descriptions FROM GENERAL_REVIEW WHERE CompanyID=? LIMIT 2000;';
              con = await mysqlConnection();
              const [results2] = await con.query(searchQuery, CompanyID);
              con.end();
              // Add to redis
              redisClient.set(redisKey, JSON.stringify(results2));
              res.status = 200;
              res.end = JSON.stringify(results2);
              callback(null, res);
            } catch (error) {
              res.status = 500;
              res.end = JSON.stringify('Network Error');
              callback(null, res);
            }
          }
        });
      } catch (error) {
        res.status = 500;
        res.end = JSON.stringify('Network Error');
        callback(null, res);
      } finally {
        if (con) {
          con.end();
        }
      }
    }
  }
}
exports.handle_request = handle_request;
