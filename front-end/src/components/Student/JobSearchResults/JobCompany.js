import React, { Component } from 'react';
import './JobCompany.css';
import moment from 'moment';

class JobCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const selectedJob = this.props.selectedJob;
    return (
      <div id="CompanyContainer" className="tabSection pad">
        <div id="EmpBasicInfo" className="empBasicInfo" data-emp-id="100431">
          <div>
            <header className="margBot">
              <h2 className="h2 tightVert">Overview</h2>
            </header>
            <div id="jobCompany" className="info row">
              <div className="infoEntity">
                <label>Size</label>
                <span className="value">
                  {' '}
                  {selectedJob.jobdetails.length > 0 ? selectedJob.jobdetails[0].Size : ''}{' '}
                  Employees approx.
                </span>
              </div>
              <div className="infoEntity">
                <label>Founded</label>
                <span className="value">
                  {selectedJob.jobdetails.length > 0
                    ? moment(selectedJob.jobdetails[0].Founded).format('YYYY')
                    : ''}
                </span>
              </div>
              <div className="infoEntity">
                <label>Type</label>
                <span className="value">
                  Company -{' '}
                  {selectedJob.jobdetails.length > 0 ? selectedJob.jobdetails[0].Type : ''}
                </span>
              </div>
              <div className="infoEntity">
                <label>Industry</label>
                <span className="value">
                  {' '}
                  {selectedJob.jobdetails.length > 0 ? selectedJob.jobdetails[0].Industry : ''}
                </span>
              </div>

              <div className="infoEntity">
                <label>Revenue</label>
                <span className="value">
                  {selectedJob.jobdetails.length > 0
                    ? selectedJob.jobdetails[0].Revenue
                    : 'Unknown / Non-Applicable'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="empPhotos noPad">
          <header className="margBot">
            <h2 className="h2 tightVert">{selectedJob.CompanyName} Photos</h2>
          </header>
          <div className="photos">
            <div className="spacer"></div>
            <div className="photoSlider">
              {selectedJob.jobdetails.length > 0
                ? selectedJob.jobdetails[0].Photos.map((job) => (
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
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCompany;
