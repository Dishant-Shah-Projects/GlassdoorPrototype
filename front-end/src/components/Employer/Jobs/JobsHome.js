import React, { Component } from 'react';
import JobsPage from './JobsPage.js';
import './JobsHome.css';

class JobsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="gdGrid pageContentWrapper">
          <div id="PageContent">
            <div id="PageBodyContents" class="meat">
              <span id="NodePageData"> </span>
              <div id="JobSearch">
                <div className="gdGrid noPad">
                  <div id="JobResults" className="module noPad">
                    <section class="flexbox" id="PanesWrap">
                      {<JobsPage />}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobsHome;
