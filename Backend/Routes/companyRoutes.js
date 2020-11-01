const express = require('express');

const Router = express.Router();
const { getCompanyProfile, companyProfileUpdate } = require('../Company/companyFunctionality');
const { auth, checkAuth } = require('../SharedFuntionalities/passport');

auth();
// Company API calls
// Load the company profile API 26
Router.get('/profile', checkAuth, async (req, res) => {
  // eslint-disable-next-line no-console
  const value = await getCompanyProfile(req, res);
  return value;
});
// Update the company profile API 25
Router.post('/profileupdate', checkAuth, async (req, res) => {
  const value = await companyProfileUpdate(req, res);
  return value;
});

module.exports = Router;
