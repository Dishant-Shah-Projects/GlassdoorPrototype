import React, { Component } from 'react';
import LeftBlock from './LeftBlock.js';
import RightBlock from './RightBlock.js';
import Navbar from '../Common/Navbar.js';
//import './../LandingPage/EmployerHome.css';

class JobsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {<Navbar />}
        <div className="gdGrid pageContentWrapper">
          <div id="PageContent" >
            <div id="PageBodyContents" class="meat" style={{"max-width": "1280"}}>
              <span id="NodePageData"> </span>
              <div id="JobSearch">
                <div className="gdGrid noPad">
                  <div id="JobResults" className="module noPad">
                    <section class="flexbox" id="PanesWrap">
                      <article id="MainCol" class="noPad">
                        {<LeftBlock />}
                      </article>
                      <div id="JDCol" className="noPad opened transformNone">
                        <div id="JDWrapper">
                          <article className="jobDetails scrollable active" id="3708699629">
                            <div className="jobViewMinimal">{<RightBlock />}</div>
                          </article>
                        </div>
                      </div>
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
