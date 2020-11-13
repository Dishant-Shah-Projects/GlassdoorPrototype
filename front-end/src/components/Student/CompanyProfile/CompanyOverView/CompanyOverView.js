import React, { Component } from 'react';
import SpecialReview from '../CompanyReviews/SpecialReview';
import './CompanyOverView.css';

class CompanyOverView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article id="MainCol">
        <div class="gdGrid">
          <div id="EIOverviewContainer">
            <div class="css-ifw56c">
              <div
                class="  gd-ui-module css-lcvd8h"
                data-brandviews="MODULE:n=eiOverview-baseOverview:eid=6036"
                data-test="employerOverviewModule"
              >
                <header class="d-flex align-items-center justify-content-between mb-std">
                  <h2 class="my-0" data-test="employerOverviewHeader">
                    Amazon Overview
                  </h2>
                </header>
                <ul id="companyOverView" class="css-155za0w row px-0 m-0">
                  <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pr-xxsm">
                    <label class="css-1f0lhlt ecl3kjh0">Website:</label>
                    <a
                      href="//www.amazon.jobs"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="css-1hg9omi"
                      data-test="employer-website"
                    >
                      www.amazon.jobs
                    </a>
                  </li>
                  <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pl-sm-xxsm">
                    <label class="css-1f0lhlt ecl3kjh0">Headquarters:</label>
                    <div data-test="employer-headquarters">Seattle, WA</div>
                  </li>
                  <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pr-sm-xxsm">
                    <label class="css-1f0lhlt ecl3kjh0">Size:</label>
                    <div data-test="employer-size">10000+ Employees</div>
                  </li>
                  <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pl-sm-xxsm">
                    <label class="css-1f0lhlt ecl3kjh0">Founded:</label>
                    <div data-test="employer-founded">1994</div>
                  </li>
                  <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pr-sm-xxsm">
                    <label class="css-1f0lhlt ecl3kjh0">Type:</label>
                    <div data-test="employer-type">Company - Public</div>
                  </li>
                  <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pl-sm-xxsm">
                    <label class="css-1f0lhlt ecl3kjh0">Industry:</label>
                    <div data-test="employer-industry">Internet</div>
                  </li>
                  <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pr-sm-xxsm">
                    <label class="css-1f0lhlt ecl3kjh0">Revenue:</label>
                    <div data-test="employer-revenue">$10+ billion (USD)</div>
                  </li>
                </ul>
                <div class="my-std css-1raszzq e16x8fv01">
                  <p class="strong"></p>
                  <span data-test="employerDescription">
                    All Amazon teams and businesses, from Prime delivery to AWS, are guided by four
                    key tenets: customer obsession rather than competitor focus, passion for
                    invention, commitment to operational excellence, and long-term thinking.We are
                    driven by the excitement of building ...
                  </span>
                </div>
                <hr class="my-std css-1g9ch1j e1keu4zk0" />
              </div>
              <div class="mt-std gd-ui-module css-lcvd8h" data-test="wwwu-component">
                <h2 data-brandviews="MODULE:n=eiOverview-wwwu:eid=6036" data-test="wwwu-header">
                  Amazon - Why Work With Us?
                </h2>
                <div class="css-79elbk e1uqj0m80">
                  <div class="css-14aw92t">
                    <div class="mt-xxl mb-std css-btxr0m e1uqj0m81">
                      <div data-test="wwwu-textContent">
                        <p>
                          <strong>Our mission: </strong>
                        </p>
                        <p>
                          What unites Amazonians across teams and geographies is that we are all
                          striving to delight our customers and make their lives easier. &nbsp;The
                          scope and scale of our mission drives us to seek diverse perspectives, be
                          resourceful, and navigate through ambiguity. &nbsp;Inventing and
                          delivering things that were never thought possible isn't easy, but we
                          embrace this challenge every day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-std gd-ui-module css-lcvd8h">
                <h2 class="title css-1bqzjlu">Amazon Reviews</h2>
                <header class="item m-0">
                  <span class="hidden fn">Amazon</span>
                  <span class="hidden count">49005</span>
                </header>
                <div class="mb-md-md mb-xsm d-flex justify-content-center align-items-center">
                  <div class="mr-xsm css-1udf4qc eky1qiu0">3.9</div>
                  <div font-size="md" class="css-1nka8iu">
                    <span role="button">★</span>
                    <span role="button">★</span>
                    <span role="button">★</span>
                    <span role="button">★</span>
                    <span role="button">★</span>
                  </div>
                </div>
                <div class="row d-flex align-items-start">
                  <div
                    class="col-4 d-flex justify-content-center"
                    data-percentage="76"
                    id="EmpStats_Recommend"
                  >
                    <div class="d-table">
                      <div class="d-lg-table-cell posRl middle css-1h8alnk e1chagab0">
                        <svg
                          width="66"
                          height="66"
                          class="donutChart d-block"
                          style={{ fill: 'transparent' }}
                        >
                          <circle
                            r="29"
                            cx="33"
                            cy="33"
                            transform="rotate(-90 33,33)"
                            class="track"
                            style={{ stroke: 'rgb(222, 224, 227)', strokeWidth: '8' }}
                          ></circle>
                          <circle
                            r="29"
                            cx="33"
                            cy="33"
                            transform="rotate(-90 33,33)"
                            class="indicator"
                            style={{
                              stroke: 'rgb(12, 170, 65)',
                              strokeDasharray: '138.481, 182.212',
                              strokeWidth: '8',
                            }}
                          ></circle>
                          <text
                            class="text"
                            x="33"
                            y="33"
                            text-anchor="middle"
                            style={{ fill: 'rgb(12, 170, 65)' }}
                          >
                            <tspan
                              alignment-baseline="middle"
                              class="textVal"
                              style={{ fontSize: '18px' }}
                            >
                              76
                            </tspan>
                            <tspan
                              alignment-baseline="middle"
                              baseline-shift="-25%"
                              class="textPercent"
                              style={{ fontSize: '9px' }}
                            >
                              %
                            </tspan>
                          </text>
                        </svg>
                      </div>
                      <div class="d-lg-table-cell middle posRl pt-sm pt-lg-0 px-lg-sm css-ydn16 e1msvi8i0">
                        Recommend to a Friend
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-4 d-flex justify-content-center"
                    data-brandviews="MODULE:n=eiOverview-ceoApproval:eid=6036"
                  >
                    <div class="mx-sm-std" data-percentage="83" id="EmpStats_Approve">
                      <div class="d-table">
                        <div class="d-lg-table-cell posRl middle css-1h8alnk e1chagab0">
                          <svg
                            width="66"
                            height="66"
                            class="donutChart d-block"
                            style={{ fill: 'transparent' }}
                          >
                            <circle
                              r="29"
                              cx="33"
                              cy="33"
                              transform="rotate(-90 33,33)"
                              class="track"
                              style={{ stroke: 'rgb(222, 224, 227)', strokeWidth: '8' }}
                            ></circle>
                            <circle
                              r="29"
                              cx="33"
                              cy="33"
                              transform="rotate(-90 33,33)"
                              class="indicator"
                              style={{
                                stroke: 'rgb(12, 170, 65)',
                                strokeDasharray: '151.236, 182.212',
                                strokeWidth: '8',
                              }}
                            ></circle>
                            <text
                              class="text"
                              x="33"
                              y="33"
                              text-anchor="middle"
                              style={{ fill: 'rgb(12, 170, 65)' }}
                            >
                              <tspan
                                alignment-baseline="middle"
                                class="textVal"
                                style={{ fontSize: '18px' }}
                              >
                                83
                              </tspan>
                              <tspan
                                alignment-baseline="middle"
                                baseline-shift="-25%"
                                class="textPercent"
                                style={{ fontSize: '9px' }}
                              >
                                %
                              </tspan>
                            </text>
                          </svg>
                        </div>
                        <div class="d-lg-table-cell middle posRl pt-sm pt-lg-0 px-lg-sm css-ydn16 e1msvi8i0">
                          Approve of CEO
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 d-flex flex-column flex-lg-row align-items-center d-table css-qr6okv e1khaexh0">
                    <div class="d-lg-table-cell ceoName pt-sm pt-lg-0 px-lg-sm">
                      Jeff Bezos<div class="numCeoRatings">26,648 Ratings</div>
                    </div>
                  </div>
                </div>
                <SpecialReview reviewType={'Featured Review'} />
                <SpecialReview reviewType={'Most Helpufl Positive Review'} />
                <SpecialReview reviewType={'Most Helpufl Negative Review'} />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default CompanyOverView;
