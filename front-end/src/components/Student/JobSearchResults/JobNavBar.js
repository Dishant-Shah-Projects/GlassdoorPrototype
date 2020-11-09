/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import JobCities from './JobCities';
import JobTypes from './JobTypes';
import SalRange from './SalRange';
import { updateJobFilterStore, updateJobListStore } from '../../../constants/action-types';
import { connect } from 'react-redux';

class JobNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let salRange =
      '$' + this.props.jobListStore.SalStart + 'K-$' + this.props.jobListStore.SalEnd + 'K';
    if (this.props.jobListStore.SalStart === this.props.jobListStore.SalEnd) {
      salRange = 'All salaries';
    }
    let dropDownStyle = null;
    if (this.props.jobFilterStore.fiterSlected === 'JOBTYPE') {
      dropDownStyle = { left: '10px' };
    } else if (this.props.jobFilterStore.fiterSlected === 'SALRANGE') {
      dropDownStyle = { left: '186px' };
    } else {
      dropDownStyle = { left: '362px' };
    }
    return (
      <div id="HzFiltersWrap" className="borderBot">
        <header id="DKFilters" className="wide">
          <div id="dynamicFiltersContainer">
            <div className="selectContainer">
              <div className="allDropdowns">
                <div className="selectDynamicFilters">
                  <div
                    onClick={() => this.props.toggleFilter('JOBTYPE')}
                    data-test="JOBTYPE"
                    className={
                      this.props.jobFilterStore.fiterSlected === 'JOBTYPE'
                        ? 'filter expanded'
                        : 'filter'
                    }
                    id="filter_jobType"
                  >
                    <span className="label">
                      {this.props.jobListStore.JobType === ''
                        ? 'All Job Types'
                        : this.props.jobListStore.JobType}
                    </span>
                    <span className="labelArrow small"></span>
                  </div>
                  <div
                    onClick={() => this.props.toggleFilter('SALRANGE')}
                    data-test="SALRANGE"
                    className={
                      this.props.jobFilterStore.fiterSlected === 'SALRANGE'
                        ? 'filter expanded'
                        : 'filter'
                    }
                    id="filter_minSalary"
                  >
                    <span className="label">{salRange}</span>
                    <span className="labelArrow small"></span>
                  </div>
                  <div
                    onClick={() => this.props.toggleFilter('CITY')}
                    data-test="CITY"
                    className={
                      this.props.jobFilterStore.fiterSlected === 'CITY'
                        ? 'filter expanded'
                        : 'filter'
                    }
                    // className="filter"
                    id="filter_cityId"
                  >
                    <span className="label">
                      {this.props.jobListStore.State === ''
                        ? 'All States'
                        : this.props.jobListStore.State}
                    </span>
                    <span className="labelArrow small"></span>
                  </div>
                </div>
              </div>
              <div className="clearFilters">
                <span>Clear Filters</span>
              </div>
              <div className="filter expandable right containerLess createBtnContainer">
                <a className="gd-btn gd-btn-link gradient gd-btn-2 gd-btn-med">
                  <span className="SVGInline filterIcons profileIcon">
                    <svg
                      className="SVGInline-svg filterIcons-svg profileIcon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none">
                        <path
                          stroke="#1861BF"
                          d="M10 19.5a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"
                        ></path>
                        <path
                          fill="#1861BF"
                          d="M16.12 16.6A8.968 8.968 0 0110 19a8.968 8.968 0 01-6.12-2.4A6.998 6.998 0 0110 13a6.998 6.998 0 016.12 3.6zM10 12a4 4 0 110-8 4 4 0 010 8z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  Finish Your Profile
                </a>
              </div>
            </div>
          </div>
          <div id="PrimaryDropdown" style={dropDownStyle}>
            {this.props.jobFilterStore.fiterSlected === 'JOBTYPE' ? (
              <JobTypes
                filterChangeCall={(JobType, State, SalStart, SalEnd, PageNo) =>
                  this.props.filterChangeCall(JobType, State, SalStart, SalEnd, PageNo)
                }
              />
            ) : (
              ''
            )}
            {this.props.jobFilterStore.fiterSlected === 'SALRANGE' ? (
              <SalRange
                filterChangeCall={(JobType, State, SalStart, SalEnd, PageNo) =>
                  this.props.filterChangeCall(JobType, State, SalStart, SalEnd, PageNo)
                }
              />
            ) : (
              ''
            )}
            {this.props.jobFilterStore.fiterSlected === 'CITY' ? (
              <JobCities
                filterChangeCall={(JobType, State, SalStart, SalEnd, PageNo) =>
                  this.props.filterChangeCall(JobType, State, SalStart, SalEnd, PageNo)
                }
              />
            ) : (
              ''
            )}
          </div>
        </header>
      </div>
    );
  }
}

// export default JobNavBar;
const mapStateToProps = (state) => {
  const { jobFilterStore, jobListStore } = state.JobSearchPageReducer;
  // const { lowerNavbarType } = state.lowerNavBarReducer;
  return {
    jobFilterStore,
    jobListStore,
    // lowerNavbarType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateJobFilterStore: (payload) => {
      dispatch({
        type: updateJobFilterStore,
        payload,
      });
    },
    updateJobListStore: (payload) => {
      dispatch({
        type: updateJobListStore,
        payload,
      });
    },
  };
};

// export default LoginBody;
export default connect(mapStateToProps, mapDispatchToProps)(JobNavBar);
