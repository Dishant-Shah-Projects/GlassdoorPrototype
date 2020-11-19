import React, { Component } from 'react';
import PaginationComponent from '../../Common/PaginationComponent';
import CompanyJobCard from './CompanyJobCard';
import './CompanyJobs.css';
import axios from 'axios';
import serverUrl from '../../../../config';
import { updateStudentProfile } from '../../../../constants/action-types';
import { connect } from 'react-redux';

class CompanyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  commonFetch = (PageNo = 0) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'student/companyReview', {
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
            ReviewList: response.data[2],
            PageNo,
            Totalcount: response.data[0].count,
            PageCount: Math.ceil(response.data[0].count / 10),

            // PageCount: Math.ceil(response.data.Totalcount / 3),
          };
          this.props.updateCompanyReviewsStore(payload);
        },
        (error) => {
          console.log('error', error);
        }
      );
  };

  onPageClick = (e) => {
    // console.log('Page Clicked:', e.selected);
    this.commonFetch(e.selected);
  };
  saveJob = (event, JobID) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    const data = {
      JobID,
      StudentID: localStorage.getItem('userId'),
    };
    axios.post(serverUrl + 'student/companyFavouriteJobs', data).then(
      (response) => {
        console.log('Status Code : ', response.status);
        if (response.status === 200) {
          console.log(response.data);

          let studentProfile = { ...this.props.studentInfoStore.studentProfile };
          studentProfile.FavouriteJobs.push(JobID);
          const payload = {
            studentProfile,
          };
          this.props.updateStudentProfile(payload);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  render() {
    return (
      <article id="MainCol">
        <div id="JobsLandingPage">
          <div>
            <div class="gdGrid">
              <div>
                <div class="module gdGrid" data-test="employerJobsModule">
                  <div class="HeaderAdSlotStyles__headerAdSlot"></div>
                  <header class="d-flex justify-content-between align-items-start">
                    <div class="HeaderContainerStyles__h1Container">
                      <h1 class="h2 mb-0 HeaderContainerStyles__h2">Amazon Jobs</h1>
                    </div>
                  </header>
                  <div class="mt mb">
                    <form action="" id="JobsFilterForm">
                      <div class="search gdGrid">
                        <div class="d-flex flex-md-column flex-lg-row">
                          <label for="JobTitleAC" class="hidden">
                            Search job titles
                          </label>
                          <input
                            id="JobTitleAC"
                            name="filter.jobTitleFTS"
                            class="InputStyles__input EIFilterModuleStyles__eiJobsTitleSearch InputStyles__hasContent"
                            placeholder="Search job titles"
                            value=""
                            autocomplete="off"
                          />
                          <label for="LocationAC" class="hidden">
                            City, State, or Zip
                          </label>
                          <input
                            id="LocationAC"
                            class="InputStyles__input EIFilterModuleStyles__locationSearchInput  "
                            name="filter.jobLocationFTS"
                            placeholder="City, State, or Zip"
                            value=""
                          />
                          <div class="d-flex justify-content-between EIFilterModuleStyles__ctaButtonContainer">
                            <button
                              class="gd-ui-button d-none d-md-inline EIFilterModuleStyles__findBtn css-r97zbm"
                              type="button"
                            >
                              Find Jobs
                            </button>
                            <button
                              class="gd-ui-button with-icon d-lg-none ml-xsm EIFilterModuleStyles__filterBtn css-1ef15q7"
                              data-test="filterToggleBtnMobile"
                              type="button"
                            >
                              Filter
                            </button>
                          </div>
                        </div>
                        <div class="margTop d-none d-sm-flex justify-content-between">
                          <div class="d-flex">
                            <span class="EIFilterModuleStyles__noFilterText">
                              Filter your search results by title, or location.
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="JobsListStyles__jobListContainer gdGrid">
                    {<CompanyJobCard job={'job'} savJob={(event) => this.saveJob(event, 'id')} />}
                  </div>
                  <div class="col d-flex mt mx-auto justify-content-center ">
                    <PaginationComponent
                      //   PageCount={this.props.jobListStore.PageCount}
                      //   PageNo={this.props.jobListStore.PageNo}
                      onPageClick={(e) => {
                        this.onPageClick(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  const { studentInfoStore } = state.StudentCompleteInfoReducer;
  return {
    studentInfoStore,
  };
};
// export default CompanyJobs;
const mapDispatchToProps = (dispatch) => {
  return {
    updateStudentProfile: (payload) => {
      dispatch({
        type: updateStudentProfile,
        payload,
      });
    },
  };
};
// export default LoginBody;
export default connect(mapStateToProps, mapDispatchToProps)(CompanyJobs);
