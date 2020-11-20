import React, { Component } from 'react';
import LeftBlock from './LeftBlock.js';
import RightBlock from './RightBlock.js';
import axios from 'axios';
import serverUrl from '../../../config.js';
import { connect } from 'react-redux';
import { updateJobList, updateJobSelectList } from '../../../constants/action-types';
import './JobsHome.css';

class JobsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  jobFetch = (PageNo = 0) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'company/jobs', {
        params: {
          CompanyID: localStorage.getItem('userId'),
          PageNo,
        },
        withCredentials: true,
      })
      .then(
        (response) => {
          console.log('getJobs', response.data);          
          let payload1 = {
            jobsList: response.data.jobs,
            PageNo,
            PageCount: Math.ceil(response.data.count / 10),
            Totalcount: response.data.count,
            // PageCount: Math.ceil(response.data.Totalcount / 3),
          };
          console.log('payload', payload1);
          this.props.updateJobList(payload1);

          if (response.data.jobs.length > 0) {
            let payload2 = {
                jobsInfo: { ...response.data.jobs[0] },
            };
            this.props.updateJobSelectList(payload2);
          }
        },
        (error) => {
          console.log('error', error);
        }
      );
  };  

  render() {
    return (
      <div class="row flex-md-row p-0 px-md-lg py-md-xxl">
        {<LeftBlock 
            jobFetch={(PageNo) =>
            this.jobFetch(PageNo)
          } />}
        {<RightBlock />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {    
    return {
      updateJobList: (payload1) => {
        dispatch({
          type: updateJobList,
          payload1,
        });
      },
      updateJobSelectList: (payload2) => {
        dispatch({
          type: updateJobSelectList,
          payload2,
        });
      },          
    };
  };
  
//   const mapStateToProps = (state) => {
//     const { jobListStore } = state.JobsListReducer;
//     return {
//       jobListStore: jobListStore,
//     };
//   };
  
export default connect(null, mapDispatchToProps)(JobsPage);
//export default JobsPage;
