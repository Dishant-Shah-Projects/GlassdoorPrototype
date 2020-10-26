import React, { Component } from 'react';
import './CompanySearchResults.css';

class CompanyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-between">
        <div className="col-lg-7">
          <div className="row justify-content-start">
            <div className="col-3 logo-and-ratings-wrap">
              <a
                href="/Overview/Working-at-Amazon-EI_IE6036.11,17.htm"
                data-ajax="true"
                className="sqLogoLink"
              >
                <span className="sqLogo tighten medSqLogo logoOverlay">
                  <img
                    src="https://media.glassdoor.com/sqls/6036/amazon-squarelogo-1552847650117.png"
                    className=""
                    alt=" Logo"
                    title=""
                  />
                </span>
              </a>
            </div>
            <div className="col-9 pr-0">
              <h2>
                <a href="/Overview/Working-at-Amazon-EI_IE6036.11,17.htm">Amazon</a>
                <div className="ratingsSummary cf">
                  <span>
                    <span className="bigRating strong margRtSm h2">3.9</span>
                    <span className="gdStars gdRatings sm ">
                      <i>
                        <i></i>
                        <i className="star">
                          <span>Star</span>
                        </i>
                      </i>
                    </span>
                  </span>
                </div>
              </h2>
              <div className="web-and-address-wrap">
                <p className="hqInfo adr m-0">
                  <span className="value">Seattle, WA</span>
                </p>
                <p className="webInfo mb-0 mt-xxsm">
                  <span className="url">
                    <a href="http://www.amazon.jobs">www.amazon.jobs</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 ei-contributions-count-wrap mt-std">
          <div className="row justify-content-between">
            <div className="ei-contribution-wrap col-4 pl-lg-0 pr-0">
              <a
                className="eiCell cell reviews d-inline-block py-sm"
                href="/Reviews/Amazon-San-Jose-Reviews-EI_IE6036.0,6_IL.7,15_IM761.htm"
                data-label=""
              >
                <span className="num h2"> 52k</span>
                <span className="subtle"> Reviews</span>
              </a>
            </div>
            <div className="ei-contribution-wrap col-4 p-0">
              <a
                className="eiCell cell salaries d-inline-block py-sm"
                href="/Salary/Amazon-San-Jose-Salaries-EI_IE6036.0,6_IL.7,15_IM761.htm"
                data-label=""
              >
                <span className="num h2"> 89k</span>
                <span className="subtle"> Salaries</span>
              </a>
            </div>
            <div className="ei-contribution-wrap col-4 pl-0">
              <a
                className="eiCell cell interviews d-inline-block py-sm"
                href="/Interview/Amazon-San-Jose-Interview-Questions-EI_IE6036.0,6_IL.7,15_IM761.htm"
                data-label=""
              >
                <span className="num h2"> 26k</span>
                <span className="subtle"> Inter­views</span>
              </a>
            </div>
            <div className="col-12 mt">
              <div className="row justify-content-center justify-content-lg-end">
                <div className="col-11 col-lg-auto cta-wrap">
                  <a
                    style={{ marginLeft: '62%' }}
                    href="/mz-survey/employer/collectReview_input.htm?c=PAGE_SRCH_COMPANIES&amp;i=6036"
                    className="gd-btn gd-btn-link gradient gd-btn-1 gd-btn-med gd-btn-icon pr-md"
                  >
                    <i className="btn-plus margRtSm"></i>
                    <span>Add a Review</span>
                    <i className="hlpr"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyCard;
