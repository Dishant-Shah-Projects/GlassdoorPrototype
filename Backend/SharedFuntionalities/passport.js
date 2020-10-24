/* eslint-disable consistent-return */
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const passport = require('passport');
const { secret } = require('../config');

const Company = require('../model/Company');
const Student = require('../model/Student');

function auth() {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: secret,
  };
  passport.use(
    // eslint-disable-next-line camelcase
    new JwtStrategy(opts, (jwt_payload, callback) => {
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
      }
    })
  );
}

exports.auth = auth;
exports.checkAuth = passport.authenticate('jwt', { session: false });
