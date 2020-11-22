import React, { Component } from 'react';
import './Body.css';
import { history } from '../../../App';

class LeftBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(selectedOption) {
    console.log('selected option', selectedOption);
    localStorage.setItem('selectedOption', selectedOption);
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
      <div class="col-12 col-md-4 pr-md-xxl">
        <div class="d-none d-md-block">
          <div data-test="profilePhoto" id="ProfilePhoto">
            <div class="profilePhotoStyle__profilePhoto___CTVQw">
              <div class="d-inline-flex justify-content-start align-items-center profilePhotoStyle__photoContainer___3itOq">
                <div class="mr-xsm">
                  <span class="SVGInline profilePhotoStyle__icon___1H_01">
                    <svg
                      class="SVGInline-svg profilePhotoStyle__icon___1H_01-svg"
                      style={{ width: '55px', height: '55px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 7a3 3 0 103 3 3 3 0 00-3-3zm0 9a6 6 0 00-5.33 3.25 9 9 0 0010.66 0A6 6 0 0012 16zm0-14A10 10 0 112 12 10 10 0 0112 2z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navigationStyle__nav___1PF4F gd-ui-tab css-o9yci5">
          <ul role="tablist">
            <li
              role="tab"
              aria-selected="true"
              tabindex="0"
              onClick={() => this.handleClick('Profile')}
              class={
                localStorage.getItem('selectedOption') === 'Profile'
                  ? 'active css-1h7a53u'
                  : 'css-1h7a53u'
              }
            >
              <div class="customItem css-wks0vk">
                <div class="d-flex flex-row justify-content-start align-items-center">Profile</div>
              </div>
            </li>
            <li
              role="tab"
              aria-selected="false"
              tabindex="0"
              onClick={() => this.handleClick('Report')}
              class={
                localStorage.getItem('selectedOption') === 'Report'
                  ? 'active css-1h7a53u'
                  : 'css-1h7a53u'
              }
            >
              <div class="customItem css-wks0vk">
                <div class="d-flex flex-row justify-content-start align-items-center">Reports</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftBlock;
