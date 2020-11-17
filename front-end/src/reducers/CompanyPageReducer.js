import {
  updateCompanyOverview,
  updatespecialReviews,
  updateCompanyReviewsStore,
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

    default: {
      return { ...state };
    }
  }
};

export default CompanyPageReducer;
