const express = require('express');

const Router = express.Router();

const { userSignup, logout } = require('../SharedFuntionalities/commonFunctionality');

// Signup for the customer
Router.post('/signup', async (req, res) => {
  const value = await userSignup(req, res);
  return value;
});

// Logout for the customer
Router.post('/logout', async (req, res) => {
  const value = await logout(req, res);
  return value;
});

module.exports = Router;
