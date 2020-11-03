import React, { Component } from 'react';
import moment from 'moment';
import './JobSuggestion.css';

class JobSuggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const job = this.props.job;
    const postedDate = moment(job.PostedDate);
    const currentDate = moment();
    const diff = currentDate.diff(postedDate);
    const diffDuration = moment.duration(diff);
    const postedSince =
      diffDuration.hours() < 24 ? diffDuration.hours() : Math.ceil(diffDuration.days());
    const h_d = diffDuration.hours() < 24 ? 'h' : 'd';
    return (
      <div>
        <a
          className="job-tile css-poeuz4 css-1wh1oc8 d-flex flex-nowrap p-std"
          href="https://www.glassdoor.com/partner/jobListing.htm?pos=101&amp;ao=1044074&amp;s=320&amp;guid=000001754d86f34fad15907ab8e769b6&amp;src=GD_JOB_AD&amp;t=REC_JOBS&amp;extid=37&amp;exst=&amp;ist=L&amp;ast=L&amp;slr=true&amp;cs=1_3ef23b50&amp;cb=1603323491908&amp;jobListingId=3715058826&amp;srs=MEMBER_HOME_RECOMMENDED"
          data-test="job-tile"
          data-brandviews="BRAND:n=jobs-recommended-for-you:eid=1704:jlid=3715058826"
        >
          <div className="d-flex flex-column align-items-center pr-std">
            <img
              className="css-x3wokz my-xxsm css-16d1ee2"
              src="https://media.glassdoor.com/sqlm/1704/nordstrom-squarelogo-1557161537917.png"
              alt="Nordstrom"
            />
            <div className="d-flex align-items-center">
              <div className="css-b63kyi small">
                <strong>3.6 ★</strong>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column container-fluid">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column container-fluid">
                <p className="css-56kyx5 css-1xznj1f m-0">{job.CompanyName}</p>
                <p className="css-forujw m-0">
                  <strong>{job.Title}</strong>
                </p>
              </div>
              <div className="pl-xsm">
                <div className="css-m2m9ow d-inline-flex">
                  <button
                    aria-label="save job"
                    type="button"
                    className=" d-inline-flex flex-row align-items-center css-1wk59ve equmezk0"
                  >
                    <span className="SVGInline job-alert-icon css-1mgba7 css-25qyin">
                      <svg
                        className="SVGInline-svg job-alert-icon-svg css-1mgba7-svg css-25qyin-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 5.11l.66-.65a5.56 5.56 0 017.71.19 5.63 5.63 0 010 7.92L12 21l-8.37-8.43a5.63 5.63 0 010-7.92 5.56 5.56 0 017.71-.19zm7.66 6.75a4.6 4.6 0 00-6.49-6.51L12 6.53l-1.17-1.18a4.6 4.6 0 10-6.49 6.51L12 19.58z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row flex-wrap css-1c3h18e">
              <div className="d-flex flex-column container-fluid css-v91a6a">
                <p className="css-56kyx5 small m-0">
                  {job.StreetAddress}, {job.State}
                </p>
                <div className="css-r6z5ec d-flex flex-row container-fluid align-items-center">
                  <p className="d-flex flex-wrap css-56kyx5 small ml-0 my-0 mr-xsm">
                    <span className="css-120nkvx d-flex align-items-center mr-xxsm">
                      {job.ExpectedSalary}$
                    </span>
                    <span className="css-120nkvx d-flex align-items-center">
                      (Salary Range.){' '}
                      <span data-test="job-tile-salary-info" className="SVGInline css-1ejb6d6">
                        <svg
                          className="SVGInline-svg css-1ejb6d6-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 9a1 1 0 101 1 1 1 0 00-1-1zm0 3a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm0-6a6 6 0 11-6 6 6 6 0 016-6zm0 11a5 5 0 10-5-5 5 5 0 005 5z"
                            fill="currentColor"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center align-self-end justify-content-end ml-xsm css-8jm638">
                <p className="css-56kyx5 small m-0">
                  <span className="css-120nkvx">
                    {postedSince}
                    {h_d}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default JobSuggestion;
