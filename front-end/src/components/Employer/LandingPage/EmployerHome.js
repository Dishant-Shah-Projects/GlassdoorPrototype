import React, { Component } from 'react';
import './EmployerHome.css';
import Navbar from '../Common/Navbar.js';
import { history } from '../../../App';
import Body from './Body.js';
import './Body.css';
import LeftBlock from './LeftBlock.js';
import RightBlock from './RightBlock.js';


class EmployerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   localStorage.setItem('selectedOption', "Profile");
  // }
  handleClick = (selectedOption = "Profile") => {
    //console.log('selected option', selectedOption);
    //let selectedOption = localStorage.getItem('selectedOption');
    switch (selectedOption) {
      case 'Profile': {
        console.log('selected option profile');
        history.push('/Employer');
        break;
      }
      case 'Report': {
        console.log('selected option reports');
        history.push('/EmployerReport');
        break;
      }
      default: {
        break;
      }
    }
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
                <div class="applicationStyle__profileApplication___Jyu4n">
                  <div class="row  flex-md-row p-0 px-md-lg py-md-xxl">
                    {<LeftBlock handleClick={(selectedOption) => this.handleClick(selectedOption)} />}
                    {<RightBlock />}
                  </div>
                  {/* {<Body handleClick={this.handleClick()}/>} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EmployerHome;
