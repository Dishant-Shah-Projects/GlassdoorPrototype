const mongoose = require('mongoose');

const StaticSchema = new mongoose.Schema({
  JobSearchDropDowns: [String],
  JobFilterInJobTab: [String],
  Ethnicity: [String],
  Gender: [String],
  VeteranStatus: [String],
  Disability: [String],
});

module.exports = mongoose.model('static_data', StaticSchema);
