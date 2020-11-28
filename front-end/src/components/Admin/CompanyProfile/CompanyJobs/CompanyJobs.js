import React, { Component } from 'react';
import CompanyJobCard from './CompanyJobCard';
import './CompanyJobs.css';
import axios from 'axios';
import serverUrl from '../../../../config';
import { updateStudentProfile, updateCompanyJobStore } from '../../../../constants/action-types';
import { connect } from 'react-redux';
import PaginationComponent from '../../../Student/Common/PaginationComponent';

class CompanyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = { Title: '', City: '' };
  }

  componentDidMount() {
    this.commonFetch();
  }

  commonFetch = (PageNo = 0) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'student/companyJobs', {
        params: {
          CompanyID: localStorage.getItem('companyID'),
          PageNo,
          Title: this.state.Title,
          City: this.state.City,
        },
        withCredentials: true,
      })
      .then(
        (response) => {
          console.log('companyJobs:', response.data);
          let payload = {
            JobList: response.data[0],
            PageNo,
            Totalcount: response.data[1],
            PageCount: Math.ceil(response.data[1] / 10),

            // PageCount: Math.ceil(response.data.Totalcount / 3),
          };
          this.props.updateCompanyJobStore(payload);
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

  unsaveJob = (event, JobID) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    const data = {
      JobID,
      StudentID: localStorage.getItem('userId'),
    };
    axios.post(serverUrl + 'student/removeFavouriteJobs', data).then(
      (response) => {
        console.log('Status Code : ', response.status);
        if (response.status === 200) {
          console.log(response.data);

          let studentProfile = { ...this.props.studentInfoStore.studentProfile };
          var index = studentProfile.FavouriteJobs.indexOf(JobID);
          if (index !== -1) {
            studentProfile.FavouriteJobs.splice(index, 1);
          }
          // studentProfile.FavouriteJobs.push(JobID);
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

  commonOnChangeHandler = (event) => {
    // event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
      openStatusDropDown: false,
    });
  };

  openJobPage = (event, jobID) => {
    localStorage.setItem('application_job_id', jobID);
    localStorage.setItem(
      'CoverPhoto',
      this.props.companyOverviewStore.companyOverview.CoverPhoto
        ? 'this.props.companyOverviewStore.companyOverview.CoverPhoto'
        : ''
    );
    localStorage.setItem(
      'ProfileImg',
      this.props.companyOverviewStore.companyOverview.ProfileImg
        ? 'this.props.companyOverviewStore.companyOverview.ProfileImg'
        : ''
    );
    this.props.openForm('JobApplicationPage');
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
                      <h1 class="h2 mb-0 HeaderContainerStyles__h2">
                        {this.props.companyOverviewStore.companyOverview.CompanyName} Jobs
                      </h1>
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
                            onChange={this.commonOnChangeHandler}
                            id="JobTitleAC"
                            name="Title"
                            class="InputStyles__input EIFilterModuleStyles__eiJobsTitleSearch InputStyles__hasContent"
                            placeholder="Search job titles"
                            value={this.state.Title}
                            autocomplete="off"
                          />
                          <label for="LocationAC" class="hidden">
                            City
                          </label>
                          <input
                            onChange={this.commonOnChangeHandler}
                            id="LocationAC"
                            class="InputStyles__input EIFilterModuleStyles__locationSearchInput  "
                            name="City"
                            placeholder="City"
                            value={this.state.City}
                          />
                          <div class="d-flex justify-content-between EIFilterModuleStyles__ctaButtonContainer">
                            <button
                              onClick={this.commonFetch}
                              class="gd-ui-button d-none d-md-inline EIFilterModuleStyles__findBtn css-r97zbm"
                              type="button"
                            >
                              Find Jobs
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
                    <ul class="JobsListStyles__jobList">
                      {this.props.companyJobStore.JobList.map((job) => (
                        <CompanyJobCard
                          job={job}
                          openJobPage={(event) => this.openJobPage(event, job._id)}
                          unsaveJob={(event) => this.unsaveJob(event, job._id)}
                          saveJob={(event) => this.saveJob(event, job._id)}
                        />
                      ))}
                    </ul>
                  </div>
                  <div class="col d-flex mt mx-auto justify-content-center ">
                    <PaginationComponent
                      PageCount={this.props.companyJobStore.PageCount}
                      PageNo={this.props.companyJobStore.PageNo}
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
  const { companyOverviewStore, companyJobStore } = state.CompanyPageReducer;
  return {
    studentInfoStore,
    companyOverviewStore,
    companyJobStore,
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
    updateCompanyJobStore: (payload) => {
      dispatch({
        type: updateCompanyJobStore,
        payload,
      });
    },
  };
};
// export default LoginBody;
export default connect(mapStateToProps, mapDispatchToProps)(CompanyJobs);
