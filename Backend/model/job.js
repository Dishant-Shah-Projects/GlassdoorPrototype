
var mongoose = require('mongoose');

var JobsSchema = new mongoose.Schema({
    Title: {type: String, required: true},
    CompanyID: {type: String, required: true},
    CompanyName: {type: String, required: true},
    CurrentStatus: {
        type: String,
        enum : [
    		'Open',
    		'Close'
        ]
    },
    Industry: {type: String, required: true},
    Remote: {
        type: String,
        enum : [
    		'Remote',
    		'InPerson'
        ]
    },
    StreetAddress: {type: String, required: true},
    CompanyName: {type: String, required: true},
    City: {type: String, required: true},
    State: {type: String, required: true},
    Country: {type: String, required: true},
    Zip: {type: Number, required: true},
    PostedDate: {type: Date, required: true},
    JobDescription: {type: String, required: true},
    Responsibilities: {type: String, required: true},
    Qualifications: {type: String, required: true},
    ExpectedSalary: {type: Number, required: true},
    ApplicationsReceived: [
    	{
		    StudentID: Number,
		    StudentName: String,
		    CompanyName: String,
		    Status: {
		        type: String,
		        enum : [
	        		'Submitted',
	        		'Reviewed', 
	        		'Initial Screening',
	        		'Interviewing',
	        		'Hired',
	        		'Rejected',
		        ]
		    },
		    ResumeURL: String,
		    CoverLetterURL: String,
		    Withdrawn: Boolean
     	}
    ],
    Votes: {type: Number, required: true},
});


module.exports = mongoose.model('Jobs', JobsSchema);
