const express = require('express');

// const kafka = require('../kafka/client');

const Router = express.Router();
const {
  getCompanyProfile,
  companyProfileUpdate,
  companyReviews,
  postJob,
  favoriteReview,
  reviewResponse,
  featuredReview,
  getJobs,
  jobsApplications,
  jobsApplicantUpdate,
} = require('../Company/companyFunctionality');
const { auth, checkAuth } = require('../SharedFuntionalities/passport');

auth();
// Company API calls
// Load the company profile API 26
Router.get('/profile', async (req, res) => {
  const value = await getCompanyProfile(req, res);
  return value;
});
// Update the company profile API 25
Router.post('/profileupdate', checkAuth, async (req, res) => {
  const value = await companyProfileUpdate(req, res);
  return value;
});
// load the reviews
Router.get('/review', checkAuth, async (req, res) => {
  const value = await companyReviews(req, res);
  return value;
});
// favorite a review
Router.post('/reviewFavorite', checkAuth, async (req, res) => {
  const value = await favoriteReview(req, res);
  return value;
});
// respond to the review
Router.post('/reviewResponse', checkAuth, async (req, res) => {
  const value = await reviewResponse(req, res);
  return value;
});
// selected featured review
Router.post('/reviewFeatured', checkAuth, async (req, res) => {
  const value = await featuredReview(req, res);
  return value;
});
// Post Job
Router.post('/postJob', checkAuth, async (req, res) => {
  const value = await postJob(req, res);
  return value;
});
// get Job
Router.get('/jobs', async (req, res) => {
  const value = await getJobs(req, res);
  return value;
});

// Fetch applications
Router.get('/jobsApplications', checkAuth, async (req, res) => {
  const value = await jobsApplications(req, res);
  return value;
});
// Update application status
Router.post('/jobsApplicantUpdate', checkAuth, async (req, res) => {
  const value = await jobsApplicantUpdate(req, res);
  return value;
});

module.exports = Router;
