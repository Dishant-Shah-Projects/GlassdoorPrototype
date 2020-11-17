import { switchTab } from '../constants/action-types';

const defaultState = {
  companyNavbarStore: {
    selectedTab: 'Overview',
  },
  companyProfileStore: {
    companyProfile: [],
  },
};

const CompanyResultPageReducer = (state = defaultState, action) => {
  console.log('payload in company review', action.payload);
  switch (action.type) {
    case switchTab: {
      console.log('inside company review reducer');
      return {
        ...state,
        companyNavbarStore: { ...state.companyNavbarStore, ...action.payload },
        //   return Object.assign(state, action.payload);
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default CompanyResultPageReducer;
