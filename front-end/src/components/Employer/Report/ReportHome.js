import React, { Component } from 'react';
import LeftBlock from '../LandingPage/LeftBlock.js';
import '../LandingPage/Body.css';
import RightBlock from './RightBlock.js';

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
              <div class="applicationStyle__profileApplication___Jyu4n">
                <div class="row flex-column flex-md-row p-0 px-md-lg py-md-xxl" style={{display: "flex"}}>
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

export default ReportHome;
