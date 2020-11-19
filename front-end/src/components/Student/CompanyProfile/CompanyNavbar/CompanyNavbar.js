import React, { Component } from 'react';
import './CompanyNavbar.css';
import { switchTab } from '../../../../constants/action-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CompanyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  switchTab = (event, tab) => {
    event.preventDefault();
    const payload = {
      selectedTab: tab,
    };
    this.props.switchTab(payload);
  };
  render() {
    let button = (
      <a
        onClick={() => this.props.openForm('ReviewForm')}
        href="#"
        class="gd-btn gd-btn-link gradient gd-btn-1 gd-btn-med gd-btn-icon padHorz addReview"
      >
        <i class="btn-plus margRtSm"></i>
        <span>Add a Review</span>
        <i class="hlpr"></i>
      </a>
    );
    if (this.props.companyNavbarStore.selectedTab === 'CompanyInterviews') {
      button = (
        <a
          onClick={() => this.props.openForm('InterviewForm')}
          href="#"
          class="gd-btn gd-btn-link gradient gd-btn-1 gd-btn-med gd-btn-icon padHorz addReview"
        >
          <i class="btn-plus margRtSm"></i>
          <span>Add an Interview</span>
          <i class="hlpr"></i>
        </a>
      );
    } else if (this.props.companyNavbarStore.selectedTab === 'CompanyPhotos') {
      button = (
        <a
          onClick={() => this.props.openForm('PhotoUploadForm')}
          href="#"
          class="gd-btn gd-btn-link gradient gd-btn-1 gd-btn-med gd-btn-icon padHorz addReview"
        >
          <i class="btn-plus margRtSm"></i>
          <span>Add Photos</span>
          <i class="hlpr"></i>
        </a>
      );
    } else if (this.props.companyNavbarStore.selectedTab === 'CompanySalaries') {
      button = (
        <a
          onClick={() => this.props.openForm('SalaryForm')}
          href="#"
          class="gd-btn gd-btn-link gradient gd-btn-1 gd-btn-med gd-btn-icon padHorz addReview"
        >
          <i class="btn-plus margRtSm"></i>
          <span>Add a Salary</span>
          <i class="hlpr"></i>
        </a>
      );
    }
    return (
      <article id="WideCol">
        <div
          id="EIHdrModule"
          class="snug module noblur eep sticky"
          style={{ width: '992px', top: '0px' }}
        >
          <div
            id="EmpHeroAndEmpInfo"
            class="gdGrid"
            data-brandviews="MODULE:n=hub-profileImage:eid=6036"
          >
            <div id="HeroLbFrame-6036" class="hidden">
              <div class="lbSlideFrame">
                <div class="titleBar">
                  <span class="viewAll">
                    <a href="#">
                      <i></i>
                      <span>View All</span>
                    </a>
                  </span>
                  <span class="counter">
                    <span class="current">num</span> of <span class="total">num</span>
                  </span>
                  <span class="close">
                    <button type="button" title="Close (Esc)">
                      <span class="offScreen">Close (Esc)</span>
                    </button>
                  </span>
                </div>
                <div class="slides"></div>
              </div>
            </div>
            <div
              id="EmpHero"
              class=" coverPic noVideo"
              data-employer-id="6036"
              data-photo-frame-id="HeroLbFrame-6036"
            >
              <img
                class="lazy hero lazy-loaded"
                alt="Cover Image for Amazon"
                src="https://media.glassdoor.com/banner/bh/6036/amazon-banner-1578695809222.jpg"
                data-original="https://media.glassdoor.com/banner/bh/6036/amazon-banner-1578695809222.jpg"
              />
              <div class="overlay">
                <a
                  href="/Photos/Amazon-Office-Photos-E6036.htm"
                  class="noMargVert"
                  id="EmpHeroPhotoLink"
                >
                  <i class="camera cell middle">
                    <span>See All Photos</span>
                  </i>
                  <span class="padLtSm cell small middle">See All Photos</span>
                </a>
              </div>
            </div>
            <div class="empInfo tbl hideHH ">
              <div class="logo cell">
                <a
                  href="/Overview/Working-at-Amazon-EI_IE6036.11,17.htm"
                  data-ajax="true"
                  class="sqLogoLink"
                >
                  <span class="sqLogo tighten lgSqLogo logoOverlay">
                    <img
                      src={this.props.companyOverviewStore.companyOverview.ProfileImg}
                      class=""
                      alt=" Logo"
                      title=""
                    />
                  </span>
                </a>
              </div>
              <div style={{ paddingLeft: '100px' }} class="header cell info">
                <h1 class=" strong tightAll" title="" data-company="Amazon">
                  <span id="DivisionsDropdownComponent" class="d-inline-flex align-items-center">
                    {' '}
                    {this.props.companyOverviewStore.companyOverview.CompanyName}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div id="StickyNavWrapper" class="stickyNavWrapper ">
            <div id="SmarterNavContainer" class="initialStick">
              <div id="SmarterBannerContainer"></div>
              <div id="EmpLinksWrapper" class="empLinksWrapper  sticky">
                <div class="empLinks tbl ">
                  <div id="EIProductHeaders" class="tbl eiProductCells">
                    <div class="row ">
                      <span
                        onClick={(event) => this.switchTab(event, 'Overview')}
                        class={
                          this.props.companyNavbarStore.selectedTab === 'Overview'
                            ? 'eiCell cell overviews switchLogo active'
                            : 'eiCell cell overviews switchLogo '
                        }
                        // class="eiCell cell overviews switchLogo active"
                        data-selector="orgStructureOverviewDropdown"
                      >
                        <div id="HierarchiesDropdown"></div>
                        <span class="num h2">
                          <i class="icon-bullseye-select">
                            <span>Overview</span>
                          </i>
                        </span>
                        <span class="subtle"> Overview</span>
                      </span>{' '}
                      <div class="vline cell">
                        <i></i>
                      </div>
                      <a
                        onClick={(event) => this.switchTab(event, 'GeneralReview')}
                        class={
                          this.props.companyNavbarStore.selectedTab === 'GeneralReview'
                            ? 'eiCell cell reviews active'
                            : 'eiCell cell reviews '
                        }
                        href="#"
                        data-label="Reviews"
                      >
                        <span class="num h2">
                          {' '}
                          {this.props.companyOverviewStore.companyOverview.GeneralReviewCount}
                        </span>
                        <span class="subtle"> Reviews</span>
                      </a>
                      <div class="vline cell">
                        <i></i>
                      </div>
                      <a
                        onClick={(event) => this.switchTab(event, 'CompanyJobs')}
                        class={
                          this.props.companyNavbarStore.selectedTab === 'CompanyJobs'
                            ? 'eiCell cell jobs active'
                            : 'eiCell cell jobs '
                        }
                        // class="eiCell cell jobs "
                        href="#"
                        data-label="Jobs"
                      >
                        <span class="num h2">
                          {' '}
                          {this.props.companyOverviewStore.companyOverview.JobCount}
                        </span>
                        <span class="subtle"> Jobs</span>
                      </a>
                      <div class="vline cell">
                        <i></i>
                      </div>
                      <a
                        onClick={(event) => this.switchTab(event, 'CompanySalaries')}
                        class={
                          this.props.companyNavbarStore.selectedTab === 'CompanySalaries'
                            ? 'eiCell cell salaries active'
                            : 'eiCell cell salaries '
                        }
                        // class="eiCell cell salaries "
                        href="#"
                        data-label="Salaries"
                      >
                        <span class="num h2">
                          {' '}
                          {this.props.companyOverviewStore.companyOverview.SalaryReviewCount}
                        </span>
                        <span class="subtle"> Salaries</span>
                      </a>
                      <div class="vline cell">
                        <i></i>
                      </div>
                      <a
                        onClick={(event) => this.switchTab(event, 'CompanyInterviews')}
                        class={
                          this.props.companyNavbarStore.selectedTab === 'CompanyInterviews'
                            ? 'eiCell cell interviews active'
                            : 'eiCell cell interviews '
                        }
                        // class="eiCell cell interviews "
                        href="/Interview/Amazon-Interview-Questions-E6036.htm"
                        data-label="Inter­views"
                      >
                        <span class="num h2">
                          {' '}
                          {this.props.companyOverviewStore.companyOverview.InterviewReviewCount}
                        </span>
                        <span class="subtle"> Inter­views</span>
                      </a>
                      <div class="vline cell">
                        <i></i>
                      </div>
                      <a
                        onClick={(event) => this.switchTab(event, 'CompanyPhotos')}
                        class={
                          this.props.companyNavbarStore.selectedTab === 'CompanyPhotos'
                            ? 'eiCell cell photos active'
                            : 'eiCell cell photos '
                        }
                        // class="eiCell cell photos "
                        href="#"
                        data-label="Photos"
                      >
                        <span class="num h2">
                          {' '}
                          {this.props.companyOverviewStore.companyOverview.PhotoCount}
                        </span>
                        <span class="subtle"> Photos</span>
                      </a>
                    </div>
                  </div>
                  <div class="buttons cell showDesk padRt alignRt">{button}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

// export default CompanyNavbar;

const mapStateToProps = (state) => {
  const { companyNavbarStore } = state.CompanyResultPageReducer;
  const { companyOverviewStore } = state.CompanyPageReducer;

  return {
    companyNavbarStore,
    companyOverviewStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchTab: (payload) => {
      dispatch({
        type: switchTab,
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyNavbar);
