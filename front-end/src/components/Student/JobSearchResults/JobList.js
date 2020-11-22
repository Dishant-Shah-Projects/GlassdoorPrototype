import React, { Component } from 'react';
import Navbar from '../Common/Navbar';
import {
  LowerNavBarOther,
  updateJobFilterStore,
  updateJobListStore,
  updateStudentProfile,
  updateOnFocusJob,
} from '../../../constants/action-types';
import { connect } from 'react-redux';
import './JobList.css';
import JobNavBar from './JobNavBar';
import JobResults from './JobResults';
import axios from 'axios';
import serverUrl from '../../../config';

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleFilter = (filter) => {
    let payload = {};
    if (filter === this.props.jobFilterStore.fiterSlected) {
      payload = {
        fiterSlected: '',
      };
    } else {
      payload = {
        fiterSlected: filter,
      };
    }
    this.props.updateJobFilterStore(payload);
    console.log(filter);
  };
  saveJob = (event, JobID) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    const data = {
      JobID,
      StudentID: localStorage.getItem('userId'),
    };
    axios.post(serverUrl + 'student/companyFavouriteJobs', data).then(
      (response) => {
        console.log('Status Code : ', response.status);
        if (response.status === 200) {
          console.log(response.data);

          let studentProfile = { ...this.props.studentInfoStore.studentProfile };
          studentProfile.FavouriteJobs.push(JobID);
          const payload = {
            studentProfile,
          };
          this.props.updateStudentProfile(payload);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  filterChangeCall = (JobType, State, SalStart, SalEnd, PageNo = 0) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'student/searchJob', {
        params: {
          SearchString: localStorage.getItem('SearchString'),
          JobType,
          State: localStorage.getItem('Location'),
          SalStart,
          SalEnd,
          PageNo,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log('Jobs:', response.data);
        let payload = {
          jobList: response.data.jobs,
          PageNo,
          PageCount: Math.ceil(response.data.count / 10),
          Totalcount: response.data.count,
          JobType,
          State,
          SalStart,
          SalEnd,
        };
        this.props.updateJobListStore(payload);
        let payload2 = {
          fiterSlected: '',
        };
        this.props.updateJobFilterStore(payload2);

        if (response.data.jobs.length > 0) {
          let payload3 = {
            jobOonFocus: { ...response.data.jobs[0] },
          };
          this.props.updateOnFocusJob(payload3);
        }
      });
  };
  render() {
    this.props.LowerNavBarOther();
    return (
      <div className="gdGrid pageContentWrapperStudent ">
        <div id="PageContent">
          <div id="PageBodyContents" className="meat">
            <span id="NodePageData"></span>
            <div id="JobSearch">
              <div className="gdGrid noPad">
                {
                  <JobNavBar
                    filterChangeCall={(JobType, State, SalStart, SalEnd, PageNo) =>
                      this.filterChangeCall(JobType, State, SalStart, SalEnd, PageNo)
                    }
                    toggleFilter={(filter) => this.toggleFilter(filter)}
                  />
                }
                {
                  <JobResults
                    filterChangeCall={(JobType, State, SalStart, SalEnd, PageNo) =>
                      this.filterChangeCall(JobType, State, SalStart, SalEnd, PageNo)
                    }
                    saveJob={(event, JobID) => this.saveJob(event, JobID)}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default JobList;

const mapStateToProps = (state) => {
  const { jobFilterStore } = state.JobSearchPageReducer;
  const { studentInfoStore } = state.StudentCompleteInfoReducer;
  return {
    jobFilterStore,
    studentInfoStore,
  };
};
// export default CompanySearchResults;
const mapDispatchToProps = (dispatch) => {
  return {
    LowerNavBarOther: (payload) => {
      dispatch({
        type: LowerNavBarOther,
        payload,
      });
    },
    updateJobFilterStore: (payload) => {
      dispatch({
        type: updateJobFilterStore,
        payload,
      });
    },
    updateJobListStore: (payload) => {
      dispatch({
        type: updateJobListStore,
        payload,
      });
    },
    updateStudentProfile: (payload) => {
      dispatch({
        type: updateStudentProfile,
        payload,
      });
    },
    updateOnFocusJob: (payload) => {
      dispatch({
        type: updateOnFocusJob,
        payload,
      });
    },
  };
};
// export default LoginBody;
export default connect(mapStateToProps, mapDispatchToProps)(JobList);
