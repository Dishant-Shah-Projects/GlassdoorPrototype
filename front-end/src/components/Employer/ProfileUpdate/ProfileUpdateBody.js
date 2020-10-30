import React, { Component } from 'react';
import './ProfileUpdateBody.css';
import LeftBlock from './LeftBlock.js';
import RightBlock from './RightBlock.js';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="row flex-column flex-md-row p-0 px-md-lg py-md-xxl">
        {<LeftBlock />}
        {<RightBlock />}
      </div>
    );
  }
}

export default Body;
