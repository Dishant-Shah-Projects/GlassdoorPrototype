const express = require('express');

const Router = express.Router();

const {
  navbar,
  searchCompany,
  getJobSuggestions,
  searchJob,
} = require('../Student/studentFunctionality');

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

// To fetch the results of the job search
Router.get('/searchJob', checkAuth, async (req, res) => {
  const value = await searchJob(req, res);
  return value;
});

// To get the suggested jobs for students
Router.get('/jobSuggestions', checkAuth, async (req, res) => {
  const value = await getJobSuggestions(req, res);
  return value;
});

module.exports = Router;
