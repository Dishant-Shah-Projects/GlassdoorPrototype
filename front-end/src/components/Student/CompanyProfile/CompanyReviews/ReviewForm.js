import React, { Component } from 'react';
import './ReviewForm.css';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main id="mount">
        <div>
          <header id="header">
            <div class="background">
              <nav>
                <div class="logoContainer">
                  <a class="logo green " aria-label="Go To Glassdoor homepage"></a>
                </div>
              </nav>
            </div>
          </header>
          <div class="article-aside gdGrid">
            <article class="module">
              <div class="d-flex align-items-end">
                <h1 class="tight">Rate a Company</h1>
              </div>
              <p class="subtle">
                <span>
                  It only takes a minute! And your anonymous review will help other job seekers.
                </span>
              </p>
              <div class="survey-two-column">
                <div>
                  <img
                    src="https://media.glassdoor.com/sqlm/6036/amazon-squarelogo-1552847650117.png"
                    alt="Amazon Logo"
                    class="square-logo sm "
                    data-original="https://media.glassdoor.com/sqlm/6036/amazon-squarelogo-1552847650117.png"
                  />
                </div>
                <div>
                  <form class="stacked-label employer-survey">
                    <div class="sunset-employer undefined">
                      <input type="hidden" value="" />
                      <div class="ajax-input">
                        <label>Company</label>
                        <div class="ajax-input sunsetEmployerDropdown css-1ohf0ui">
                          <div
                            aria-expanded="false"
                            role="combobox"
                            aria-autocomplete="list"
                            class="css-1xtvih1"
                          >
                            <div class=" css-1ohf0ui">
                              <div class="input-wrapper css-q444d9">
                                <input
                                  placeholder="Company"
                                  autocomplete="off"
                                  name="employerName"
                                  id="employerName-f088e4-77f-51ef-16fe-c21ddc34c32"
                                  data-test=""
                                  aria-label=""
                                  class="css-1sk6eli"
                                  value="Amazon"
                                />
                              </div>
                            </div>
                            <ul class="suggestions up">
                              <li>
                                <div class="" role="presentation">
                                  <span class="logo">
                                    <img
                                      src="https://media.glassdoor.com/sqlm/6036/amazon-squarelogo-1552847650117.png"
                                      alt="Amazon"
                                    />
                                  </span>
                                  <span>
                                    <span class="suggestionLabel">
                                      <span class="query">Amazon</span>
                                    </span>
                                    <span class="website">www.amazon.com</span>
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div class="" role="presentation">
                                  <span class="logo">
                                    <img
                                      src="https://media.glassdoor.com/sqlm/1324363/amazon-flex-squarelogo-1502775346513.png"
                                      alt="Amazon Flex"
                                    />
                                  </span>
                                  <span>
                                    <span class="suggestionLabel">
                                      <span class="query">Amazon</span> Flex
                                    </span>
                                    <span class="website">flex.amazon.com</span>
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div class="" role="presentation">
                                  <span class="logo">
                                    <img
                                      src="https://media.glassdoor.com/sqlm/267709/lab126-squarelogo.png"
                                      alt="Amazon Lab126"
                                    />
                                  </span>
                                  <span>
                                    <span class="suggestionLabel">
                                      <span class="query">Amazon</span> Lab126
                                    </span>
                                    <span class="website">www.lab126.com</span>
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div class="" role="presentation">
                                  <span class="logo">
                                    <img
                                      src="https://media.glassdoor.com/sqlm/1125115/amazon-robotics-squarelogo-1488995396779.png"
                                      alt="Amazon Robotics"
                                    />
                                  </span>
                                  <span>
                                    <span class="suggestionLabel">
                                      <span class="query">Amazon</span> Robotics
                                    </span>
                                    <span class="website">www.amazonrobotics.com</span>
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div class="" role="presentation">
                                  <span class="logo">
                                    <img
                                      src="https://media.glassdoor.com/sqlm/1919947/amazon-prime-now-squarelogo-1523253274644.png"
                                      alt="Amazon Prime Now"
                                    />
                                  </span>
                                  <span>
                                    <span class="suggestionLabel">
                                      <span class="query">Amazon</span> Prime Now
                                    </span>
                                    <span class="website">primenow.amazon.com</span>
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div class="" role="presentation">
                                  <span class="logo"></span>
                                  <span>
                                    <span class="suggestionLabel">
                                      <span class="query">Amazon</span> Logistics
                                    </span>
                                    <span class="website">www.amazonlogisticsgroup.com</span>
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div class="" role="presentation">
                                  <span class="logo">
                                    <img
                                      src="https://media.glassdoor.com/sqlm/870167/federal-university-of-amazonas-squarelogo-1568287909705.png"
                                      alt="UFAM - Universidade Federal do Amazonas"
                                    />
                                  </span>
                                  <span>
                                    <span class="suggestionLabel">
                                      UFAM - Universidade Federal do{' '}
                                      <span class="query">Amazon</span>as
                                    </span>
                                    <span class="website">ufam.edu.br</span>
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div class="" role="presentation">
                                  <span class="logo">
                                    <img
                                      src="https://media.glassdoor.com/sqlm/2485969/polícia-militar-do-estado-do-amazonas-squarelogo-1553483566273.png"
                                      alt="Polícia Militar do Estado do Amazonas (PMAM)"
                                    />
                                  </span>
                                  <span>
                                    <span class="suggestionLabel">
                                      Polícia Militar do Estado do <span class="query">Amazon</span>
                                      as (PMAM)
                                    </span>
                                    <span class="website">pm.am.gov.br</span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <div>
                              <div data-test="FilterChips"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{' '}
                    <div class="star-rating-input">
                      <label>Overall Rating*</label>
                      <div class="selected">
                        <label for="questionIdToAnswerMap[1]_1">
                          <span>Very Dissatisfied</span>
                        </label>
                        <input
                          class="hidden"
                          type="radio"
                          name="questionIdToAnswerMap[1]"
                          id="questionIdToAnswerMap[1]_1"
                          value="1"
                        />
                      </div>
                      <div class="selected">
                        <label for="questionIdToAnswerMap[1]_2">
                          <span>Dissatisfied</span>
                        </label>
                        <input
                          class="hidden"
                          type="radio"
                          name="questionIdToAnswerMap[1]"
                          id="questionIdToAnswerMap[1]_2"
                          value="2"
                        />
                      </div>
                      <div class="selected">
                        <label for="questionIdToAnswerMap[1]_3">
                          <span>Neutral ("OK")</span>
                        </label>
                        <input
                          class="hidden"
                          type="radio"
                          name="questionIdToAnswerMap[1]"
                          id="questionIdToAnswerMap[1]_3"
                          value="3"
                        />
                      </div>
                      <div class="">
                        <label for="questionIdToAnswerMap[1]_4">
                          <span>Satisfied</span>
                        </label>
                        <input
                          class="hidden"
                          type="radio"
                          name="questionIdToAnswerMap[1]"
                          id="questionIdToAnswerMap[1]_4"
                          value="4"
                        />
                      </div>
                      <div class="">
                        <label for="questionIdToAnswerMap[1]_5">
                          <span>Very Satisfied</span>
                        </label>
                        <input
                          class="hidden"
                          type="radio"
                          name="questionIdToAnswerMap[1]"
                          id="questionIdToAnswerMap[1]_5"
                          value="5"
                        />
                      </div>
                    </div>{' '}
                    <div>
                      <div class="button-set ">
                        <label>Are you a current or former employee?</label>
                        <div>
                          <div class="selected" tabindex="0">
                            <label for="employerUIData.state.employerReview.currentJob_true">
                              Current
                            </label>
                            <input
                              class="hidden"
                              type="radio"
                              name="employerUIData.state.employerReview.currentJob"
                              id="employerUIData.state.employerReview.currentJob_true"
                              value="true"
                              checked=""
                            />
                          </div>
                          <div class="" tabindex="0">
                            <label for="employerUIData.state.employerReview.currentJob_false">
                              Former
                            </label>
                            <input
                              class="hidden"
                              type="radio"
                              name="employerUIData.state.employerReview.currentJob"
                              id="employerUIData.state.employerReview.currentJob_false"
                              value="false"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="year-select d-none">
                        <div class="mt-std ajax-input css-1ohf0ui">
                          <label for="" class="css-1opum1l">
                            <span>Last Year at Employer*</span>
                          </label>
                          <select
                            data-test=""
                            name="employerUIData.state.employerReview.jobEndingYear"
                            aria-label="Last Year at Employer*"
                            style={{ display: 'none' }}
                          >
                            <option value="2020"></option>
                            <option value="2019"></option>
                            <option value="2018"></option>
                            <option value="2017"></option>
                            <option value="2016"></option>
                          </select>
                          <div
                            tabindex="0"
                            direction="auto"
                            aria-expanded="false"
                            role="listbox"
                            aria-activedescendant=""
                            aria-label="Last Year at Employer*"
                            class="css-f8260b"
                          >
                            <div class="selectedLabel">
                              Select
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
                            </div>
                            <div class="dropdownOptions dropdownCollapsed animated  ">
                              <div class="dropDownOptionsContainer">
                                <ul>
                                  <li
                                    class="dropdownOption   "
                                    role="option"
                                    aria-selected="false"
                                    id="option_0_jobEndingYear"
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
                                    <span class="dropdownOptionLabel">2020</span>
                                  </li>
                                  <li
                                    class="dropdownOption   "
                                    role="option"
                                    aria-selected="false"
                                    id="option_1_jobEndingYear"
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
                                    <span class="dropdownOptionLabel">2019</span>
                                  </li>
                                  <li
                                    class="dropdownOption   "
                                    role="option"
                                    aria-selected="false"
                                    id="option_2_jobEndingYear"
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
                                    <span class="dropdownOptionLabel">2018</span>
                                  </li>
                                  <li
                                    class="dropdownOption   "
                                    role="option"
                                    aria-selected="false"
                                    id="option_3_jobEndingYear"
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
                                    <span class="dropdownOptionLabel">2017</span>
                                  </li>
                                  <li
                                    class="dropdownOption   "
                                    role="option"
                                    aria-selected="false"
                                    id="option_4_jobEndingYear"
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
                                    <span class="dropdownOptionLabel">2016</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{' '}
                    <div class="mt-std ajax-input css-1ohf0ui">
                      <label for="" class="css-1opum1l">
                        <span>Employment Status*</span>
                      </label>
                      <select
                        data-test=""
                        name="dropdown"
                        aria-label="Employment Status*"
                        style={{ display: 'none' }}
                      >
                        <option value="REGULAR"></option>
                        <option value="PART_TIME"></option>
                        <option value="CONTRACT"></option>
                        <option value="INTERN"></option>
                        <option value="FREELANCE"></option>
                      </select>
                      <div
                        tabindex="0"
                        direction="auto"
                        aria-expanded="false"
                        role="listbox"
                        aria-activedescendant="option_0_a035ce-f3ba-4d0f-3d51-a328ed00a84"
                        aria-label="Employment Status*"
                        class="css-e0ra1d"
                      >
                        <div class="selectedLabel">
                          Full Time
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
                        </div>
                        <div class="dropdownOptions dropdownCollapsed animated  ">
                          <div class="dropDownOptionsContainer">
                            <ul>
                              <li
                                class="dropdownOption  checked "
                                role="option"
                                aria-selected="true"
                                id="option_0_a035ce-f3ba-4d0f-3d51-a328ed00a84"
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
                                <span class="dropdownOptionLabel">Full Time</span>
                              </li>
                              <li
                                class="dropdownOption   "
                                role="option"
                                aria-selected="false"
                                id="option_1_a035ce-f3ba-4d0f-3d51-a328ed00a84"
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
                                <span class="dropdownOptionLabel">Part Time</span>
                              </li>
                              <li
                                class="dropdownOption   "
                                role="option"
                                aria-selected="false"
                                id="option_2_a035ce-f3ba-4d0f-3d51-a328ed00a84"
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
                                class="dropdownOption   "
                                role="option"
                                aria-selected="false"
                                id="option_3_a035ce-f3ba-4d0f-3d51-a328ed00a84"
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
                                <span class="dropdownOptionLabel">Intern</span>
                              </li>
                              <li
                                class="dropdownOption   "
                                role="option"
                                aria-selected="false"
                                id="option_4_a035ce-f3ba-4d0f-3d51-a328ed00a84"
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
                                <span class="dropdownOptionLabel">Freelance</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="jobTitleFull">
                      <input type="hidden" name="jobTitleId" value="4279" />
                      <div class=" css-1ohf0ui">
                        <label
                          for="jobTitle-7327738-af11-0ba3-d651-5ccb8dbe41b"
                          class="css-1opum1l"
                        >
                          <span>Your Job Title at Amazon</span>
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
                                placeholder="Title"
                                autocomplete="off"
                                name="jobTitle"
                                id="jobTitle-7327738-af11-0ba3-d651-5ccb8dbe41b"
                                data-test=""
                                aria-label="Your Job Title at Amazon"
                                class="css-1sk6eli"
                                value="Software Engineer"
                              />
                            </div>
                          </div>
                          <ul class="suggestions down"></ul>
                          <div>
                            <div data-test="FilterChips"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fill css-1ohf0ui">
                      <label for="reviewTitle" class="css-1opum1l">
                        <span>Review Headline*</span>
                      </label>
                      <div class="input-wrapper css-q444d9">
                        <input
                          id="reviewTitle"
                          name="questionIdToTextAnswerMap[200]"
                          data-test=""
                          aria-label=""
                          class="css-1sk6eli"
                          value="job"
                        />
                      </div>
                    </div>
                    <div class=" css-1ohf0ui">
                      <label for="upsides" class="css-1opum1l">
                        <span>Pros*</span>
                      </label>
                      <div class="input-wrapper css-q444d9">
                        <textarea
                          id="upsides"
                          name="questionIdToTextAnswerMap[100]"
                          placeholder="Share some of the best reasons to work at Amazon"
                          data-test=""
                          aria-label=""
                          class="css-14wuk54"
                        ></textarea>
                      </div>
                      <div data-test="helper" class="css-1pakod1">
                        5 word minimum
                      </div>
                    </div>
                    <div class=" css-1ohf0ui">
                      <label for="downsides" class="css-1opum1l">
                        <span>Cons*</span>
                      </label>
                      <div class="input-wrapper css-q444d9">
                        <textarea
                          id="downsides"
                          name="questionIdToTextAnswerMap[101]"
                          placeholder="Share some of the downsides of working at Amazon"
                          data-test=""
                          aria-label=""
                          class="css-14wuk54"
                        ></textarea>
                      </div>
                      <div data-test="helper" class="css-1pakod1">
                        5 word minimum
                      </div>
                    </div>
                    <div class="slide open">
                      <hr />
                      <h2>
                        Ratings <span class="minor subtle">(Optional)</span>
                      </h2>
                      <div data-test="rateCeo">
                        <div class="rating-item-group thumb-rating-item-group ">
                          <label>Rate CEO Job Performance, Jeff Bezos</label>
                          <div>
                            <div class="items">
                              <div class="">
                                <input
                                  type="radio"
                                  name="questionIdToAnswerMap[300]"
                                  aria-label="questionIdToAnswerMap[300]_1"
                                  value="1"
                                />
                              </div>
                              <div class="">
                                <input
                                  type="radio"
                                  name="questionIdToAnswerMap[300]"
                                  aria-label="questionIdToAnswerMap[300]_3"
                                  value="3"
                                />
                              </div>
                            </div>
                            <div class="opinion-text minor subtle center">
                              <i>&nbsp;</i>
                            </div>
                          </div>
                        </div>
                        <input type="hidden" name="state.selectedCeoId" value="86913" />
                        <hr />
                      </div>
                      <div
                        class="rating-item-group thumb-rating-item-group-no-neutral "
                        aria-label="questionIdToAnswerMap[16]"
                      >
                        <label for="questionIdToAnswerMap[16]">Recommend to a friend?</label>
                        <div>
                          <div class="items">
                            <div class="">
                              <input
                                type="radio"
                                name="questionIdToAnswerMap[16]"
                                aria-label="questionIdToAnswerMap[16]_1"
                                value="1"
                              />
                            </div>
                            <div class="">
                              <input
                                type="radio"
                                name="questionIdToAnswerMap[16]"
                                aria-label="questionIdToAnswerMap[16]_2"
                                value="2"
                              />
                            </div>
                          </div>
                          <div class="opinion-text minor subtle center">
                            <i>&nbsp;</i>
                          </div>
                        </div>
                      </div>
                      <div class="hidden">
                        <p class="subtle">Custom Amazon Questions</p>
                      </div>
                    </div>
                    <div class="submitBtn">
                      <button class="gd-ui-button  css-8i7bc2" type="submit">
                        Submit Review
                      </button>
                    </div>{' '}
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    );
  }
}

export default ReviewForm;
