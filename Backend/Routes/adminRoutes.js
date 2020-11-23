const express = require('express');

const Router = express.Router();
const {
  reviews,
  updateReviews,
  companyList,
} = require('../Admin/adminFunctionality');

Router.get('/reviews', async (req, res) => {
  const value = await reviews(req, res);
  return value;
});

Router.post('/updateReviews', async (req, res) => {
  const value = await updateReviews(req, res);
  return value;
});

Router.get('/companyList', async (req, res) => {
  const value = await companyList(req, res);
  return value;
});

module.exports = Router;
