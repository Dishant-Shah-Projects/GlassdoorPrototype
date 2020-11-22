import React, { Component } from 'react';
import './CompanyInterviews.css';
import { Pie } from 'react-chartjs-2';
import { PieChart } from 'react-minimal-pie-chart';
import PaginationComponent from '../../Common/PaginationComponent';
import { updateCompanyInterviewStore } from '../../../../constants/action-types';
import { connect } from 'react-redux';
import axios from 'axios';
import serverUrl from '../../../../config';

class CompanyInterviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ['a', 'b', 'c'],
      datasets: [
        {
          data: [59, 22, 19],
          backgroundColor: ['red', 'blue', 'green'],
        },
      ],
    };
  }

  componentDidMount() {
    this.commonFetch();
  }

  commonFetch = (PageNo = 0) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'student/interviewReview', {
        params: {
          CompanyID: localStorage.getItem('companyID'),
          PageNo,
        },
        withCredentials: true,
      })
      .then(
        (response) => {
          console.log('companyReviews', response.data);
          let payload = {
            RevieInterViewListwList: response.data.interviews,
            PageNo,
            Totalcount: response.data.count,
            PageCount: Math.ceil(response.data.count / 10),

            // PageCount: Math.ceil(response.data.Totalcount / 3),
          };
          this.props.updateCompanyInterviewStore(payload);
        },
        (error) => {
          console.log('error', error);
        }
      );
  };
  render() {
    return (
      <article id="MainCol">
        <div class="module interviewsWithSgocFiltersv1">
          {' '}
          <div class="module interviewStats ">
            <header>
              <h2>Interviews at Amazon</h2>
              <div class="fill tbl minor showHH">
                <div class=" cell middle minor"> 26,066 Interview Reviews</div>
              </div>
            </header>
            <div class="interviewStatsBody">
              <div class="flexbox fl-between" id="AllStats">
                <div class="cell chartWrapper experience">
                  <h3 class="tightTop hideHH" style={{ height: '24px' }}>
                    {' '}
                    Experience<span class="subtle normal hidden"> &nbsp; 24,977 Ratings</span>
                  </h3>
                  <div class="tbl fill">
                    <div class="row">
                      <div class="cell">
                        <div class="chart" id="ExperienceChart">
                          <svg>
                            {' '}
                            <circle cx="30" cy="30" r="30" fill="#eaeaea"></circle>
                            <PieChart
                              viewBoxSize={[200, 250]}
                              center={[-100, 50]}
                              data={[
                                { title: 'p', value: 59, color: 'rgb(147, 218, 103)' },
                                { title: 'Nu', value: 22, color: 'rgb(12, 170, 65)' },
                                { title: 'ThNeree', value: 19, color: 'rgb(25, 67, 131)' },
                              ]}
                            />
                            ;
                            {/*<path
                              d="M 30,30 L 30,0 A 30,30 0 1 1 13.950534021574768,55.34589990131286 Z"
                              fill="#93da67"
                            ></path>
                            <path
                              d="M 30,30 L 13.950534021574768,55.34589990131286 A 30,30 0 0 1 2.084673751486921,19.01207205888769 Z"
                              fill="#0caa41"
                            ></path>
                            <path
                              d="M 30,30 L 2.084673751486921,19.01207205888769 A 30,30 0 0 1 29.910000134999954,0.00013499989875143115 Z"
                              fill="#194383"
                            ></path>*/}
                            <circle cx="30" cy="30" r="20.400000000000002" fill="#ffffff"></circle>
                          </svg>{' '}
                        </div>
                      </div>
                      <div class="cell">
                        <div class="tbl dataTbl fill">
                          <div class="showHH margBotSm">
                            <div class="cell tightTop">
                              <div class="h3 tightVert"> Experience</div>
                            </div>
                            <div class="cell"></div>
                          </div>
                          <div class="row" style={{}}>
                            <div class="cell heading">
                              <i
                                class="sqLed middle sm pros top "
                                style={{ backgroundColor: 'rgb(147, 218, 103)' }}
                              ></i>
                              <label class=" pros pct">Positive</label>
                            </div>
                            <div class="cell pct alignRt">
                              <span class="strong num pros pct">59</span>
                              <span class=" pros pct">%</span>
                            </div>
                          </div>
                          <div class="row" style={{}}>
                            <div class="cell heading">
                              <i
                                class="sqLed middle sm pros top "
                                style={{ backgroundColor: 'rgb(12, 170, 65)' }}
                              ></i>
                              <label class=" pros pct">Neutral</label>
                            </div>
                            <div class="cell pct alignRt">
                              <span class="strong num pros pct">22</span>
                              <span class=" pros pct">%</span>
                            </div>
                          </div>
                          <div class="row" style={{}}>
                            <div class="cell heading">
                              <i
                                class="sqLed middle sm pros top "
                                style={{ backgroundColor: 'rgb(25, 67, 131)' }}
                              ></i>
                              <label class=" pros pct">Negative</label>
                            </div>
                            <div class="cell pct alignRt">
                              <span class="strong num pros pct">19</span>
                              <span class=" pros pct">%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div class="cell chartWrapper difficulty">
                  <h3 class="tightTop hideHH" style={{ height: '24px' }}>
                    {' '}
                    Difficulty<span class="subtle normal hidden"> &nbsp; 24,977 Ratings</span>
                  </h3>{' '}
                  <div class="tbl dataTbl">
                    <div class="row">
                      <div class="cell middle center subtle difficultyLabelWrapper">
                        <div class="difficultyLabel subtle">3</div> Average
                      </div>
                      <div class="cell ratingBar">
                        <h3 class="tightTop" style={{ height: '24px' }}>
                          {' '}
                          Difficulty
                        </h3>
                        <span class="gdBars gdRatings sm vertical " title="3.0">
                          <div class="row">
                            <i></i>
                            <span class="label pct">Hard</span>
                          </div>
                          <div class="row">
                            <i>
                              <i style={{ height: '3.3212699999999984%' }}></i>
                            </i>
                            <span class="label pct"></span>
                          </div>
                          <div class="row">
                            <i>
                              <i></i>
                            </i>
                            <span class="label pct">Average</span>
                          </div>
                          <div class="row">
                            <i>
                              <i></i>
                            </i>
                            <span class="label pct"></span>
                          </div>
                          <div class="row">
                            <i>
                              <i></i>
                            </i>
                            <span class="label pct">Easy</span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="module interviewsAndFilter">
            <div id="EmployerInterviews">
              <ol class="empReviews tightLt">
                <li class=" empReview cf " id="InterviewReview_24701674">
                  <div class="cf">
                    <div class="floatLt">
                      <time class="date subtle small" datetime="2019-02-14">
                        {' '}
                        Feb 14, 2019
                      </time>
                    </div>
                    <p class="helpfulReviews small tightVert floatRt">
                      <span class="helpfulCount subtle"> Helpful (382)</span> &nbsp;{' '}
                    </p>
                  </div>
                  <div class="tbl fill reviewHdr">
                    <div class="row">
                      <div class="cell sqLogoCell showDesk">
                        <span class="sqLogo tighten smSqLogo logoOverlay">
                          <img
                            data-original="https://media.glassdoor.com/sqls/6036/amazon-squarelogo-1552847650117.png"
                            data-original-2x="https://media.glassdoor.com/sqlm/6036/amazon-squarelogo-1552847650117.png"
                            src="https://media.glassdoor.com/sqls/6036/amazon-squarelogo-1552847650117.png"
                            class="lazy lazy-loaded"
                            data-retina-ok="true"
                            alt=" Logo"
                            title=""
                            style={{ opacity: '1' }}
                          />
                        </span>
                      </div>
                      <div class="cell">
                        <h2 class="summary strong noMargTop tightTop margBotXs">
                          <a href="/Interview/Amazon-Interview-RVW24701674.htm">
                            <span class="reviewer">Senior Software Architect</span> Interview
                          </a>
                        </h2>
                        <div class="tbl reviewMeta">
                          <div class="cell">
                            <div class="author minor">
                              {' '}
                              Anonymous Employee in{' '}
                              <span class=" authorLocation ">Seattle, WA</span>
                              <span class="padLtSm">
                                <i class="flag us"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tbl fill margTopMd">
                    <div class="row">
                      <div class="cell sqLogoCell showDesk"></div>
                      <div class="cell reviewBodyCell">
                        <div class="interviewOutcomes">
                          <div class="flex-grid">
                            <div class="tightLt col span-1-3">
                              <div class="middle">
                                <div class="cell">
                                  <i class="sqLed middle sm green margRtXs "></i>
                                </div>
                                <div class="cell">
                                  <span class="middle">Accepted Offer</span>
                                </div>
                              </div>
                            </div>
                            <div class="tightLt col span-1-3">
                              <div class="middle">
                                <div class="cell">
                                  <i class="sqLed middle sm green margRtXs "></i>
                                </div>
                                <div class="cell">
                                  <span class="middle">Positive Experience</span>
                                </div>
                              </div>
                            </div>
                            <div class="tightLt col span-1-3">
                              <div class="middle">
                                <div class="cell">
                                  <i class="sqLed middle sm red margRtXs "></i>
                                </div>
                                <div class="cell">
                                  <span class="middle">Difficult Interview</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="description ">
                          <div
                            class="interviewReviewDetails truncateData"
                            data-animate-after-less="true"
                            data-click-anywhere="true"
                            data-less-str="Show Less"
                            data-more-str="Show More"
                            data-truncate-toggle="true"
                            data-truncate-words="70"
                          >
                            <div class="continueReadingWrapper gdGrid contentIsCollapsed">
                              <p class="strong margTopMd tightBot">Application</p>
                              <p class="applicationDetails continueReading">
                                I applied through an employee referral. The process took 1 day. I
                                interviewed at Amazon (Seattle, WA) in January 2019.
                              </p>
                              <p class="strong margTopMd tightBot">Interview</p>
                              <p class="interviewDetails continueReading interviewContent mb-xsm ">
                                There is one phone interview for an hour. If you clear this
                                interview, you will be invited for an onsite interview. There are
                                five interviews onsite, all in one day. Interviews are in a casual
                                environment. After the first two interviews, you take a break and
                                are escorted for lunch.
                              </p>
                            </div>
                            <p class="strong margTopMd tightBot">Interview Questions</p>
                            <div class="interviewQuestions">
                              <ul class="undecorated">
                                <li>
                                  <span
                                    class="interviewQuestion noPadVert truncateThis wrapToggleStr "
                                    data-truncate-words="70"
                                  >
                                    {' '}
                                    Most questions are built around Amazon's 14 principles. &nbsp;{' '}
                                    <a
                                      style={{ display: 'block' }}
                                      class="userResponseLink margTop block hiddenLink mmLink "
                                      href="/Interview/You-have-a-100-coins-laying-flat-on-a-table-each-with-a-head-side-and-a-tail-side-10-of-them-are-heads-up-90-are-tails-QTN_290837.htm"
                                    >
                                      Answer<i class="caret-blue margLtSm rotate180"></i>
                                    </a>
                                    <div
                                      class="userResponses margTopLg borderTop"
                                      style={{ display: 'block' }}
                                    >
                                      <div class="responseText padTopSm tbl fill">
                                        <p class="cell noMargVert padVert borderBot">
                                          Answer #1: Place 50 coins into two piles on its edges so
                                          that both have the same amount of heads in each pile,
                                          neither facing up or down. Answer #2: Trick question,
                                          place 50 coins in both piles and in theory they all have
                                          heads just not necessarily facing up or down.
                                        </p>
                                      </div>
                                    </div>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="reviewComments">
                    <div class="reviewFooter cf">
                      <div class="floatRt helpfulBtn margRtMd tightVert">
                        <span
                          class="block voteHelpful"
                          data-member="true"
                          data-type="INTERVIEW_REVIEW"
                          data-id="31683611"
                          data-count="189"
                        >
                          <button
                            type="button"
                            class="tight gd-btn gd-btn-button gd-btn-2 gd-btn-sm gradient"
                          >
                            <span>
                              Helpful
                              <span class="count">
                                {' '}
                                (<span>189</span>)
                              </span>
                            </span>
                            <i class="hlpr"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>{' '}
                </li>
                <div class="hr">
                  <hr />
                </div>
              </ol>
              <div class="margTop">
                <div class="breadcrumbList margTop">
                  <div
                    class="breadcrumb ib "
                    itemscope=""
                    itemtype="http://data-vocabulary.org/Breadcrumb"
                  >
                    <a itemprop="url" href="/Interview/index.htm" data-ga-lbl="">
                      <span itemprop="title">Inter­views</span> &nbsp;&gt;&nbsp;{' '}
                    </a>
                  </div>
                  <div
                    class="breadcrumb ib "
                    itemprop="child"
                    itemscope=""
                    itemtype="http://data-vocabulary.org/Breadcrumb"
                  >
                    <a
                      itemprop="url"
                      href="/Interview/Amazon-Interview-Questions-E6036.htm"
                      data-ga-lbl=""
                    >
                      <span itemprop="title">Amazon</span>
                    </a>
                  </div>
                </div>
              </div>
              <PaginationComponent
                //   PageCount={this.props.jobListStore.PageCount}
                //   PageNo={this.props.jobListStore.PageNo}
                onPageClick={(e) => {
                  this.onPageClick(e);
                }}
              />{' '}
            </div>
          </div>
        </div>
      </article>
    );
  }
}

// export default CompanyInterviews;

const mapStateToProps = (state) => {
  const { companyOverviewStore, companyReviewsStore } = state.CompanyPageReducer;

  return {
    companyOverviewStore,
    companyReviewsStore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateCompanyInterviewStore: (payload) => {
      dispatch({
        type: updateCompanyInterviewStore,
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInterviews);
