const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  StudentID: { type: Number, required: true },
  Name: { type: String },
  ProfilePicURL: { type: String },
  Email: { type: String, required: true },
  PhoneNo: { type: Number },
  Website: { type: String },
  StreetAddress: { type: String },
  City: { type: String },
  State: { type: String },
  Country: { type: String },
  Zip: { type: Number, min: 10000, max: 99999 },
  AboutMe: { type: String },
  CurrentJobTitle: { type: String },
  Skills: [{ type: String }],
  SalaryReview: [
    {
      ReviewID: { type: String },
      Status: {
        type: String,
        enum: ['Not Approved', 'Approved', 'Disapproved'],
      },
      DatePosted: { type: Date },
      BaseSalary: { type: Number },
      Bonuses: { type: Number },
      JobTitle: { type: String },
      Years: { type: Number },
      StreetAddress: { type: String },
      State: { type: String },
      Country: { type: String },
      Zip: { type: Number, min: 10000, max: 99999 },
    },
  ],
  InterviewReview: [
    {
      ReviewID: { type: String },
      Status: {
        type: String,
        enum: ['Not Approved', 'Approved', 'Disapproved'],
      },
      Helpful: { type: Number },
      DatePosted: { type: Date },
      OverallExperience: {
        type: String,
        enum: ['Positive', 'Negative', 'Neutral'],
      },
      JobTitle: { type: String },
      Description: { type: String },
      Difficulty: {
        type: String,
        enum: ['Easy', 'Average', 'Difficult'],
      },
      OfferStatus: {
        type: String,
        enum: ['Rejected', 'Accepted'],
      },
      InterviewQuestions: { type: String },
      Answers: { type: String },
    },
  ],
  ResumePrimary: { type: String },
  Resumes: [{ type: String }],
  FavouriteJobs: [{ type: String }],
  JobStatus: {
    type: String,
    enum: ['Not Looking', 'Casually Looking', 'Actively Looking'],
    default: 'Actively Looking',
  },
  JobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary'],
    default: 'Full-time',
  },
  PreferredJobTitle: { type: String },
  TargetSalary: { type: Number },
  OpentoRelocation: { type: Boolean },
  Industry: { type: String },
  Race: {
    type: String,
    enum: [
      'Indigenous American or Alaska Native',
      'East Asian',
      'South Asian',
      'Southeast Asian',
      'Native Hawaiian or Other Pacific Islander',
      'Middle Eastern',
      'Black or African American',
      'Hispanic or Latinx',
      'White',
      'Prefer to Self Describe',
      'Prefer Not to Say',
    ],
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female', 'Prefer not to share'],
  },
  AcceptedReviewCount: { type: Number },
  Disability: {
    type: String,
    enum: ['Yes', 'No', 'Prefer Not to Say'],
  },
  VeteranStatus: {
    type: String,
    enum: ['Yes', 'No', 'Prefer Not to Say'],
  },
});

module.exports = mongoose.model('student', StudentSchema);
