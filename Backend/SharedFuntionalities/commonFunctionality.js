/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysqlConnection = require('../mysqlConnection');
const { secret } = require('../config');
const Company = require('../model/Company');
const Student = require('../model/Student');
const { checkAuth } = require('./passport');
// Fucntion to check if the emailID is already in use
const checkEmail = async (emailID) => {
  try {
    const emailProcedure = 'CALL existingEmail(?)';
    const con = await mysqlConnection();
    const [results, fields] = await con.query(emailProcedure, emailID);
    con.end();
    if (results[0].length !== 0) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

// check the table for password and return the role and the user ID
const checklogin = async (emailID, Password) => {
  try {
    const emailProcedure = 'CALL existingEmail(?)';
    const con = await mysqlConnection();
    const [results, fields] = await con.query(emailProcedure, emailID);
    con.end();
    if (await bcrypt.compare(Password, results[0][0].Password)) {
      return [results[0][0].Role, results[0][0].UserID];
    }
    return false;
  } catch (error) {
    return false;
  }
};

// check the login and set the jwt token
const userLogin = async (req, res) => {
  const { UserName, Password } = req.body;

  // eslint-disable-next-line prefer-template
  try {
    const role = await checklogin(UserName, Password);
    if (role) {
      const payload = { rol: role[0], Name: UserName, ID: role[1] };
      const accesstoken = jwt.sign(payload, secret, {
        expiresIn: 1008000,
      });
      res.status(200).end(JSON.stringify(`JWT ${accesstoken}`));
    } else {
      res.writeHead(400, { 'content-type': 'text/json' });
      res.end(JSON.stringify('Invalid Credentials'));
    }
  } catch (error) {
    res.writeHead(403, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// To insert the user into SIGNUP table
const userInsert = async (emailID, hashedPassword, role) => {
  try {
    const userInsertProcedure = 'CALL userInsert(?,?,?)';
    const con = await mysqlConnection();
    const [results, fields] = await con.query(userInsertProcedure, [emailID, hashedPassword, role]);
    con.end();
    return results[0][0].ID;
  } catch (error) {
    return null;
  }
};

// To signup a user (company/student)
const userSignup = async (req, res) => {
  const { UserName, Password, Role } = req.body;
  // eslint-disable-next-line prefer-template
  try {
    if (await checkEmail(UserName)) {
      res.writeHead(403, { 'content-type': 'text/json' });
      res.end(JSON.stringify('ID already in use'));
    } else {
      const hashedPassword = await bcrypt.hash(Password, 10);
      const userID = await userInsert(UserName, hashedPassword, Role);
      if (userID) {
        if (Role === 'company') {
          const company = new Company({
            CompanyID: userID,
            ...req.body,
          });
          company.save((e, data) => {
            if (e) {
              res.writeHead(500, {
                'Content-Type': 'text/plain',
              });
              res.end('Network Error');
            } else {
              res.writeHead(201, {
                'Content-Type': 'text/plain',
              });
              res.end(JSON.stringify('Profile Created'));
            }
          });
        } else {
          const student = new Student({
            StudentID: userID,
            Email: UserName,
          });
          student.save((e, data) => {
            if (e) {
              res.writeHead(500, {
                'Content-Type': 'text/plain',
              });
              res.end('Network Error');
            } else {
              res.writeHead(201, {
                'Content-Type': 'text/plain',
              });
              res.end(JSON.stringify('Profile Created'));
            }
          });
        }
      } else {
        res.writeHead(401, { 'content-type': 'text/json' });
        res.end(JSON.stringify('Profile Creation Failed'));
      }
    }
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/json' });
    res.end(JSON.stringify('Network Error'));
  }
  return res;
};

// To logout the user
const logout = async (req, res) => {
  req.logout();
  res.status(200).end('Logged out');
};

module.exports = { userSignup, logout, userLogin };
