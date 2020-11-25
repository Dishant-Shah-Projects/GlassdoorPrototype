/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const url = require('url');

const GeneralReview = require('../model/GeneralReview');
const Company = require('../model/Company');
const Student = require('../model/Student');
const Photos = require('../model/Photos');

// get reviews for the admin to approve
const reviews = async (req, res) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { PageNo } = url.parse(req.url, true).query;
    const reviewsData = await GeneralReview.find({ Status: 'Not Approved' })
      .limit(10)
      .skip(PageNo * 10)
      .exec();
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(reviewsData));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

// Update review status
const updateReviews = async (req, res) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { CompanyID, ID, Status } = req.body;
    const filter = { $and: [{ CompanyID }, { ID }] };
    const update = { Status };
    const result = await GeneralReview.findOneAndUpdate(filter, update);
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(result));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

// get company list based on search
const companyList = async (req, res) => {
  try {
    const { searchString, PageNo } = url.parse(req.url, true).query;
    const results = await Company.find({ CompanyName: { $regex: `${searchString}`, $options: 'i' } })
      .limit(10)
      .skip(PageNo * 10)
      .exec();
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(results));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

// get company review list based on companyID
const companyReviewList = async (req, res) => {
  try {
    const { CompanyID, PageNo } = url.parse(req.url, true).query;
    const results = await GeneralReview.find({ CompanyID })
      .limit(10)
      .skip(PageNo * 10)
      .exec();
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(results));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

// get pictures to be approved
const pictures = async (req, res) => {
  try {
    const { PageNo } = url.parse(req.url, true).query;
    const reviewsData = await Photos.find({ Status: 'Not Approved' })
      .limit(10)
      .skip(PageNo * 10)
      .exec();
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(reviewsData));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

// Update review status
const updatePictures = async (req, res) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { CompanyID, ID, Status } = req.body;
    const filter = { $and: [{ CompanyID }, { ID }] };
    const update = { Status };
    const result = await Photos.findOneAndUpdate(filter, update);
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(result));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

// get job status of company
const jobStats = async (req, res) => {
  try {
    const { CompanyID } = url.parse(req.url, true).query;
    const jobData = await Company.find({ CompanyID }).exec();
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(jobData));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

// get analytics
const analytics = async (req, res) => {
  try {
    const todayDate = new Date();
    const day = String(todayDate.getDate()).padStart(2, '0');
    const month = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = todayDate.getFullYear();
    const today = `${year}-${month}-${day}`;
    const reviewData = await GeneralReview.find(
      { DatePosted: { $gte: today } },
    );

    const companyReview = await GeneralReview.aggregate(
      [
        {
          $group: {
            _id: '$CompanyID',
            count: { $sum: 1 },
          },
        },
        {
          $sort: { count: -1 },
        },
        {
          $limit: 5,
        },
      ],
    );
    const topCompanyIDArray = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < companyReview.length; index++) {
      topCompanyIDArray.push(companyReview[index]._id);
    }
    const topCompanyList = await Company.find(
      { CompanyID: { $in: topCompanyIDArray } },
    );

    const topAveragerRating = await Company.aggregate(
      [
        {
          $match: { GeneralReviewCount: { $ne: 0 } },
        },
        {
          $project: {
            _id: '$CompanyID',
            average: {
              $divide: ['$TotalGeneralReviewRating', '$GeneralReviewCount'],
            },
          },
        },
        {
          $sort: { average: -1 },
        },
        {
          $limit: 5,
        },
      ],
    );

    const topAverageCompanyArray = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < topAveragerRating.length; index++) {
      topAverageCompanyArray.push(topAveragerRating[index]._id);
    }
    const topAverageList = await Company.find(
      { CompanyID: { $in: topAverageCompanyArray } },
    );

    const topStudentList = await Student.find({})
      .sort({ AcceptedReviewCount: -1 })
      .limit(5);

    const topCEO = await GeneralReview.aggregate(
      [
        {
          $match: { CEOApproval: { $eq: true } },
        },
        {
          $group: {
            _id: '$CompanyID',
            count: { $sum: 1 },
          },
        },
        {
          $sort: { count: -1 },
        },
        {
          $limit: 10,
        },
      ],
    );
    const topCEOArray = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < topCEO.length; index++) {
      topCEOArray.push(topCEO[index]._id);
    }
    const topCEOCompanyList = await Company.find(
      { CompanyID: { $in: topCEOArray } },
    );

    const topViewCompanyList = await Company.find({})
      .sort({ ViewCount: -1 })
      .limit(10);

    const resultData = {
      reviewData,
      topCompanyList,
      topAverageList,
      topStudentList,
      topCEOCompanyList,
      topViewCompanyList,
    };
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(resultData));
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end('Network Error');
  }
};

module.exports = {
  reviews,
  updateReviews,
  companyList,
  companyReviewList,
  pictures,
  updatePictures,
  jobStats,
  analytics,
};
