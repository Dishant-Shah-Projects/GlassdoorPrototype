import { combineReducers } from 'redux';
import SignupModalViewReducer from './SignupModalViewReducer';
import searchDropDownReducer from './searchDropDownReducer';
import lowerNavBarReducer from './lowerNavBarReducer';
import CompaniesListReducer from './CompaniesListReducer';
import JobSearchPageReducer from './JobSearchPageReducer';
import staticDataReducer from './staticDataReducer';
import SalaryListReducer from './SalaryListReducer';
import SearchStringsReducer from './SearchStringsReducer';
import StudentCompleteInfoReducer from './StudentCompleteInfoReducer';
import CompaniesProfileReducer from './CompaniesProfileReducer';
import studentProfileLeftPanelReducer from './studentProfileLeftPanelReducer';
import ContributionPageReducer from './ContributionPageReducer';
import ReplyModalViewReducer from './ReplyModalViewReducer';

const finalReducers = combineReducers({
  SignupModalViewReducer: SignupModalViewReducer,
  searchDropDownReducer: searchDropDownReducer,
  lowerNavBarReducer: lowerNavBarReducer,
  CompaniesListReducer: CompaniesListReducer,
  JobSearchPageReducer: JobSearchPageReducer,
  staticDataReducer: staticDataReducer,
  SalaryListReducer: SalaryListReducer,
  SearchStringsReducer: SearchStringsReducer,
  StudentCompleteInfoReducer: StudentCompleteInfoReducer,
  CompaniesProfileReducer: CompaniesProfileReducer,
  studentProfileLeftPanelReducer: studentProfileLeftPanelReducer,
  ContributionPageReducer: ContributionPageReducer,
  ReplyModalViewReducer: ReplyModalViewReducer,
});

export default finalReducers;
