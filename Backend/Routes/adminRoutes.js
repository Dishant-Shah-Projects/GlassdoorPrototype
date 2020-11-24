const express = require('express');

const Router = express.Router();
const { checkAuth } = require('../SharedFuntionalities/passport');

const {
  reviews,
  updateReviews,
  companyList,
} = require('../Admin/adminFunctionality');

Router.get('/reviews', checkAuth, async (req, res) => {
  const value = await reviews(req, res);
  return value;
});

Router.post('/updateReviews', checkAuth, async (req, res) => {
  const value = await updateReviews(req, res);
  return value;
});

Router.get('/companyList', checkAuth, async (req, res) => {
  const value = await companyList(req, res);
  return value;
});

module.exports = Router;
