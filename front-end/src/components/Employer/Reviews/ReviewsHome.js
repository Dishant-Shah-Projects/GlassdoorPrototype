import React, { Component } from 'react';
import LeftBlock from '../LandingPage/LeftBlock.js';
import '../LandingPage/Body.css';
import RightBlock from './RightBlock.js';
// import Navbar from '../Common/Navbar.js';
// import axios from 'axios';
// import serverUrl from '../../../config.js';
// import { updateCompanyReviews } from '../../../constants/action-types';
// import { connect } from 'react-redux';

class ReviewsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      authFlag: false,
      updateProfile: false,
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateCompanyReviews: (payload) => {
//       dispatch({
//         type: updateCompanyReviews,
//         payload,
//       });
//     },
//   };
// };
// export default connect(null, mapDispatchToProps)(ReviewsHome);
export default ReviewsHome;
