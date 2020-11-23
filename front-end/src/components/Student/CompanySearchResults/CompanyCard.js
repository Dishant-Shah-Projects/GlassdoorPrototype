import React, { Component } from 'react';
import './CompanySearchResults.css';
import defaultplaceholder from '../CompanyProfile/CompanyNavbar/default-placeholder.png';

class CompanyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const company = this.props.company;
    let AvgRating = 0;
    if (
      company.GeneralReviewCount &&
      company.GeneralReviewCount > 0 &&
      company.TotalGeneralReviewRating &&
      company.TotalGeneralReviewRating > 0
    ) {
      AvgRating = (company.TotalGeneralReviewRating / company.GeneralReviewCount).toFixed(1);
    }
    const defaultImage =
      'https://s3-media0.fl.yelpcdn.com/assets/public/user_60_square.yji-514f6997a3184af475d5adc800b6d0b1.png';

    return (
      <div
        id="companycard"
        className="row justify-content-between"
        style={{ display: 'flex !important' }}
      >
        <div className="col-lg-7">
          <div id="companycard" className="row justify-content-start">
            <div className="col-3 logo-and-ratings-wrap">
              <a href="#" data-ajax="true" className="sqLogoLink">
                <span className="sqLogo tighten medSqLogo logoOverlay">
                  <img
                    src={company.ProfileImg ? company.ProfileImg : defaultplaceholder}
                    className=""
                    alt=" Logo"
                    title=""
                  />
                </span>
              </a>
            </div>
            <div className="col-9 pr-0">
              <h2>
                <a onClick={(event) => this.props.openCompanyProfile(event)} href="#">
                  {company.CompanyName}
                </a>
                <div className="ratingsSummary cf">
                  <span>
                    <span className="bigRating strong margRtSm h2">{AvgRating}</span>
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
                  <span className="value">
                    {company.City}, {company.State}
                  </span>
                </p>
                <p className="webInfo mb-0 mt-xxsm">
                  <span className="url">
                    <a href={company.Website}>{company.Website}</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 ei-contributions-count-wrap mt-std">
          <div id="companycard" className="row justify-content-between">
            <div className="ei-contribution-wrap col-4 pl-lg-0 pr-0">
              <a
                className="eiCell cell reviews d-inline-block py-sm"
                href="/Reviews/Amazon-San-Jose-Reviews-EI_IE6036.0,6_IL.7,15_IM761.htm"
                data-label=""
              >
                <span className="num h2">
                  {company.GeneralReviewCount ? company.GeneralReviewCount : 0}
                </span>
                <span className="subtle"> Reviews</span>
              </a>
            </div>
            <div className="ei-contribution-wrap col-4 p-0">
              <a
                className="eiCell cell salaries d-inline-block py-sm"
                href="/Salary/Amazon-San-Jose-Salaries-EI_IE6036.0,6_IL.7,15_IM761.htm"
                data-label=""
              >
                <span className="num h2">
                  {' '}
                  {company.SalaryReviewCount ? company.SalaryReviewCount : 0}
                </span>
                <span className="subtle"> Salaries</span>
              </a>
            </div>
            <div className="ei-contribution-wrap col-4 pl-0">
              <a
                className="eiCell cell interviews d-inline-block py-sm"
                href="/Interview/Amazon-San-Jose-Interview-Questions-EI_IE6036.0,6_IL.7,15_IM761.htm"
                data-label=""
              >
                <span className="num h2">
                  {' '}
                  {company.InterviewReviewCount ? company.InterviewReviewCount : 0}
                </span>
                <span className="subtle"> Inter­views</span>
              </a>
            </div>
            <div className="col-12 mt">
              <div className="row justify-content-center justify-content-lg-end">
                <div className="col-11 col-lg-auto cta-wrap">
                  <a
                    onClick={() => this.props.openAddReview()}
                    style={{ marginLeft: '62%' }}
                    href="#"
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
