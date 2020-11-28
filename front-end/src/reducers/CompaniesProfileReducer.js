import { updateCompanyProfile } from '../constants/action-types';

const defaultState = {
  companyInfo: {
    CompanyName: '',
    Website: '',
    Size: '',
    ProfileImg: '',
    Type: '',
    Revenue: '',
    Headquarter: '',
    Industry: '',
    Founded: '',
    CompanyDescription: '',
    CompanyMission: '',
    CEO: '',
    City: '',
    State: '',
    FeaturedReview: '',    
  },
};

const CompaniesProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case updateCompanyProfile: {
        console.log('inside company profile reducer');
      return {
        ...state,
        companyInfo: { ...state.companyInfo, ...action.payload },
        //   return Object.assign(state, action.payload);
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default CompaniesProfileReducer;
