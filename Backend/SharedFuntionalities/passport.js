/* eslint-disable consistent-return */
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const passport = require('passport');
const { secret } = require('../config');

const Company = require('../model/Company');
const Student = require('../model/Student');
const mysqlConnection = require('../mysqlConnection');

function auth() {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: secret,
  };
  passport.use(
    // eslint-disable-next-line camelcase
    new JwtStrategy(opts, async (jwt_payload, callback) => {
      // eslint-disable-next-line camelcase
      const { ID } = jwt_payload;
      const Role = jwt_payload.rol;
      if (Role === 'student') {
        Student.findOne({ StudentID: ID }, (err, results) => {
          if (err) {
            return callback(err, false);
          }
          if (results) {
            callback(null, results);
          } else {
            callback(null, false);
          }
        });
      } else if (Role === 'company') {
        Company.findOne({ CompanyID: ID }, (err, results) => {
          if (err) {
            return callback(err, false);
          }
          if (results) {
            callback(null, results);
          } else {
            callback(null, false);
          }
        });
      } else if (Role === 'admin') {
        let con = null;
        try {
          const findQuery = 'SELECT * FROM SIGNUP WHERE UserID=?';
          con = await mysqlConnection();
          const [results] = await con.query(findQuery, ID);
          con.end();
          if (results[0].Role === 'admin') {
            callback(null, results);
          } else {
            callback(null, false);
          }
        } catch (error) {
          return callback(error, false);
        } finally {
          if (con) {
            con.end();
          }
        }
      }
    })
  );
}

exports.auth = auth;
exports.checkAuth = passport.authenticate('jwt', { session: false });
