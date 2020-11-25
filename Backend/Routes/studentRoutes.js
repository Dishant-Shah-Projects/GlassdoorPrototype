const express = require('express');

const Router = express.Router();

const kafka = require('../kafka/client');

const { uploadFile, uploadmultiFile, imageUpload } = require('../S3Bucket/s3BucketUpload');
const {
  navbar,
  searchCompany,
  getJobSuggestions,
  searchJob,
  companyApplyJob,
  companyFavouriteJobs,
  removeFavouriteJobs,
  searchInterview,
  resumesAdd,
  resumesDelete,
  jobWithdraw,
  profileUpdate,
  companyProfile,
  companyReview,
  addCompanyReview,
  salaryAddReview,
  featureReview,
  getInterviewReivew,
  interviewAddReview,
  interviewData,
  companyHelpfulReview,
  companyJobs,
  salaryReview,
  companyInterviewHelpfulReview,
  fillJobApplication,
  getFavoriteJobs,
  getAppliedJobs,
  getInterviewReivewStudent,
  studentSalaryReview,
  studentCompanyReview,
  companyPhotos,
  studentCompanyPhotos,
  addCompanyPhotos,
  searchSalary,
  companyViewCount,
  deleteSalaryReview,
  deleteInterviewReview,
  deleteGeneralReview,
  deletePhoto,
  // getAllReview,
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

// To post the favourite jobs for students
Router.post('/companyFavouriteJobs', checkAuth, async (req, res) => {
  const value = await companyFavouriteJobs(req, res);
  return value;
});

// To remove the favourite jobs for students
Router.post('/removeFavouriteJobs', checkAuth, async (req, res) => {
  const value = await removeFavouriteJobs(req, res);
  return value;
});

// To fetch the results of the interview search
Router.get('/searchInterview', checkAuth, async (req, res) => {
  const value = await searchInterview(req, res);
  return value;
});

// To add resume of student
Router.post('/resumesAdd', checkAuth, imageUpload, async (req, res) => {
  const value = await resumesAdd(req, res);
  return value;
});

// To remove resume of student
Router.post('/resumesDelete', async (req, res) => {
  const value = await resumesDelete(req, res);
  return value;
});

// To submit the application for a job in the company
Router.post('/companyApplyJob', checkAuth, async (req, res) => {
  const value = await companyApplyJob(req, res);
  return value;
});

// To withdraw an application from a job
Router.post('/jobWithdraw', checkAuth, async (req, res) => {
  const value = await jobWithdraw(req, res);
  return value;
});

// To update the profile of the student
Router.post('/profileUpdate', checkAuth, async (req, res) => {
  const value = await profileUpdate(req, res);
  return value;
});

// upload to e3 bucket and return the URL of file.
Router.post('/upload', checkAuth, async (req, res) => {
  const value = await uploadFile(req, res);
  return value;
});

// upload multiple files to e3 bucket and return the URL of file. USE multfiles as the field name
Router.post('/uploadMultiple', checkAuth, async (req, res) => {
  const value = await uploadmultiFile(req, res);
  return value;
});

// get the company profile
Router.get('/companyProfile', checkAuth, async (req, res) => {
  const value = await companyProfile(req, res);
  return value;
});

// get the company reviews
Router.get('/companyReview', checkAuth, async (req, res) => {
  const value = await companyReview(req, res);
  return value;
});

// get all company reviews
Router.get('/getAllReview', checkAuth, async (req, res) => {
  const data = {
    api: 'getAllReview',
    query: req.query,
  };
  kafka.make_request('student', data, (err, results) => {
    // console.log('in result');
    // console.log(results);
    if (err) {
      res.status(500);
      res.end('Network Error');
    } else {
      res.status(results.status);
      res.end(results.end);
    }
  });
});

// get the interview reviews
Router.get('/interviewReview', async (req, res) => {
  const value = await getInterviewReivew(req, res);
  return value;
});

// get the interview data
Router.get('/interviewData', checkAuth, async (req, res) => {
  const value = await interviewData(req, res);
  return value;
});

// post the post interview reviews
Router.post('/interviewAddReview', checkAuth, async (req, res) => {
  const value = await interviewAddReview(req, res);
  return value;
});

// get the featured reviews
Router.get('/featureReview', checkAuth, async (req, res) => {
  const value = await featureReview(req, res);
  return value;
});

// add companyreview
Router.post('/addReview', async (req, res) => {
  const value = await addCompanyReview(req, res);
  return value;
});

// add salaryreview
Router.post('/salaryAddreview', checkAuth, async (req, res) => {
  const value = await salaryAddReview(req, res);
  return value;
});

// post helpful review count
Router.post('/companyHelpfulReview', checkAuth, async (req, res) => {
  const value = await companyHelpfulReview(req, res);
  return value;
});

// post helpful review count for interview review
Router.post('/companyInterviewHelpfulReview', async (req, res) => {
  const value = await companyInterviewHelpfulReview(req, res);
  return value;
});

// get search job result
Router.get('/companyJobs', checkAuth, async (req, res) => {
  const value = await companyJobs(req, res);
  return value;
});

// get search job result
Router.get('/salaryReview', async (req, res) => {
  const value = await salaryReview(req, res);
  return value;
});

// Get job and compay details when apply form is being opened
Router.get('/fillJobApplication', checkAuth, async (req, res) => {
  const value = await fillJobApplication(req, res);
  return value;
});

// Get the information about the saved job
Router.get('/getFavoriteJobs', checkAuth, async (req, res) => {
  const value = await getFavoriteJobs(req, res);
  return value;
});

// Get the details about the applied job
Router.get('/getAppliedJobs', checkAuth, async (req, res) => {
  const value = await getAppliedJobs(req, res);
  return value;
});
// get the interview reviews for students
Router.get('/studentInterviewReview', checkAuth, async (req, res) => {
  const value = await getInterviewReivewStudent(req, res);
  return value;
});

// get the salary reviews for students
Router.get('/studentSalaryReview', checkAuth, async (req, res) => {
  const value = await studentSalaryReview(req, res);
  return value;
});
// get the general reviews for students
Router.get('/studentCompanyReview', checkAuth, async (req, res) => {
  const value = await studentCompanyReview(req, res);
  return value;
});

// get the photos for company
Router.get('/companyPhotos', checkAuth, async (req, res) => {
  const value = await companyPhotos(req, res);
  return value;
});

// get the photos reviews for students
Router.get('/studentCompanyPhotos', checkAuth, async (req, res) => {
  const value = await studentCompanyPhotos(req, res);
  return value;
});

// post the photos reviews for students
Router.post('/addCompanyPhotos', checkAuth, async (req, res) => {
  const value = await addCompanyPhotos(req, res);
  return value;
});

// To search company results o the basis of slary search
Router.get('/searchSalary', checkAuth, async (req, res) => {
  const value = await searchSalary(req, res);
  return value;
});

// To increase the view count of a company
Router.post('/companyViewCount', checkAuth, async (req, res) => {
  const value = await companyViewCount(req, res);
  return value;
});

// Delete the Salary Review
Router.delete('/deleteSalaryReview', checkAuth, async (req, res) => {
  const value = await deleteSalaryReview(req, res);
  return value;
});

// Delete the Interview Review
Router.delete('/deleteInterviewReview', checkAuth, async (req, res) => {
  const value = await deleteInterviewReview(req, res);
  return value;
});

// Delete the General Review
Router.delete('/deleteGeneralReview', checkAuth, async (req, res) => {
  const value = await deleteGeneralReview(req, res);
  return value;
});

// Delete the photo
Router.post('/deletePhoto', checkAuth, async (req, res) => {
  const value = await deletePhoto(req, res);
  return value;
});
module.exports = Router;
