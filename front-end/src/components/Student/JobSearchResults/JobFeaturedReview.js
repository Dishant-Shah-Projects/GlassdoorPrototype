import React, { Component } from 'react';
import './JobFeaturedReview.css';

class JobFeaturedReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tabSection pad" id="ReviewsContainer">
        <header className="margBot">
          <h2 className="h2 tightVert">RoadRunner Recycling Reviews</h2>
        </header>
        <div className="noMargTop padTop noPadHorz noPadBot">
          <div className="reviews-container">
            <div className="reviews-feed-ajax">
              <ol className="empReviews emp-reviews-feed">
                <li className=" empReview cf" id="empReview_37231034">
                  <div>
                    <div className="dateTime">
                      <time className="date">Oct 16, 2020</time>
                    </div>
                    <div className="reviewTop">
                      <div className="row">
                        <div className="companyLogo showDesk showTab">
                          <span className="sqLogo">
                            <span>
                              <img
                                alt="RoadRunner Recycling Logo"
                                title="RoadRunner Recycling Logo"
                                src="https://media.glassdoor.com/sql/1277356/roadrunner-recycling-squarelogo-1534260402401.png"
                              />
                            </span>
                          </span>
                        </div>
                        <div className="companyTitle">
                          <h2 className=" h2 strong">
                            <span className="summary padRtSm">"Retention Manager"</span>
                          </h2>
                          <div className="reviewMeta">
                            <div className="gdStarsWrapper"></div>
                            <div className="author">
                              <span className="authorInfo">
                                <div font-size="sm" className="css-1gf6lcl">
                                  <span style={{ color: 'rgb(12, 170, 65)' }} role="button">
                                    ★
                                  </span>
                                  <span style={{ color: 'rgb(12, 170, 65)' }} role="button">
                                    ★
                                  </span>
                                  <span style={{ color: 'rgb(12, 170, 65)' }} role="button">
                                    ★
                                  </span>
                                  <span style={{ color: 'rgb(12, 170, 65)' }} role="button">
                                    ★
                                  </span>
                                  <span style={{ color: 'rgb(12, 170, 65)' }} role="button">
                                    ★
                                  </span>
                                </div>
                                <div className="reviewerStatus">
                                  Current Employee - Retention Manager
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="reviewContent">
                      <div className="row">
                        <div className="cell sqLogoCell showDesk"></div>
                        <div className="reviewBody">
                          <p className="padTopLg noPadBot noMarg">
                            Former Employee: I worked at RoadRunner Recycling full-time for less
                            than a year
                          </p>
                          <div className="description margTop">
                            <div className="prosConsAdvice">
                              <div className="row">
                                <div className="cell top">
                                  <p className="strong tightVert">Pros</p>
                                  <p className=" pros mainText">You are able to work from home.</p>
                                </div>
                              </div>
                              <div className="row padBotLg">
                                <div className="cell top">
                                  <p className="strong tightVert">Cons</p>
                                  <p className=" cons mainText">No life insurance is offered.</p>
                                </div>
                              </div>
                            </div>
                            <div className="outlookEmpReview">
                              <div className="row">
                                <div className="reviewFooter padTopXl"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobFeaturedReview;
