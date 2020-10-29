/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import JobCompany from './JobCompany';
import JobFeaturedReview from './JobFeaturedReview';
import JobInfo from './JobInfo';
import './JobRightResultsBlock.css';

class JobRightResultsBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { tabOpened: 'Job' };
  }

  tabChange = (event, tabOpened) => {
    this.setState({
      tabOpened,
    });
  };

  render() {
    let showBlock = <JobInfo />;
    if (this.state.tabOpened === 'Company') {
      showBlock = <JobCompany />;
    } else if (this.state.tabOpened === 'Reviews') {
      showBlock = <JobFeaturedReview />;
    }
    return (
      <div id="JDCol" className="noPad opened">
        <div id="JDWrapper">
          <article className="jobDetails scrollable active" data-id="3360350142">
            <div className="jobViewMinimal">
              <div className="intersection-visible-wrapper">
                <div
                  id="HeroHeaderModule"
                  data-brandviews="BRAND:n=jsearch-hero-header:eid=1277356:jlid=3360350142"
                >
                  <div id="HeroHeaderModuleTop"></div>
                  <div id="CompanyBannerWrap" className="">
                    <div id="CompanyBanner" className="content">
                      <img
                        alt="Cover for RoadRunner Recycling"
                        src="https://media.glassdoor.com/banner/bh/1277356/roadrunner-recycling-banner-1534260090843.jpg"
                      />
                    </div>
                  </div>
                  <div className="empWrapper ctasTest">
                    <div className="empInfo newDetails">
                      <div className="employerName">
                        RoadRunner Recycling
                        <span className="rating">
                          4.2<span className="ratingStar"></span>
                        </span>
                      </div>
                      <div className="title">Software Engineer</div>
                      <div className="location">Pittsburgh, PA</div>
                      <div className="salary">
                        <span className="css-1uyte9r css-hca4ks e1wijj242">
                          $41K-$88K <span className="css-0 e1wijj240">(Glassdoor est.)</span>
                          <span className="SVGInline greyInfoIcon">
                            <svg
                              className="SVGInline-svg greyInfoIcon-svg"
                              height="14"
                              viewBox="0 0 14 14"
                              width="14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 14A7 7 0 117 0a7 7 0 010 14zm0-.7A6.3 6.3 0 107 .7a6.3 6.3 0 000 12.6zm-.7-7a.7.7 0 011.4 0v4.2a.7.7 0 01-1.4 0zM7 4.2a.7.7 0 110-1.4.7.7 0 010 1.4z"
                                fill="#505863"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <div className="hidden"></div>
                        </span>
                      </div>
                    </div>
                    <div className="actionSection">
                      <div className="ctasWrap">
                        <div className="ctas2 withHideJob">
                          <div
                            onClick={(event) => this.props.toggle(event)}
                            className="applyCTA gdGrid"
                          >
                            <a
                              className="gd-ui-button noMargRt fillMob d-flex align-items-center justify-content-center applyButton e113dz0m0 css-1c58wfr"
                              href="#"
                              target=""
                              // data-adv-type="EMPLOYER"
                              // data-apply-type=""
                              // data-easy-apply="false"
                              // data-is-organic-job="false"
                              // data-is-sponsored-job="true"
                              // data-job-id="3360350142"
                              // data-job-url="#"
                              rel="nofollow"
                            >
                              <i className="icon-offsite-white margRtSm"></i>
                              <span>Apply Now</span>
                              <i className="hlpr"></i>
                            </a>
                          </div>
                          <div className="saveCTA">
                            <button
                              onClick={(event) => this.props.saveJob(event, 1 /**JobID */)}
                              className="gd-btn gd-btn-2 gd-btn-icon fillMob save-job-button-3360350142"
                              data-ao-id="1131672"
                              data-job-id="3360350142"
                              data-save-hook="JOB_SEARCH_PANE"
                              data-saved-job-id="0"
                              type="button"
                            >
                              <span className="SVGInline heart save margRtXs css-zve8bc">
                                <svg
                                  className="SVGInline-svg heart-svg save-svg margRtXs-svg css-zve8bc-svg"
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
                              <span>Save</span>
                            </button>
                            <div className="saveTooltip hidden">
                              <div className="msg">
                                <span className="close"></span>
                                <p className="caption">Save this job for later</p>
                                <p className="subtext">
                                  Easily keep track of jobs you like that you can't apply to right
                                  now
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="css-mwdmnn e9i34c90"></div>
                      </div>
                    </div>
                  </div>
                  <div className="css-17lrvax epgue5a2">
                    <div className="css-bhqyka epgue5a3">
                      <h3 className="css-4t3aaj epgue5a4">Job &amp; Company Insights</h3>
                      <div className="css-dqdcxk epgue5a5">
                        <strong>Job Type:</strong> Full-time
                      </div>
                      <div className="css-dqdcxk epgue5a5">
                        <strong>Job Function:</strong>{' '}
                        <span className="css-10iahqc">software engineer</span>
                      </div>
                      <div className="css-dqdcxk epgue5a5">
                        <strong>Industry:</strong> Business Services
                      </div>
                      <div className="css-dqdcxk epgue5a5">
                        <strong>Size:</strong> 51 to 200 Employees
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Details">
                <div className="jobDetailsInfoWrap">
                  <div className="jobDetailsHeader jobDetailsTabs">
                    <div className="scrollableTabContainer">
                      <div className="scrollableTabs">
                        <div
                          onClick={(event) => this.tabChange(event, 'Job')}
                          className={this.state.tabOpened === 'Job' ? 'tab active' : 'tab'}
                          data-test="tab"
                          data-tab-type="job"
                        >
                          <span>Job</span>
                        </div>
                        <div
                          onClick={(event) => this.tabChange(event, 'Company')}
                          className={this.state.tabOpened === 'Company' ? 'tab active' : 'tab'}
                          data-test="tab"
                          data-tab-type="overview"
                        >
                          <span>Company</span>
                        </div>
                        <div
                          onClick={(event) => this.tabChange(event, 'Reviews')}
                          className={this.state.tabOpened === 'Reviews' ? 'tab active' : 'tab'}
                          data-test="tab"
                          data-tab-type="reviews"
                        >
                          <span>Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>{showBlock}</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default JobRightResultsBlock;
