const express = require('express');

const Router = express.Router();

const { userSignup, logout, userLogin } = require('../SharedFuntionalities/commonFunctionality');
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

module.exports = Router;
