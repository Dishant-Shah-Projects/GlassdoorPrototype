import React, { Component } from 'react';
import Navbar from '../Common/Navbar';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';
import './Home.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {   
  }
  render() {
    return (
      <div>
        {<Navbar />}
        <div id="Discover">
          <div>
            <div>
              <div className="container-max-width mx-auto px-std px-md-lg pt-xsm pt-md-xxl pb-xxl">
                <div className="d-flex flex-direction-column row">
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

export default Home;
