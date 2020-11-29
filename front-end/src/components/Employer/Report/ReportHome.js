import React, { Component } from 'react';
import LeftBlock from '../LandingPage/LeftBlock.js';
import '../LandingPage/Body.css';
import './ReportHome.css'
import RightBlock from './RightBlock.js';
import axios from 'axios';
import serverUrl from '../../../config.js';
import { connect } from 'react-redux';
import { updateEmployerStats } from '../../../constants/action-types';

class ReportHome extends Component {
  constructor(props) {
    super(props);
    this.state = {     
    };
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
                  {<RightBlock fetchReport={this.fetchReport}/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateEmployerStats: (payload) => {
//       dispatch({
//         type: updateEmployerStats,
//         payload,
//       });
//     },    
//   };
// };

//export default connect(null, mapDispatchToProps)(ReportHome);
export default ReportHome;
