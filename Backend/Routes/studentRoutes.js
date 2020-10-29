const express = require('express');

const Router = express.Router();

const { navbar, searchCompany } = require('../Student/studentFunctionality');

const { checkAuth } = require('../SharedFuntionalities/passport');

// To get the data required for navbar
Router.get('/navbar', checkAuth, async (req, res) => {
  const value = await navbar(req, res);
  return value;
});

// To fetch the results of the company search
Router.get('/searchCompany', checkAuth, async (req, res) => {
  const value = await searchCompany(req, res);
  return value;
});

module.exports = Router;
