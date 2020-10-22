//username: admin
//password: HqVH50irE9GAfRw5
//dbname: Glassdoor
//secrets: mongodb+srv://admin:<password>@cluster0.dg0n5.mongodb.net/<dbname>?retryWrites=true&w=majority

var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    StudentID: {type: String, required: true},
    ProfilePicURL: {type: String, required: true},
    Email: {type: String, required: true},
    PhoneNo: {type: String, required: true},
    Website: {type: String, required: true},
    AboutMe: {type: String, required: true},
    CurrentJobTitle: {type: String, required: true},
    Skills: [{type: String}],
    InterviewReview: [
    	{
		    companyID: String,
		    companyName: String,
		    imageURL: String,
		    reviewContent: String
     	}
    ],
    SalaryReview: [
    	{
		    companyID: String,
		    companyName: String,
		    imageURL: String,
		    reviewContent: String
     	}
    ],
    ResumePrimary: {type: String, required: true},
    Resumes: [{type: String}],
    FavouriteJobs: {type: String, required: true},
    JobStatus: {
        type: String,
        enum : ['Not Looking','Casually Looking', 'Actively Looking'],
        default: 'Actively Looking'
    },
    JobTitle: {type: String, required: true},
    TargetSalary: {type: Number, required: true},
    OpentoRelocation: {type: Boolean, required: true},
    Industry: {type: String, required: true},
    Race: {type: String, required: true},
    Gender: {
        type: String,
        enum : ['Male','Female', 'Prefer not to share']
    },
    AcceptedReviewCount: {type: Number, required: true},
    Disability: {
        type: String,
        enum : ['Yes','No', 'Prefer not to share']
    },
    VeteranStatus: {
        type: String,
        enum : ['Yes','No', 'Prefer not to share']
    },
    ApplicationsReceived: [
    	{
		    JobID: Number,
		    Title: String,
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
		    Withdrawn: Boolean,
		    PostedDate: Date,
		    StreetAddress: String,
		    City: String,
		    State: String,
     	}
    ],

});


module.exports = mongoose.model('Student', StudentSchema);
