const express = require('express');

const Router = express.Router();
const { checkAuth } = require('../SharedFuntionalities/passport');

const {
  reviews,
  updateGeneralReviews,
  updateInterviewReviews,
  updateSalaryReviews,
  companyList,
  companyReviewList,
  pictures,
  updatePictures,
  jobStats,
  analytics,
  getGeneralReviews,
  getSalaryReviews,
  getInterviewReviews,
  getPhotos,
} = require('../Admin/adminFunctionality');

Router.get('/reviews', checkAuth, async (req, res) => {
  const value = await reviews(req, res);
  return value;
});

Router.post('/updateGeneralReviews', checkAuth, async (req, res) => {
  const value = await updateGeneralReviews(req, res);
  return value;
});

Router.post('/updateInterviewReviews', checkAuth, async (req, res) => {
  const value = await updateInterviewReviews(req, res);
  return value;
});

Router.post('/updateSalaryReviews', checkAuth, async (req, res) => {
  const value = await updateSalaryReviews(req, res);
  return value;
});

Router.get('/companyList', checkAuth, async (req, res) => {
  const value = await companyList(req, res);
  return value;
});

Router.get('/companyReviewList', checkAuth, async (req, res) => {
  const value = await companyReviewList(req, res);
  return value;
});

Router.get('/pictures', checkAuth, async (req, res) => {
  const value = await pictures(req, res);
  return value;
});

Router.post('/updatePictures', checkAuth, async (req, res) => {
  const value = await updatePictures(req, res);
  return value;
});

Router.get('/jobStats', checkAuth, async (req, res) => {
  const value = await jobStats(req, res);
  return value;
});

Router.get('/analytics', checkAuth, async (req, res) => {
  const value = await analytics(req, res);
  return value;
});

Router.get('/getGeneralReviews', checkAuth, async (req, res) => {
  const value = await getGeneralReviews(req, res);
  return value;
});

Router.get('/getSalaryReviews', checkAuth, async (req, res) => {
  const value = await getSalaryReviews(req, res);
  return value;
});

Router.get('/getInterviewReviews', checkAuth, async (req, res) => {
  const value = await getInterviewReviews(req, res);
  return value;
});

Router.get('/getPhotos', checkAuth, async (req, res) => {
  const value = await getPhotos(req, res);
  return value;
});

module.exports = Router;
