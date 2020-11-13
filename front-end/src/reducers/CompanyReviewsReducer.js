import { updateCompanyReviews } from '../constants/action-types';

const defaultState = {
  companyReviewStore: {
    companyReviews: [],
  },
};

const CompaniesReviewsReducer = (state = defaultState, action) => {
  console.log('payload in company review', action.payload);
  switch (action.type) {
    case updateCompanyReviews: {
      console.log('inside company review reducer');
      return {
        ...state,
        companyReviewStore: { ...state.companyReviewStore, ...action.payload },
        //   return Object.assign(state, action.payload);
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default CompaniesReviewsReducer;
