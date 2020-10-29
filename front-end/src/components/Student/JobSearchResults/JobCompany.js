import React, { Component } from 'react';
import './JobCompany.css';

class JobCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="CompanyContainer" className="tabSection pad">
        <div id="EmpBasicInfo" className="empBasicInfo" data-emp-id="100431">
          <div>
            <header className="margBot">
              <h2 className="h2 tightVert">Overview</h2>
            </header>
            <div className="info row">
              <div className="infoEntity">
                <label>Size</label>
                <span className="value">51 to 200 Employees</span>
              </div>
              <div className="infoEntity">
                <label>Founded</label>
                <span className="value">2014</span>
              </div>
              <div className="infoEntity">
                <label>Type</label>
                <span className="value">Company - Private</span>
              </div>
              <div className="infoEntity">
                <label>Industry</label>
                <span className="value">Building &amp; Personnel Services</span>
              </div>
              <div className="infoEntity">
                <label>Sector</label>
                <span className="value">Business Services</span>
              </div>
              <div className="infoEntity">
                <label>Revenue</label>
                <span className="value">Unknown / Non-Applicable</span>
              </div>
            </div>
          </div>
        </div>
        <div className="empPhotos noPad">
          <header className="margBot">
            <h2 className="h2 tightVert">RoadRunner Recycling Photos</h2>
          </header>
          <div className="photos">
            <div className="spacer"></div>
            <div className="photoSlider">
              {
                <a
                  href="/Photos/RoadRunner-Recycling-Office-Photos-IMG2565496.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="photo"
                >
                  <figure data-id="13658880" data-num="1">
                    <img
                      alt="Company pic"
                      className="companyPhoto"
                      src="https://media.glassdoor.com/lst/1277356/roadrunner-recycling-office.jpg"
                    />
                  </figure>
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCompany;
