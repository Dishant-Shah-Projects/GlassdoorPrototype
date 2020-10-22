
var mongoose = require('mongoose');


var CompanySchema = new mongoose.Schema({
    CompanyID: {type: String, required: true},
    CompanyName: {type: String, required: true},
    Website: {type: String, required: true},
    Size: {type: Number, required: true},
    ProfileImg: {type: String, required: true},
    Type: {type: String, required: true},
    Revenue: {type: Number, required: true},
    Headquarter: {type: String, required: true},
    Industry: {type: String, required: true},
    Founded: {type: Date, required: true},
    CompayDescription: {type: String, required: true},
    CompanyMission: {type: String, required: true},
    CEO: {type: String, required: true},
    Viewcount: {type: Number, required: true},
    SalaryReviewCount: {type: Number, required: true},
    GeneralReviewCount: {type: Number, required: true},
    InterviewReviewCount: {type: Number, required: true},
    JobCount: {type: Number, required: true},
    JobCount: {type: Number, required: true},
    email: {type: String, required: true},
    FeaturedReview: [
	    {
	    	ReviewObject: Schema.Types.Mixed
	    }
    ].
    SalaryReview : [
    	{
    		Status: {
		        type: String,
		        enum : [
	        		'Not Approved',
	        		'Approved', 
	        		'Disapproved',
		        ]
		    },
		    DatePosted: Date,
	        BaseSalary: Number,
	        Bonuses: Number,
	        JobTitle: String,
	        StreetAddress: Number,
	        State: String,
	        Country: String,
	        Zip: String,
    	}

    ],
    InterviewReview : [
    	{
    		Status: {
		        type: String,
		        enum : [
	        		'Not Approved',
	        		'Approved', 
	        		'Disapproved',
		        ]
		    },
		    Helpful: Number,
	        DatePosted: Date,
	        OverallExperience: {
		        type: String,
		        enum : [
	        		'Positive',
	        		'Negative', 
	        		'Neutral',
		        ]
		    },
	        JobTitle: String,
	        Description: String,
	        Difficulty: {
		        type: String,
		        enum : [
	        		'Easy',
	        		'Average', 
	        		'Difficult',
		        ]
		    },
		    OfferStatus: {
		        type: String,
		        enum : [
	        		'Rejected',
	        		'Accepted', 
		        ]
		    },
		    InterviewQuestions: String,
	        Answers: String,
    	}
    ],
    Photos: [
    	{PhotoURL: String}
    ]
});


module.exports = mongoose.model('Company', CompanySchema);
