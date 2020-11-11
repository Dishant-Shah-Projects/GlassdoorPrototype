import React, { Component } from 'react';
import './JobPreferencePage.css';
import { connect } from 'react-redux';
import { updateStudentProfile } from '../../../../constants/action-types';

class JobPreferencePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: { ...this.props.studentInfoStore.studentProfile },
      showJobTitleInput: false,
      showJobSearchDropdown: false,
      showJobTypeDropdown: false,
      showtargetSalaryInput: false,
      jonStatuses: [
        'Select',
        'Not looking',
        'Not looking, but open',
        'Casually looking',
        'Actively looking',
      ],
    };
  }
  toggleJobSearchDropdown = (event) => {
    event.preventDefault();
    this.setState({
      showJobSearchDropdown: !this.state.showJobSearchDropdown,
    });
  };

  openJobTitleinput = (event) => {
    this.setState({
      showJobTitleInput: true,
    });
  };

  togglesJobTypeDropdown = (event) => {
    event.preventDefault();
    this.setState({
      showJobTypeDropdown: !this.state.showJobTypeDropdown,
    });
  };

  openTargetSalaryinput = (event) => {
    this.setState({
      showtargetSalaryInput: !this.state.showtargetSalaryInput,
    });
  };

  updateJobStatus = (event, JobStatus) => {
    event.preventDefault();
    const student = { ...this.props.studentInfoStore.studentProfile };
    student.JobStatus = JobStatus;
    this.updateStudentProfile(student);
  };

  onChangeJobTitleHandler = (event) => {
    const studentProfile = { ...this.props.studentInfoStore.studentProfile };
    studentProfile.PreferredJobTitle = event.target.value;
    const payload = {
      studentProfile,
    };
    this.props.updateStudentProfile(payload);
  };

  removeJobTitle = (event) => {
    event.preventDefault();
    const student = { ...this.props.studentInfoStore.studentProfile };
    student.PreferredJobTitle = '';
    this.updateStudentProfile(student);
  };

  saveJobTitle = (event) => {
    event.preventDefault();
    if (this.props.studentInfoStore.studentProfile.PreferredJobTitle.length === 0) {
    } else {
      const student = { ...this.props.studentInfoStore.studentProfile };
      this.updateStudentProfile(student);
    }
  };

  updateStudentProfile = (student) => {
    console.log(student);
    this.setState({
      showJobSearchDropdown: false,
      showJobTitleInput: false,
    });
  };
  render() {
    return (
      <div class="col-12 col-md-8">
        <div>
          <div
            id="PreferencesPage"
            class="module mb-md PreferencesStyles__preferencesModule___1FDO2"
          >
            <div class="d-flex flex-column flex-md-row-reverse flex-wrap align-items-start align-items-md-center justify-content-md-between PreferencesStyles__visibility___hswA8">
              <div class="mb-xxsm p-xsm PreferencesStyles__visibilityIndicator___2Nfyv">
                Viewable only by you
              </div>
              <h1 class="strong m-0 align-self-start align-self-md-center PreferencesStyles__preferencesHeader___30Q2a">
                Job Preferences
              </h1>
            </div>
            <p style={{ margin: '16px 0' }}>
              Tell us what you’re looking for in a job and we’ll use this information to recommend
              the best jobs to you. This information will not be visible to employers.
            </p>
            <div class="relative" id="JobSearchStatus">
              <div>
                <p class="mt-xl">
                  <strong>Where are you in your job search?</strong>
                </p>
                <div class="col-md-6 px-0">
                  <div class=" css-1ohf0ui">
                    <label for="" class="css-1opum1l">
                      <span>Select Job Search Status</span>
                    </label>
                    <select
                      data-test="jobSearchStatus"
                      name="dropdown"
                      aria-label="Select Job Search Status"
                      style={{ display: 'none' }}
                    >
                      <option value=""></option>
                      <option value="NOT_LOOKING"></option>
                      <option value="OPEN"></option>
                      <option value="CASUALLY_LOOKING"></option>
                      <option value="ACTIVELY_LOOKING"></option>
                    </select>
                    <div
                      direction="auto"
                      aria-expanded="true"
                      role="listbox"
                      aria-activedescendant="option_0_eb1284a-6177-7ae-5d30-fe3c3ea56c5"
                      aria-label="Select Job Search Status"
                      class="css-1vf6lcl"
                      tabindex="0"
                    >
                      <div onClick={this.toggleJobSearchDropdown} class="selectedLabel">
                        {this.props.studentInfoStore.studentProfile.JobStatus}
                        {this.state.showJobSearchDropdown ? (
                          <span alt="" class="SVGInline arrowUp">
                            <svg
                              class="SVGInline-svg arrowUp-svg"
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
                        ) : (
                          <span alt="" class="SVGInline arrowDown">
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
                        )}
                      </div>
                      <div
                        class={
                          this.state.showJobSearchDropdown
                            ? 'dropdownOptions dropdownExpanded animated  '
                            : 'dropdownOptions dropdownCollapsed animated  '
                        }
                      >
                        <div class="dropDownOptionsContainer">
                          <ul>
                            {this.state.jonStatuses.map((status) => (
                              <li
                                onClick={(event) => this.updateJobStatus(event, status)}
                                key={status}
                                class={
                                  this.props.studentInfoStore.studentProfile.JobStatus === status
                                    ? 'dropdownOption checked  '
                                    : 'dropdownOption'
                                }
                                role="option"
                                aria-selected="false"
                                id="option_1_eb1284a-6177-7ae-5d30-fe3c3ea56c5"
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
                                <span class="dropdownOptionLabel">{status}</span>
                              </li>
                            ))}
                            {/* <li
                              class="dropdownOption  checked "
                              role="option"
                              aria-selected="true"
                              id="option_0_eb1284a-6177-7ae-5d30-fe3c3ea56c5"
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
                              <span class="dropdownOptionLabel">Select</span>
                            </li>
                            <li
                              class="dropdownOption   "
                              role="option"
                              aria-selected="false"
                              id="option_1_eb1284a-6177-7ae-5d30-fe3c3ea56c5"
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
                              <span class="dropdownOptionLabel">Not looking</span>
                            </li>
                            <li
                              class="dropdownOption   "
                              role="option"
                              aria-selected="false"
                              id="option_2_eb1284a-6177-7ae-5d30-fe3c3ea56c5"
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
                              <span class="dropdownOptionLabel">Not looking, but open</span>
                            </li>
                            <li
                              class="dropdownOption   "
                              role="option"
                              aria-selected="false"
                              id="option_3_eb1284a-6177-7ae-5d30-fe3c3ea56c5"
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
                              <span class="dropdownOptionLabel">Casually looking</span>
                            </li>
                            <li
                              class="dropdownOption   "
                              role="option"
                              aria-selected="false"
                              id="option_4_eb1284a-6177-7ae-5d30-fe3c3ea56c5"
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
                              <span class="dropdownOptionLabel">Actively looking</span>
                            </li>
                           */}{' '}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative" id="IdealJob">
              <div>
                <p class="mt-xl mb-xs">
                  <strong>What job titles are you looking for?</strong>
                </p>
                {this.state.showJobTitleInput ? (
                  <div class="d-flex">
                    <div class="idealJobStyle__adjustWidth___IiDqt">
                      <div class="pb-sm css-1ohf0ui">
                        <label
                          for="Autocomplete-b1e701-0266-54c-2cec-650f106534c7"
                          class="css-1opum1l"
                        >
                          <span>Job Title</span>
                        </label>
                        <div
                          aria-expanded="false"
                          role="combobox"
                          aria-autocomplete="list"
                          class="css-1xtvih1"
                        >
                          <div class=" css-1ohf0ui">
                            <div class="input-wrapper css-q444d9">
                              <input
                                onChange={this.onChangeJobTitleHandler}
                                placeholder="Job Title"
                                autocomplete="off"
                                name="Autocomplete"
                                id="Autocomplete-b1e701-0266-54c-2cec-650f106534c7"
                                data-test=""
                                aria-label="Job Title"
                                class="css-ofiv3k"
                                value={this.props.studentInfoStore.studentProfile.PreferredJobTitle}
                              />
                            </div>
                          </div>
                          <div>
                            <div data-test="FilterChips"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pl-sm link idealJobStyle__addIcon___22lnv" data-test="saveIcon">
                      <span onClick={(event) => this.saveJobTitle(event)} class="SVGInline">
                        <svg
                          class="SVGInline-svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <circle id="prefix__circle" cx="9" cy="9" r="9"></circle>
                            <mask id="prefix__plus" x="0" y="0" width="18" height="18" fill="#fff">
                              <use href="#prefix__circle"></use>
                            </mask>
                          </defs>
                          <g stroke="#1861BF" fill="none" fill-rule="evenodd">
                            <use
                              mask="url(#prefix__plus)"
                              stroke-width="2"
                              href="#prefix__circle"
                            ></use>
                            <path d="M9 4.757v8.486M4.757 9h8.486" stroke-linejoin="round"></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div class="idealJobStyle__chips___1iw1E" data-test="idealJobList">
                    {this.props.studentInfoStore.studentProfile.PreferredJobTitle.length > 0 ? (
                      <div class="chip idealJobStyle__chip___3I3VC">
                        <span class="pr-sm">
                          {this.props.studentInfoStore.studentProfile.PreferredJobTitle}
                        </span>
                        <span data-test="removeJobTitle" class="remove pl-sm pointer link">
                          <i onClick={this.removeJobTitle} class="icon-cross"></i>
                        </span>
                      </div>
                    ) : (
                      ''
                    )}
                    <div class="idealJobStyle__chips___1iw1E" data-test="idealJobList">
                      <button
                        onClick={this.openJobTitleinput}
                        class="gd-ui-button idealJobStyle__addEntryIcon___2IO95 d-flex justify-content-center align-items-center css-1c2vj07"
                        data-test="addIcon"
                      >
                        {this.props.studentInfoStore.studentProfile.PreferredJobTitle.length > 0 ? (
                          <span class="px-xxsm">+ Change Job Title</span>
                        ) : (
                          <span class="px-xxsm">+ Add Job Title</span>
                        )}
                      </button>
                    </div>
                  </div>
                )}
                <div class="col-md-6 pt px-0">
                  <p class="mt-sm">
                    <strong>What types of jobs are you open to?</strong>
                  </p>
                  <div class=" css-1ohf0ui">
                    <label for="" class="css-1opum1l">
                      <span>Job Types</span>
                    </label>
                    <select
                      multiple=""
                      data-test=""
                      name="dropdown"
                      aria-label="Job Types"
                      style={{ display: 'none' }}
                    >
                      <option value="FULL_TIME"></option>
                      <option value="PART_TIME"></option>
                      <option value="CONTRACT"></option>
                      <option value="INTERNSHIP"></option>
                      <option value="TEMPORARY"></option>
                      <option value="APPRENTICESHIP"></option>
                      <option value="ENTRY_LEVEL"></option>
                    </select>
                    <div
                      tabindex="0"
                      direction="auto"
                      aria-expanded="false"
                      role="listbox"
                      aria-activedescendant=""
                      aria-label="Job Types"
                      class="css-1kd4gul"
                    >
                      <div onClick={this.togglesJobTypeDropdown} class="selectedLabel">
                        {this.state.student.JobType.length === 0
                          ? 'Job Types'
                          : this.state.student.JobType.length === 1
                          ? this.state.student.JobType
                          : 'Job Types(' + this.state.student.JobType.length + ')'}
                        {this.state.showJobTypeDropdown ? (
                          <span alt="" class="SVGInline arrowUp">
                            <svg
                              class="SVGInline-svg arrowUp-svg"
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
                        ) : (
                          <span alt="" class="SVGInline arrowDown">
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
                        )}
                      </div>
                      <div
                        class={
                          this.state.showJobTypeDropdown
                            ? 'dropdownOptions dropdownExpanded animated  '
                            : 'dropdownOptions dropdownCollapsed animated  '
                        }
                        // class="dropdownOptions dropdownCollapsed animated  "
                      >
                        <div class="dropDownOptionsContainer">
                          <ul>
                            {this.props.masterData.JobType.map((jobType) => (
                              <li
                                class={
                                  this.state.student.JobType.includes(jobType)
                                    ? 'dropdownOption multiple checked '
                                    : 'dropdownOption multiple '
                                }
                                // class="dropdownOption multiple checked "
                                role="option"
                                aria-selected="false"
                                id="option_0_5ce00f5-d42b-7743-7783-fbb8b31485e"
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
                                <span class="dropdownOptionLabel">{jobType}</span>
                              </li>
                            ))}
                            {/* <li
                              class="dropdownOption multiple  "
                              role="option"
                              aria-selected="false"
                              id="option_0_5ce00f5-d42b-7743-7783-fbb8b31485e"
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
                              <span class="dropdownOptionLabel">Full-time</span>
                            </li>
                            <li
                              class="dropdownOption multiple  "
                              role="option"
                              aria-selected="false"
                              id="option_1_5ce00f5-d42b-7743-7783-fbb8b31485e"
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
                              <span class="dropdownOptionLabel">Part-time</span>
                            </li>
                            <li
                              class="dropdownOption multiple  "
                              role="option"
                              aria-selected="false"
                              id="option_2_5ce00f5-d42b-7743-7783-fbb8b31485e"
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
                              <span class="dropdownOptionLabel">Contract</span>
                            </li>
                            <li
                              class="dropdownOption multiple  "
                              role="option"
                              aria-selected="false"
                              id="option_3_5ce00f5-d42b-7743-7783-fbb8b31485e"
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
                              <span class="dropdownOptionLabel">Internship</span>
                            </li>
                            <li
                              class="dropdownOption multiple  "
                              role="option"
                              aria-selected="false"
                              id="option_4_5ce00f5-d42b-7743-7783-fbb8b31485e"
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
                              <span class="dropdownOptionLabel">Temporary</span>
                            </li>
                            <li
                              class="dropdownOption multiple  "
                              role="option"
                              aria-selected="false"
                              id="option_5_5ce00f5-d42b-7743-7783-fbb8b31485e"
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
                              <span class="dropdownOptionLabel">Apprenticeship</span>
                            </li>
                            <li
                              class="dropdownOption multiple  "
                              role="option"
                              aria-selected="false"
                              id="option_6_5ce00f5-d42b-7743-7783-fbb8b31485e"
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
                              <span class="dropdownOptionLabel">Entry-level</span>
                            </li>
                           */}
                          </ul>
                          <div class="scrollBar">
                            <div
                              class="scrollThumb"
                              style={{ height: '137px', marginTop: '4px' }}
                            ></div>
                          </div>
                        </div>
                        <div class="dropdownFooter">
                          <button class="gd-ui-button buttonClear css-1ffg0gd">Clear</button>
                          <button class="gd-ui-button buttonApply css-1iue7ku">Apply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="DesiredSalary" class="col-md-6 p-0">
              <div class="desiredSalaryStyle__desiredSalary___2WVNO">
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mt-xl mb-sm">
                    <strong>What is your target salary range?</strong>
                  </p>
                  <div class="desiredSalaryStyle__editIcons___32777"></div>
                </div>
                <div>
                  {this.state.showtargetSalaryInput ? (
                    <span>
                      <div class="">
                        <div class="py-sm">
                          <h2 class="mt-0 mt-xsm">Add Salary Range</h2>
                          <div class="d-flex justify-content-center no-gutters mb-md">
                            <div class="col-6 pr-md">
                              <div class=" css-1ohf0ui">
                                <label for="" class="css-1opum1l">
                                  <span>From</span>
                                </label>
                                <div class="input-wrapper css-q444d9">
                                  <input
                                    data-test="payRangeMin"
                                    maxlength="400"
                                    aria-label=""
                                    class="css-ofiv3k"
                                    value=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="formButtons">
                            <button
                              onClick={this.openTargetSalaryinput}
                              class="gd-ui-button mr-sm css-3ybntp"
                              data-test="cancelChanges"
                            >
                              Cancel
                            </button>
                            <button class="gd-ui-button  css-uk8w9o" data-test="saveChanges">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </span>
                  ) : (
                    <a onClick={this.openTargetSalaryinput}>
                      <strong>+ Add Target Range</strong>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            id="CompanyPreferencesPage"
            class="module mb-md PreferencesStyles__preferencesModule___1FDO2"
          >
            <div class="d-flex flex-column flex-md-row-reverse flex-wrap align-items-start align-items-md-center justify-content-md-between PreferencesStyles__visibility___hswA8">
              <div class="mb-xxsm p-xsm PreferencesStyles__visibilityIndicator___2Nfyv">
                Viewable by employers
              </div>
              <h1 class="strong m-0 align-self-start align-self-md-center PreferencesStyles__preferencesHeader___30Q2a">
                Company Preferences
              </h1>
            </div>
            <p>We use this information to help find you the best company matches.</p>
            <div class="relative" id="PreferredLocations">
              <div class="pb-0">
                <p class="mt-xl mb-sm">
                  <strong>Where would you prefer to work?</strong>
                </p>

                <div id="JobPreferences" class="row">
                  <div class="pb-sm pb-md-0 pr-md-lg mr-lg-xl ml-xxsm">
                    <div class="d-flex align-items-center">
                      <div
                        class=" gd-ui-checkbox css-1i7401q"
                        role="checkbox"
                        aria-checked="true"
                        tabindex="0"
                        data-test="openToRelocation"
                      >
                        <label>
                          <input type="checkbox" data-test="" />
                          <div class="checkboxBox"></div>
                          <div class="checkboxLabel">I'm open to relocation</div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center ml-xxsm">
                    <div
                      class=" gd-ui-checkbox css-13md0bs"
                      role="checkbox"
                      aria-checked="false"
                      tabindex="0"
                      data-test="openToRemoteWork"
                    >
                      <label>
                        <input type="checkbox" data-test="" />
                        <div class="checkboxBox"></div>
                        <div class="checkboxLabel">I want to work remotely</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default JobPreferencePage;

const mapStateToProps = (state) => {
  const { studentInfoStore } = state.StudentCompleteInfoReducer;
  const { masterData } = state.staticDataReducer;

  return {
    studentInfoStore,
    masterData,
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(JobPreferencePage);
