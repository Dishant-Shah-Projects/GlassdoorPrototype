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
  ResumePrimary: { type: String },
  Resumes: [{ type: String }],
  FavouriteJobs: [{ type: String }],
  JobStatus: {
    type: String,
    enum: [
      'Select',
      'Not looking',
      'Not looking, but open',
      'Casually looking',
      'Actively looking',
    ],
    default: 'Select',
  },
  JobType: [
    {
      type: String,
    },
  ],
  PreferredJobTitle: { type: String },
  TargetSalary: { type: Number },
  OpentoRelocation: { type: Boolean },
  Industry: { type: String },
  Race: [
    {
      type: String,
    },
  ],

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
