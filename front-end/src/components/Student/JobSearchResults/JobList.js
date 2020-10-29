import React, { Component } from 'react';
import Navbar from '../Common/Navbar';
import {
  LowerNavBarOther,
  updateJobFilterStore,
  updateJobListStore,
} from '../../../constants/action-types';
import { connect } from 'react-redux';
import './JobList.css';
import JobNavBar from './JobNavBar';
import JobResults from './JobResults';

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
    console.log(JobID);
  };
  filterChangeCall = (event, Sort, JobType, State, SalStart, SalEnd, PageNo = 0) => {
    let payload = {
      jobList: [{ name: 'pr' }, { name: 'pr' }, { name: 'pr' }, { name: 'pr' }],
      PageNo,
      PageCount: Math.ceil(116 / 10),
      Totalcount: 116,
      Sort,
      JobType,
      State,
      SalStart,
      SalEnd,
      // PageCount: Math.ceil(response.data.Totalcount / 3),
    };
    this.props.updateJobListStore(payload);
    let payload2 = {
      fiterSlected: '',
    };
    this.props.updateJobFilterStore(payload2);
  };
  render() {
    this.props.LowerNavBarOther();
    return (
      <body className="main flex loggedIn lang-en en-US hollywood wide hasTwoPanes _initOk serpControl">
        {' '}
        {<Navbar />}
        <div className="gdGrid pageContentWrapper ">
          <div id="PageContent">
            <div id="PageBodyContents" className="meat">
              <span id="NodePageData"></span>
              <div id="JobSearch">
                <div className="gdGrid noPad">
                  {
                    <JobNavBar
                      filterChangeCall={(event, Sort, JobType, State, SalStart, SalEnd, PageNo) =>
                        this.filterChangeCall(event, Sort, JobType, State, SalStart, SalEnd, PageNo)
                      }
                      toggleFilter={(filter) => this.toggleFilter(filter)}
                    />
                  }
                  {<JobResults saveJob={(event, JobID) => this.saveJob(event, JobID)} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

// export default JobList;

const mapStateToProps = (state) => {
  const { jobFilterStore } = state.JobSearchPageReducer;
  return {
    jobFilterStore,
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
  };
};

// export default LoginBody;
export default connect(mapStateToProps, mapDispatchToProps)(JobList);
