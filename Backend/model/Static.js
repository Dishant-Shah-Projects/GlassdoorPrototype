const mongoose = require('mongoose');

const StaticSchema = new mongoose.Schema({
  JobSearchDropDowns: ["Jobs","Companies","Salaries","Interviews"],
  JobFilterInJobTab: ['JobTitle', 'City'],
  Ethnicity: ['Indigenous American or Alaska Native', 'East Asian', 'South Asian', 'Southeast Asian', 'Native Hawaiian or Other Pacific Islander', 'Middle Eastern' , 'Black or African American' , 'Hispanic or Latinx', 'White',, 'Prefer to Self Describe', 'Prefer Not to Say'],
  Gender: ['Man', 'Woman','Non-Binary' , 'Prefer to Self Describe', 'Prefer Not to Say'],
  VeteranStatus: ['Yes','No','Prefer Not to Say'],
  Disability: ['Yes','No','Prefer Not to Say']
});

module.exports = mongoose.model('Static', StaticSchema);
