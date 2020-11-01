const express = require('express');

const Router = express.Router();

const {
  userSignup,
  logout,
  userLogin,
  staticData,
  staticDataInsert,
  staticDataUpdate,
} = require('../SharedFuntionalities/commonFunctionality');
const { auth } = require('../SharedFuntionalities/passport');

auth();
// Signup for the customer
Router.post('/signup', async (req, res) => {
  const value = await userSignup(req, res);
  return value;
});

// login for the users
Router.post('/login', async (req, res) => {
  const value = await userLogin(req, res);
  return value;
});

// Logout for the users
Router.post('/logout', async (req, res) => {
  const value = await logout(req, res);
  return value;
});
// Get Static Data
Router.get('/staticdata', async (req, res) => {
  const value = await staticData(req, res);
  return value;
});
// Insert Sample Data
Router.post('/staticdatainsert', async (req, res) => {
  const value = await staticDataInsert(req, res);
  return value;
});
// Update Static Data
Router.post('/staticdataupdate', async (req, res) => {
  const value = await staticDataUpdate(req, res);
  return value;
});
module.exports = Router;
