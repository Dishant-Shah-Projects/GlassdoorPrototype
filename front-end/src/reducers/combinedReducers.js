import { combineReducers } from 'redux';
import SignupModalViewReducer from './SignupModalViewReducer';
import searchDropDownReducer from './searchDropDownReducer';
import lowerNavBarReducer from './lowerNavBarReducer';
import CompaniesListReducer from './CompaniesListReducer';
import JobSearchPageReducer from './JobSearchPageReducer';
import staticDataReducer from './staticDataReducer';

const finalReducers = combineReducers({
  SignupModalViewReducer: SignupModalViewReducer,
  searchDropDownReducer: searchDropDownReducer,
  lowerNavBarReducer: lowerNavBarReducer,
  CompaniesListReducer: CompaniesListReducer,
  JobSearchPageReducer: JobSearchPageReducer,
  staticDataReducer: staticDataReducer,
});

export default finalReducers;
