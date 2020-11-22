import React, { Component } from 'react';
import './EmployerHome.css';
import Navbar from '../Common/Navbar.js';
import Body from './Body.js';

class AdminHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/*<Navbar />*/}
        <div class="pageContentWrapper">
          {' '}
                    
          <div id="UserProfilePageContent" class>
            <div id="UserProfile" class="gdGrid Container">
              <div class="css-1tgr9d eds5rs80">
                <div class="applicationStyle__profileApplication___Jyu4n">{<Body />}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminHomePage;
