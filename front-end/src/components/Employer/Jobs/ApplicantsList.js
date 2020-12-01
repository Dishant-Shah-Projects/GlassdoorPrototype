import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../../../config.js';
import './ApplicantsList.css';
import PaginationComponent from '../../Student/Common/PaginationComponent';
import { hideApplicantsModal, updateApplicantStatus } from '../../../constants/action-types';
import { connect } from 'react-redux';
import { history } from '../../../App';

class ApplicantsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterDropDownOpen: false,
      applicantStatus: 'Submitted',
    };
  }

  onChangeReply = (e) => {
    this.setState({
      Response: e.target.value,
    });
  };

  componentDidMount() {
    console.log('props', this.props);
    this.props.fetchApplicants(this.props.applicantsListStore.PageNo);
  }

  onPageClick = (e) => {
    this.props.fetchApplicants(e.selected);
  };

  openFilterDropDown = () => {
    this.setState({
      filterDropDownOpen: !this.state.filterDropDownOpen,
    });
  };

  updateApplicantStatus = (event, applicantStatusDropDown) => {
    event.preventDefault();
    this.setState({
      applicantStatus: applicantStatusDropDown,
    });
    const payload2 = {
      applicantStatusDropDown,
    };
    this.props.updateApplicantStatus(payload2);
  };

  cancelChanges = () => {
    this.props.hideApplicantsModal();
  };

  saveChanges = (JobId, StudentId) => {
    let appllicantInfo = {
      JobID: JobId,
      StudentID: StudentId,
      Status: this.state.applicantStatus,
    };
    console.log('state', this.state);
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .post(serverUrl + 'company/jobsApplicantUpdate', appllicantInfo)
      .then((response) => {
        if (response.status == 200) {
          this.props.hideApplicantsModal();
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: 'Applicant status not saved',
        });
      });
  };

  handleStudentName = (e, studentId) => {
    localStorage.setItem('StudentId', studentId);
    history.push('/ApplicantProfile');
  };
  render() {
    const len = this.props.applicantsListStore.applicantsList.length;
    console.log('len', len);
    return (
      <article class="mr-0 mr-md-std css-8atqhb ep6ayhb0">
        <div data-test="employer-salaries">
          <h1>Applicants Applied</h1>
          {len > 0
            ? this.props.applicantsListStore.applicantsList.map((listitem) => (
                <div class=" gd-ui-module css-lcvd8h" key={listitem.StudentID}>
                  <div class="row mx-0 py-std css-l8rlna e8dz1vs0" data-test="employer-salary-tile">
                    <div class="col d-flex justify-content-between pl-std">
                      <div>
                        <a
                          href=""
                          onClick={(event) => {
                            this.handleStudentName(event, listitem.StudentID);
                          }}
                        >
                          <h3 class="link m-0 css-1v81xpy e8dz1vs2">{listitem.StudentName}</h3>
                        </a>
                      </div>
                      <div>
                        <div class="css-1uyte9r e8dz1vs1">Resume</div>
                        <a href="">
                          <h3 class="link m-0 css-1v81xpy e8dz1vs2" style={{ fontSize: '12px' }}>
                            {listitem.ResumeURL}
                          </h3>
                        </a>
                      </div>
                      <div>
                        <div class="css-1uyte9r e8dz1vs1"> Cover Letter</div>
                        <a href="">
                          <h3 class="link m-0 css-1v81xpy e8dz1vs2" style={{ fontSize: '12px' }}>
                            {listitem.CoverLetterURL}
                          </h3>
                        </a>
                      </div>
                      <div>
                        <h3 class="m-0 css-1v81xpy e8dz1vs2">Application Status</h3>
                        <div
                          onClick={this.openFilterDropDown}
                          class="ml-xsm search__SearchStyles__searchDropdown css-1ohf0ui"
                        >
                          <select
                            required="true"
                            name="applicantStatus"
                            value={this.state.applicantStatus}
                            onChange={(event) => this.handleOnChange(event)}
                          >
                            <option value="Submitted">Submitted</option>
                            <option value="Reviewed">Reviewed</option>
                            <option value="InitialScreening">InitialScreening</option>
                            <option value="Interviewing">Interviewing</option>
                            <option value="Hired">Hired</option>                            
                          </select>
                          {/* <select
                            data-test="search-bar-context-picker"
                            name="dropdown"
                            style={{ display: 'none' }}
                            aria-label=""
                          >
                            <option value="0"></option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                          </select> */}
                          {/* <div
                            tabindex="0"
                            style={{ width: '132px' }}
                            direction="auto"
                            aria-expanded="false"
                            role="listbox"
                            aria-activedescendant="option_0_c2d71-be5-2d54-33ca-d25a03740ba"
                            aria-label=""
                            class="css-1o72mdj"
                          >
                            <div class="selectedLabel">
                              {this.props.applicantStatusStore.applicantStatusDropDown}
                              <span
                                alt=""
                                style={
                                  this.state.filterDropDownOpen
                                    ? { transform: 'rotate(180deg)' }
                                    : {}
                                }
                                className="SVGInline arrowDown"
                              >
                                <svg
                                  class="SVGInline-svg arrowDown-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M4.4 9.25l7.386 7.523a1 1 0 001.428 0L20.6 9.25c.5-.509.5-1.324 0-1.833a1.261 1.261 0 00-1.8 0l-6.3 6.416-6.3-6.416a1.261 1.261 0 00-1.8 0c-.5.509-.5 1.324 0 1.833z"
                                    fill-rule="evenodd"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            {this.state.filterDropDownOpen ? (
                              <div class="dropdownOptions dropdownCollapsed   ">
                                <div class="dropDownOptionsContainer">
                                  <ul>
                                    <li
                                      onClick={(event) =>
                                        this.updateApplicantStatus(event, 'Submitted')
                                      }
                                      className={`dropdownOption  ${
                                        this.props.applicantStatusStore.applicantStatusDropDown ===
                                        'Submitted'
                                          ? 'checked'
                                          : ''
                                      } `}
                                      role="option"
                                      aria-selected="true"
                                      id="option_0"
                                    >
                                      <div class="checkmark">
                                        <span alt="" class="SVGInline">
                                          <svg
                                            class="SVGInline-svg"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              d="M9.89 15.76l-2.64-2.363a.793.793 0 010-1.157.884.884 0 011.211 0l2.039 1.785 5.039-5.785a.884.884 0 011.21 0 .793.793 0 010 1.157L11.1 15.76a.884.884 0 01-1.21 0z"
                                              fill="currentColor"
                                              fill-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </span>
                                      </div>
                                      <span class="dropdownOptionLabel">Submitted</span>
                                    </li>
                                    <li
                                      onClick={(event) =>
                                        this.updateApplicantStatus(event, 'Reviewed')
                                      }
                                      className={`dropdownOption  ${
                                        this.props.applicantStatusStore.applicantStatusDropDown ===
                                        'Reviewed'
                                          ? 'checked'
                                          : ''
                                      } `}
                                      role="option"
                                      aria-selected="false"
                                      id="option_1"
                                    >
                                      <div class="checkmark">
                                        <span alt="" class="SVGInline">
                                          <svg
                                            class="SVGInline-svg"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              d="M9.89 15.76l-2.64-2.363a.793.793 0 010-1.157.884.884 0 011.211 0l2.039 1.785 5.039-5.785a.884.884 0 011.21 0 .793.793 0 010 1.157L11.1 15.76a.884.884 0 01-1.21 0z"
                                              fill="currentColor"
                                              fill-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </span>
                                      </div>
                                      <span class="dropdownOptionLabel">Reviewed</span>
                                    </li>
                                    <li
                                      onClick={(event) =>
                                        this.updateApplicantStatus(event, 'InitialScreening')
                                      }
                                      className={`dropdownOption  ${
                                        this.props.applicantStatusStore.applicantStatusDropDown ===
                                        'InitialScreening'
                                          ? 'checked'
                                          : ''
                                      } `}
                                      role="option"
                                      aria-selected="false"
                                      id="option_2"
                                    >
                                      <div class="checkmark">
                                        <span alt="" class="SVGInline">
                                          <svg
                                            class="SVGInline-svg"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              d="M9.89 15.76l-2.64-2.363a.793.793 0 010-1.157.884.884 0 011.211 0l2.039 1.785 5.039-5.785a.884.884 0 011.21 0 .793.793 0 010 1.157L11.1 15.76a.884.884 0 01-1.21 0z"
                                              fill="currentColor"
                                              fill-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </span>
                                      </div>
                                      <span class="dropdownOptionLabel">Initial Screening</span>
                                    </li>
                                    <li
                                      onClick={(event) =>
                                        this.updateApplicantStatus(event, 'Interviewing')
                                      }
                                      className={`dropdownOption  ${
                                        this.props.applicantStatusStore.applicantStatusDropDown ===
                                        'Interviewing'
                                          ? 'checked'
                                          : ''
                                      } `}
                                      role="option"
                                      aria-selected="false"
                                      id="option_3"
                                    >
                                      <div class="checkmark">
                                        <span alt="" class="SVGInline">
                                          <svg
                                            class="SVGInline-svg"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              d="M9.89 15.76l-2.64-2.363a.793.793 0 010-1.157.884.884 0 011.211 0l2.039 1.785 5.039-5.785a.884.884 0 011.21 0 .793.793 0 010 1.157L11.1 15.76a.884.884 0 01-1.21 0z"
                                              fill="currentColor"
                                              fill-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </span>
                                      </div>
                                      <span class="dropdownOptionLabel">Interviewing</span>
                                    </li>
                                    <li
                                      onClick={(event) =>
                                        this.updateApplicantStatus(event, 'Hired')
                                      }
                                      className={`dropdownOption  ${
                                        this.props.applicantStatusStore.applicantStatusDropDown === 'Hired'
                                          ? 'checked'
                                          : ''
                                      } `}
                                      role="option"
                                      aria-selected="false"
                                      id="option_3"
                                    >
                                      <div class="checkmark">
                                        <span alt="" class="SVGInline">
                                          <svg
                                            class="SVGInline-svg"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              d="M9.89 15.76l-2.64-2.363a.793.793 0 010-1.157.884.884 0 011.211 0l2.039 1.785 5.039-5.785a.884.884 0 011.21 0 .793.793 0 010 1.157L11.1 15.76a.884.884 0 01-1.21 0z"
                                              fill="currentColor"
                                              fill-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </span>
                                      </div>
                                      <span class="dropdownOptionLabel">Hired</span>
                                    </li>                                    
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              ''
                            )}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3
                    type="button"
                    class="gd-ui-button d-none d-md-inline-block mr-md-sm mb-sm css-3ybntp"
                    data-test="saveChanges"
                    onClick={() => this.saveChanges(listitem.JobID, listitem.StudentID)}
                  >
                    Save
                  </h3>
                </div>
              ))
            : ''}
        </div>
        {len > 0 ? (
          <div className="tbl fill padHorz margVert" id="ResultsFooter">
            <div className="cell middle hideMob padVertSm" data-test="page-x-of-y">
              Page {this.props.applicantsListStore.PageNo + 1} of{' '}
              {this.props.applicantsListStore.PageCount}
            </div>
            <div className="module pt-xxsm">
              <PaginationComponent
                PageCount={this.props.applicantsListStore.PageCount}
                PageNo={this.props.applicantsListStore.PageNo}
                onPageClick={(e) => {
                  this.onPageClick(e);
                }}
              />
            </div>
          </div>
        ) : (
          <p>No Applicants applied yet!</p>
        )}
        <div class="bottomShadow"></div>
        <div class="actionBar">
          <div class="experienceStyle__actionBar___2lnIS">
            <button
              class="gd-ui-button d-none d-md-inline-block mr-md-sm mb-sm css-3ybntp"
              data-test="cancelChanges"
              onClick={() => this.cancelChanges()}
            >
              Close applicants
            </button>
          </div>
        </div>
      </article>
    );
  }
}

//export default ApplicantsList;
const mapStateToProps = (state) => {
  const {
    applicantsModalStore,
    applicantsListStore,
    applicantStatusStore,
  } = state.ApplicantsListModalReducer;
  return {
    applicantsModalStore: applicantsModalStore,
    applicantsListStore: applicantsListStore,
    applicantStatusStore: applicantStatusStore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hideApplicantsModal: (payload) => {
      dispatch({
        type: hideApplicantsModal,
        payload,
      });
    },
    updateApplicantStatus: (payload2) => {
      dispatch({
        type: updateApplicantStatus,
        payload2,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsList);
//export default ApplicantsList;
