import React, { Component } from 'react';
import './ProfileUpdateBody.css';

class LeftBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
      <div class="col-12 col-md-4 pr-md-xxl">    
      <div class="navigationStyle__nav___1PF4F gd-ui-tab css-o9yci5">
        <ul role="tablist">
          <li role="tab" class="active css-1h7a53u" aria-selected="true" tabindex="0">
            <div class="customItem css-wks0vk">
              <div class="d-flex flex-row justify-content-start align-items-center">
                Profile Update
              </div>
            </div>
          </li>
          <li role="tab" class=" css-1h7a53u" aria-selected="false" tabindex="0">
            <div class="customItem css-wks0vk">
              <div class="d-flex flex-row justify-content-start align-items-center">
                Manage Jobs
              </div>
            </div>
          </li>        
        </ul>
      </div>
    </div>
    );
  }
}

export default LeftBlock;
