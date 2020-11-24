/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const url = require('url');

const GeneralReview = require('../model/GeneralReview');
const Company = require('../model/Company');
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
module.exports = {
  reviews,
  updateReviews,
  companyList,
  companyReviewList,
  pictures,
  updatePictures,
};
