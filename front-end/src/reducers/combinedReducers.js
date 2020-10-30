import { combineReducers } from 'redux';
import SignupModalViewReducer from './SignupModalViewReducer';
import searchDropDownReducer from './searchDropDownReducer';
import lowerNavBarReducer from './lowerNavBarReducer';
import CompaniesListReducer from './CompaniesListReducer';
import JobSearchPageReducer from './JobSearchPageReducer';
import staticDataReducer from './staticDataReducer';
import CompaniesProfileReducer from './CompaniesProfileReducer';


const finalReducers = combineReducers({
  SignupModalViewReducer: SignupModalViewReducer,
  searchDropDownReducer: searchDropDownReducer,
  lowerNavBarReducer: lowerNavBarReducer,
  CompaniesListReducer: CompaniesListReducer,
  JobSearchPageReducer: JobSearchPageReducer,
  staticDataReducer: staticDataReducer,
  CompaniesProfileReducer: CompaniesProfileReducer
});

export default finalReducers;
