import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMasterData } from '../constants/action-types';
import serverUrl from '../config';
// import Home from './Student/LandingPage/Home';
import Login from './Login/Login';
import CompanySearchResults from './Student/CompanySearchResults/CompanySearchResults';
import JobList from './Student/JobSearchResults/JobList';
import interviewList from './Student/InterviewSearchResults/interviewList';
import EmployerHome from './Employer/LandingPage/EmployerHome';
import ProfileUpdate from './Employer/ProfileUpdate/ProfileUpdate';
import salaryList from './Student/SalarySearchResults/salaryList';
import Home from './Student/LandingPage/Home';
import Profile from './Student/PersonalInformation/Profile/Profile';

class Main extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  };
  // }
  componentDidMount() {
    axios.get(serverUrl + 'glassdoor/staticdata').then((response) => {
      console.log('data:', response.data);
      let Countries = response.data[0].Country.map((country) => {
        return country;
      });
      let Gender = response.data[0].Gender.map((gender) => {
        return gender;
      });
      let VeteranStatus = response.data[0].VeteranStatus.map((veteranStatus) => {
        return veteranStatus;
      });
      let Disability = response.data[0].Disability.map((disability) => {
        return disability;
      });
      let States = response.data[0].State.map((state) => {
        return state;
      });
      let Status = response.data[0].Status.map((status) => {
        return status;
      });
      let JobType = response.data[0].JobType.map((jobType) => {
        return jobType;
      });

      let payload = {
        Countries,
        Gender,
        VeteranStatus,
        Disability,
        States,
        Status,
        JobType,
      };
      this.props.updateMasterData(payload);
      // this.setState({
      //   countries: this.state.countries.concat(allCountries),
      //   states: this.state.states.concat(allStates),
      //   countryCodes: this.state.countryCodes.concat(allCountrieCodes),
      // });
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/CompanySearchResults" component={CompanySearchResults} />
          <Route path="/Employer" component={EmployerHome} />
          <Route path="/EmployerProfile" component={ProfileUpdate} />
          <Route path="/Home" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/CompanySearchResults" component={CompanySearchResults} />
          <Route path="/JobList" component={JobList} />
          <Route path="/salaryList" component={salaryList} />
          <Route path="/interviewList" component={interviewList} />
          <Route path="/Profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

// export default Main;
const mapDispatchToProps = (dispatch) => {
  return {
    updateMasterData: (payload) => {
      dispatch({
        type: updateMasterData,
        payload,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Main);
