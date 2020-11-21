import {
  updateCompanyOverview,
  updatespecialReviews,
  updateCompanyReviewsStore,
  updateCompanyJobStore,
  updateCompanyInterviewStore,
} from '../constants/action-types';

const defaultState = {
  companyOverviewStore: {
    companyOverview: {},
    featuredReview: {},
    positiveReview: {},
    negatieReview: {},
  },
  companyReviewsStore: {
    ReviewList: [],
    PageNo: 0,
    Totalcount: 0,
    PageCount: 0,
  },
  companyJobStore: {
    JobList: [],
    PageNo: 0,
    Totalcount: 0,
    PageCount: 0,
  },
  companyInterviewStore: {
    InterViewList: [],
    PageNo: 0,
    Totalcount: 0,
    PageCount: 0,
  },
};

const CompanyPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case updateCompanyOverview: {
      console.log('inside company profile reducer');
      return {
        ...state,
        companyOverviewStore: { ...state.companyOverviewStore, ...action.payload },

        //   return Object.assign(state, action.payload);
      };
    }
    case updatespecialReviews: {
      console.log('inside company profile reducer');
      return {
        ...state,
        companyOverviewStore: { ...state.companyOverviewStore, ...action.payload },

        //   return Object.assign(state, action.payload);
      };
    }
    case updateCompanyReviewsStore: {
      console.log('inside company review store');
      return {
        ...state,
        companyReviewsStore: { ...state.companyReviewsStore, ...action.payload },

        //   return Object.assign(state, action.payload);
      };
    }
    case updateCompanyJobStore: {
      console.log('inside company review store');
      return {
        ...state,
        companyJobStore: { ...state.companyJobStore, ...action.payload },

        //   return Object.assign(state, action.payload);
      };
    }
    case updateCompanyInterviewStore: {
      console.log('inside company interview store');
      return {
        ...state,
        companyInterviewStore: { ...state.companyInterviewStore, ...action.payload },

        //   return Object.assign(state, action.payload);
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default CompanyPageReducer;
