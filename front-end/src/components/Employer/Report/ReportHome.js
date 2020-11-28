import React, { Component } from 'react';
import LeftBlock from '../LandingPage/LeftBlock.js';
import '../LandingPage/Body.css';
import './ReportHome.css'
import RightBlock from './RightBlock.js';
import axios from 'axios';
import serverUrl from '../../../config.js';
import { connect } from 'react-redux';
import { updateEmployerStatsStore } from '../../../constants/action-types';

class ReportHome extends Component {
  constructor(props) {
    super(props);
    this.state = {     
    };
  }
  fetchReport = (PageNo =  0) => {   
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'company/report', {
        params: { CompanyID: localStorage.getItem('userId'), PageNo: 0 },
        withCredentials: true,
      })
      .then((response) => {
        if (response.status == 200) {
          console.log('response', response.data.statsData);
          let payload = {
            statsList : response.data.statsData,
            PageNo,
            PageCount: Math.ceil(response.data.count / 10),
            Totalcount: response.data.count,
          }
          this.props.updateEmployerStatsStore(payload);
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: 'No Statistics Found',
        });
      });
  }

  render() {
    return (
      <div>
        <div id="UserProfilePageContent" class>
          <div id="UserProfile" class="gdGrid Container">
            <div class="css-1tgr9d eds5rs80">
              <div class="applicationStyle__profileApplication___Jyu4n" style={{"max-width": "1280px"}}>
                <div class="row flex-md-row p-0 px-md-lg py-md-xxl" style={{display: "flex !important"}}>
                  {<LeftBlock />}
                  {<RightBlock />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmployerStatsStore: (payload1) => {
      dispatch({
        type: updateEmployerStatsStore,
        payload1,
      });
    },    
  };
};

export default connect(null, mapDispatchToProps)(ReportHome);
//export default ReportHome;
