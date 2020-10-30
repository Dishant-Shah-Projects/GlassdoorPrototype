import React, { Component } from 'react';
import './Body.css';
//import LeftBlock from './LeftBlock.js';
//import RightBlock from './RightBlock.js';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="row flex-column flex-md-row p-0 px-md-lg py-md-xxl">
        <div class="col-12 col-md-4 pr-md-xxl">
          <div class="d-none d-md-block">
            <div data-test="profilePhoto" id="ProfilePhoto">
              <div class="profilePhotoStyle__profilePhoto___CTVQw">
                <div class="d-inline-flex justify-content-start align-items-center profilePhotoStyle__photoContainer___3itOq">
                  <div class="mr-xsm">
                    <span class="SVGInline profilePhotoStyle__icon___1H_01">
                      <svg
                        class="SVGInline-svg profilePhotoStyle__icon___1H_01-svg"
                        style={{ width: '55px', height: '55px' }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 7a3 3 0 103 3 3 3 0 00-3-3zm0 9a6 6 0 00-5.33 3.25 9 9 0 0010.66 0A6 6 0 0012 16zm0-14A10 10 0 112 12 10 10 0 0112 2z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="profilePhotoBadge">
                    <div class="CompletionBadgeStyles__badge___18L6x">
                      <span class="SVGInline d-flex align-items-center">
                        <svg
                          class="SVGInline-svg d-flex-svg align-items-center-svg"
                          style={{ width: '24px', height: '24px' }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 20 24"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <g stroke-width="2">
                              <path
                                stroke="#0CAA41"
                                d="M16.2 3H3.8a.797.797 0 00-.8.8v12.248a.8.8 0 00.38.68l7.04 3.836 6.2-3.835a.8.8 0 00.38-.68V3.8a.797.797 0 00-.8-.8z"
                                stroke-linejoin="square"
                                fill="#FFF"
                              ></path>
                              <path
                                stroke="#FFF"
                                d="M16.2 1H3.8c-.773 0-1.473.313-1.98.82A2.791 2.791 0 001 3.8v12.248a2.8 2.8 0 001.327 2.382l6.2 3.835a2.798 2.798 0 002.946 0l6.2-3.835A2.8 2.8 0 0019 16.048V3.8c0-.773-.313-1.473-.82-1.98A2.791 2.791 0 0016.2 1z"
                              ></path>
                            </g>
                            <path
                              d="M10.982 5.463L10.303 10h3.121c.556 0 .738.363.411.805l-4.372 5.91c-.328.445-.528.357-.448-.178L9.694 12h-3.12c-.556 0-.739-.363-.412-.805l4.372-5.91c.329-.445.528-.357.448.178z"
                              fill="#0CAA41"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="profilePhotoStyle__caption___HtLE-">
                    <span>Add a photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navigationStyle__nav___1PF4F gd-ui-tab css-o9yci5">
            <ul role="tablist">
              <li role="tab" class="active css-1h7a53u" aria-selected="true" tabindex="0">
                <div class="customItem css-wks0vk">
                  <div class="d-flex flex-row justify-content-start align-items-center">
                    Profile
                  </div>
                </div>
              </li>
              <li role="tab" class=" css-1h7a53u" aria-selected="false" tabindex="0">
                <div class="customItem css-wks0vk">
                  <div class="d-flex flex-row justify-content-start align-items-center">
                    Reviews
                  </div>
                </div>
              </li>
              <li role="tab" class=" css-1h7a53u" aria-selected="false" tabindex="0">
                <div class="customItem css-wks0vk">
                  <div class="d-flex flex-row justify-content-start align-items-center">
                    Job Postings
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div>
            <div id="ProfilePageBannerContainer"></div>
            <div class="d-flex flex-column-reverse flex-md-column">
              <section
                class="SectionStyles__section___3ZANh px-std px-md-0 mt-lg mt-md-0"
                data-test="ProfileInfoSection"
                id="ProfileInfo"
              >
                <div class="profileInfoStyle__profileInfo___2aFZe">
                  <div
                    class="SectionHeaderStyles__sectionHeader___3b_50 d-flex align-items-center no-gutters"
                    data-test="sectionHeader"
                  >
                    <div class="d-flex justify-content-start align-items-center">
                      <div class="d-flex col no-gutters flex-column">
                        <div class="d-block d-md-none">
                          <div class="d-flex justify-content-between align-items-center mb-sm SectionHeaderStyles__iconGroup___1ZPaV">
                            <div data-test="profilePhoto" id="ProfilePhoto">
                              <div class="profilePhotoStyle__profilePhoto___CTVQw">
                                <div class="d-inline-flex justify-content-start align-items-center profilePhotoStyle__photoContainer___3itOq">
                                  <div class="mr-xsm">
                                    <span class="SVGInline profilePhotoStyle__icon___1H_01">
                                      <svg
                                        class="SVGInline-svg profilePhotoStyle__icon___1H_01-svg"
                                        style={{ width: '55px', height: '55px' }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          d="M12 7a3 3 0 103 3 3 3 0 00-3-3zm0 9a6 6 0 00-5.33 3.25 9 9 0 0010.66 0A6 6 0 0012 16zm0-14A10 10 0 112 12 10 10 0 0112 2z"
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  </div>
                                  <div class="profilePhotoBadge">
                                    <div class="CompletionBadgeStyles__badge___18L6x">
                                      <span class="SVGInline d-flex align-items-center">
                                        <svg
                                          class="SVGInline-svg d-flex-svg align-items-center-svg"
                                          style={{ width: '24px', height: '24px' }}
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 20 24"
                                        >
                                          <g fill="none" fill-rule="evenodd">
                                            <g stroke-width="2">
                                              <path
                                                stroke="#0CAA41"
                                                d="M16.2 3H3.8a.797.797 0 00-.8.8v12.248a.8.8 0 00.38.68l7.04 3.836 6.2-3.835a.8.8 0 00.38-.68V3.8a.797.797 0 00-.8-.8z"
                                                stroke-linejoin="square"
                                                fill="#FFF"
                                              ></path>
                                              <path
                                                stroke="#FFF"
                                                d="M16.2 1H3.8c-.773 0-1.473.313-1.98.82A2.791 2.791 0 001 3.8v12.248a2.8 2.8 0 001.327 2.382l6.2 3.835a2.798 2.798 0 002.946 0l6.2-3.835A2.8 2.8 0 0019 16.048V3.8c0-.773-.313-1.473-.82-1.98A2.791 2.791 0 0016.2 1z"
                                              ></path>
                                            </g>
                                            <path
                                              d="M10.982 5.463L10.303 10h3.121c.556 0 .738.363.411.805l-4.372 5.91c-.328.445-.528.357-.448-.178L9.694 12h-3.12c-.556 0-.739-.363-.412-.805l4.372-5.91c.329-.445.528-.357.448.178z"
                                              fill="#0CAA41"
                                            ></path>
                                          </g>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="profilePhotoStyle__caption___HtLE-">
                                    <span>Add a photo</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex col justify-content-between align-items-center no-gutters SectionHeaderStyles__headingGroup___b6Lyf">
                          <div class="d-flex justify-content-start align-items-center SectionHeaderStyles__nameGroup___2N2pK SectionHeaderStyles__visible___3a7mt">
                            <h3 class="m-0 mr-sm SectionHeaderStyles__name___saD9S" title="Wipro">
                              Wipro Overview
                            </h3>
                          </div>
                          <div class="SectionHeaderStyles__iconGroup___1ZPaV">
                            <div class="d-none d-md-block mr-md-sm">
                              <div class=" css-1ohf0ui">
                                <select
                                  data-test="privacySettingsUserType"
                                  name="dropdown"
                                  aria-label=""
                                  style={{ display: 'none' }}
                                >
                                  <option value="Yourself"></option>
                                  <option value="Employers"></option>
                                </select>
                                <div
                                  tabindex="0"
                                  direction="auto"
                                  aria-expanded="false"
                                  role="listbox"
                                  aria-activedescendant="option_0_8e3641-410b-5278-8608-2dba4b404576"
                                  aria-label=""
                                  class="css-1yd5hg8"
                                >
                                  <div class="selectedLabel">
                                    <span>
                                      View as: <b>Yourself</b>
                                    </span>
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
                                  <div class="dropdownOptions dropdownCollapsed   ">
                                    <div class="dropDownOptionsContainer">
                                      <ul>
                                        <li
                                          class="dropdownOption  checked "
                                          role="option"
                                          aria-selected="true"
                                          id="option_0_8e3641-410b-5278-8608-2dba4b404576"
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
                                          <span class="dropdownOptionLabel">
                                            <span>
                                              View as: <b>Yourself</b>
                                            </span>
                                          </span>
                                        </li>
                                        <li
                                          class="dropdownOption   "
                                          role="option"
                                          aria-selected="false"
                                          id="option_1_8e3641-410b-5278-8608-2dba4b404576"
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
                                          <span class="dropdownOptionLabel">
                                            <span>
                                              View as: <b>Employer</b>
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button class="gd-ui-button d-none d-md-block m-0 p-0 SectionHeaderStyles__editIcon___LCEeu css-1c2vj07">
                              <span class="SVGInline">
                                <svg
                                  class="SVGInline-svg"
                                  style={{ width: '24px', height: '24px' }}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <g fill="currentColor" fill-rule="evenodd">
                                    <path
                                      id="prefix__icon-edit"
                                      d="M14.775 6.202l2.99 2.99-11.81 11.663a.499.499 0 01-.352.144H3.498a.5.5 0 01-.5-.5v-2.342a.5.5 0 01.147-.354l11.63-11.6zM16.19 4.79l1.641-1.638a.502.502 0 01.707 0l2.3 2.298a.5.5 0 010 .707l-.003.003-1.648 1.627L16.19 4.79z"
                                    ></path>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="profileInfoStyle__profileInfoContainer___26tEl">
                    <div class="d-none justify-content-center align-items-center profileInfoStyle__loading___1UFs_">
                      <div
                        class="ui-spinner hi css-1ln3gi6"
                        color="#0caa41"
                        size="48"
                        stroke-width="2"
                      >
                        <span class="SVGInline">
                          <svg
                            class="SVGInline-svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id="greena" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="currentColor"></stop>
                                <stop
                                  offset="100%"
                                  stop-color="currentColor"
                                  stop-opacity=".4"
                                ></stop>
                              </linearGradient>
                              <linearGradient id="greenb" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop
                                  offset="0%"
                                  stop-color="currentColor"
                                  stop-opacity=".4"
                                ></stop>
                                <stop
                                  offset="66%"
                                  stop-color="currentColor"
                                  stop-opacity="0"
                                ></stop>
                              </linearGradient>
                            </defs>
                            <g fill="none">
                              <path
                                d="M21 12a9 9 0 00-18 0"
                                stroke="currentColor"
                                stroke-linecap="round"
                              ></path>
                              <path d="M3 12a9 9 0 009 9" stroke="url(#greena)"></path>
                              <path d="M12 21a9 9 0 009-9" stroke="url(#greenb)"></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="row mb-lg profileInfoStyle__profileInfoMain___Y8O5Z profileInfoStyle__visible___1bdIC">
                      <div class="col-12 col-sm-6 col-lg-4 p-0">
                        <ul class="css-155za0w row px-0 m-0">
                          <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pr-xxsm">
                            <label class="css-1f0lhlt ecl3kjh0">Website:</label>
                            <a
                              href="
                              www.wipro.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="css-1hg9omi"
                              data-test="employer-website"
                            >
                              
www.wipro.com
                            </a>
                          </li>
                          <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pl-sm-xxsm">
                            <label class="css-1f0lhlt ecl3kjh0">Headquarters:</label>
                            <div data-test="employer-headquarters">
Bangalore, India </div>
                          </li>
                          <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pr-sm-xxsm">
                            <label class="css-1f0lhlt ecl3kjh0">Size:</label>
                            <div data-test="employer-size">10000+  Employees</div>
                          </li>
                          <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pl-sm-xxsm">
                            <label class="css-1f0lhlt ecl3kjh0">Founded:</label>
                            <div data-test="employer-founded">1945 </div>
                          </li>
                          <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pr-sm-xxsm">
                            <label class="css-1f0lhlt ecl3kjh0">Type:</label>
                            <div data-test="employer-type">Company - Public </div>
                          </li>
                          <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pl-sm-xxsm">
                            <label class="css-1f0lhlt ecl3kjh0">Industry:</label>
                            <div data-test="employer-industry">
IT Services </div>
                          </li>
                          <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pr-sm-xxsm">
                            <label class="css-1f0lhlt ecl3kjh0">Revenue:</label>
                            <div data-test="employer-revenue">$5 to $10 billion (USD)</div>
                          </li>
                          <li class="d-flex align-items-center col-12 col-sm-6 p-0 m-0 pb-sm pr-sm-xxsm">
                            <label class="css-1f0lhlt ecl3kjh0">CEO:</label>
                            <div data-test="employer-revenue">Thierry Delaporte (USD)</div>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4 p-0">
                        <div class="d-sm-block d-none">
                          <div class="no-gutters mb-md-xxsm d-flex justify-content-start align-items-start profileInfoStyle__entryItem___1hOfs">
                            <div class="d-flex justify-content-center align-items-center mr-xsm profileInfoStyle__default___3mWZn profileInfoStyle__entryIcon___2D6u_">
                              <span class="SVGInline">
                                <svg
                                  class="SVGInline-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                >
                                  <g fill="currentColor" fill-rule="evenodd">
                                    <path
                                      id="prefix__icon-phone"
                                      d="M7 4a3.13 3.13 0 01.6.06l.27.07 1 5.07-1.51.85a1 1 0 00-.43 1.26 10.94 10.94 0 005.81 5.81 1.09 1.09 0 00.39.08 1 1 0 00.87-.51l.86-1.51 5.06.95a2.5 2.5 0 01.07.26A3.31 3.31 0 0120 17a3 3 0 01-3 3A13 13 0 014 7a3 3 0 013-3m0-1a4 4 0 00-4 4 14 14 0 0014 14 4 4 0 004-4 4.17 4.17 0 00-.08-.8 3.82 3.82 0 00-.33-.95l-6.3-1.19-1.21 2.14a10 10 0 01-5.28-5.28l2.13-1.2-1.18-6.31a3.82 3.82 0 00-1-.33A4.17 4.17 0 007 3z"
                                    ></path>
                                  </g>
                                </svg>
                              </span>
                            </div>
                            <div class="profileInfoStyle__default___3mWZn profileInfoStyle__wrap___102WU">
                              669-294-6359
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex no-gutters justify-content-center align-items-start profileInfoStyle__actions___3-CvK">
                    <div class="col-4 px-xxsm d-flex flex-column justify-content-center align-items-center">
                      <button class="gd-ui-button m-0 mb-xsm p-0 d-flex justify-content-center align-items-center profileInfoStyle__actionBtn___2ectR css-1c2vj07">
                        <div class="d-flex mt-xsm justify-content-center align-items-center">
                          <div class="d-block d-md-none profileInfoStyle__actionIcon___iWiGy">
                            <span class="SVGInline">
                              <svg
                                class="SVGInline-svg"
                                style={{ width: '24px', height: '24px' }}
                                height="24"
                                width="24"
                                viewBox="0 0 32 40"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g fill="currentColor" fill-rule="evenodd">
                                  <path
                                    id="prefix__icon-update-2"
                                    d="M22.002 5.133C27.865 7.493 32 13.206 32 19.879c0 8.33-6.441 15.163-14.642 15.847l2.592 2.577a.99.99 0 01.115 1.268l-.115.138a1.005 1.005 0 01-1.276.115l-.138-.115-4.243-4.215a.99.99 0 01-.08-1.318l.103-.112 4.22-4.192a1.004 1.004 0 011.414 0 .99.99 0 010 1.405l-2.454 2.44C24.524 32.975 30 27.063 30 19.879c0-5.55-3.27-10.342-7.999-12.575V5.133zM14.292.29A1.005 1.005 0 0115.57.176l.138.115 4.243 4.215a.99.99 0 01.116 1.27l-.13.15-4.229 4.202-.138.115a1.006 1.006 0 01-1.138 0l-.138-.115-.116-.137a.99.99 0 010-1.13l.116-.138L17.03 6c-.34-.025-.684-.037-1.031-.037-7.732 0-14 6.23-14 13.915 0 6.304 4.217 11.629 10 13.34L12 35.282C5.1 33.517 0 27.29 0 19.88 0 11.096 7.163 3.976 16 3.976l.598.01-2.305-2.29A.99.99 0 0114.177.43l.116-.138z"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </div>
                          <div class="d-none d-md-block profileInfoStyle__actionIcon___iWiGy">
                            <span class="SVGInline">
                              <svg
                                class="SVGInline-svg"
                                style={{ width: '36px', height: '36px' }}
                                height="24"
                                width="24"
                                viewBox="0 0 32 40"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g fill="currentColor" fill-rule="evenodd">
                                  <path
                                    id="prefix__icon-update-2"
                                    d="M22.002 5.133C27.865 7.493 32 13.206 32 19.879c0 8.33-6.441 15.163-14.642 15.847l2.592 2.577a.99.99 0 01.115 1.268l-.115.138a1.005 1.005 0 01-1.276.115l-.138-.115-4.243-4.215a.99.99 0 01-.08-1.318l.103-.112 4.22-4.192a1.004 1.004 0 011.414 0 .99.99 0 010 1.405l-2.454 2.44C24.524 32.975 30 27.063 30 19.879c0-5.55-3.27-10.342-7.999-12.575V5.133zM14.292.29A1.005 1.005 0 0115.57.176l.138.115 4.243 4.215a.99.99 0 01.116 1.27l-.13.15-4.229 4.202-.138.115a1.006 1.006 0 01-1.138 0l-.138-.115-.116-.137a.99.99 0 010-1.13l.116-.138L17.03 6c-.34-.025-.684-.037-1.031-.037-7.732 0-14 6.23-14 13.915 0 6.304 4.217 11.629 10 13.34L12 35.282C5.1 33.517 0 27.29 0 19.88 0 11.096 7.163 3.976 16 3.976l.598.01-2.305-2.29A.99.99 0 0114.177.43l.116-.138z"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </button>
                      <div class="d-flex justify-content-center align-items-start">
                        <div class="profileInfoStyle__caption___7rzry">Update Profile</div>
                      </div>
                    </div>
                    <div class="col-4 px-xxsm d-flex flex-column justify-content-center align-items-center">
                      <button class="gd-ui-button m-0 mb-xsm p-0 d-flex justify-content-center align-items-center profileInfoStyle__actionBtn___2ectR css-1c2vj07">
                        <div class="d-flex mt-xsm justify-content-center align-items-center profileInfoStyle__actionIcon___iWiGy">
                          <div class="d-block d-md-none profileInfoStyle__actionIcon___iWiGy">
                            <span class="SVGInline">
                              <svg
                                class="SVGInline-svg"
                                style={{ width: '24px', height: '24px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M13.29 3L14 4.88l.16.43.42.16.29.12.42.19.41-.2 1.8-.86 1.83 1.83-.86 1.8-.2.41.19.42c0 .09.08.19.11.28l.17.43.43.15 1.83.66v2.59l-1.88.71-.43.15-.17.43c0 .09-.07.18-.11.27l-.19.42.2.42.86 1.8-1.83 1.83-1.8-.86-.41-.2-.42.18c-.09.05-.19.08-.28.12l-.43.17-.15.43-.67 1.84H10.7l-.7-1.88-.15-.43-.43-.17-.28-.11-.42-.19-.41.2-1.8.86-1.79-1.83.86-1.8.19-.41-.18-.42-.12-.29-.16-.42-.44-.11L3 13.29V10.7l1.87-.7.44-.15.16-.43.12-.28.18-.42-.19-.42-.86-1.75 1.83-1.83 1.8.86.41.19.42-.18.28-.12.43-.16.11-.44.7-1.87h2.59M12 16a4 4 0 10-4-4 4 4 0 004 4m1.29-14H10.7a1 1 0 00-.94.67L9.1 4.54l-.32.13L7 3.82a.94.94 0 00-.43-.1 1 1 0 00-.73.28L4 5.84A1 1 0 003.82 7l.85 1.79-.13.33-1.88.66a1 1 0 00-.66.92v2.59a1 1 0 00.66.94l1.88.67c0 .11.09.21.13.32L3.82 17A1 1 0 004 18.15L5.84 20a1 1 0 00.71.3 1.08 1.08 0 00.43-.1l1.8-.86.32.13.66 1.88a1 1 0 00.94.67h2.59a1 1 0 00.94-.67l.67-1.88.32-.13 1.8.86a1.12 1.12 0 00.43.1 1 1 0 00.71-.3L20 18.15a1 1 0 00.18-1.15l-.86-1.8.14-.32 1.88-.67a1 1 0 00.66-.94V10.7a1 1 0 00-.66-.94l-1.88-.66c-.05-.11-.09-.22-.14-.32L20.18 7A1 1 0 0020 5.84L18.16 4a1 1 0 00-.71-.29 1 1 0 00-.43.1l-1.8.86-.32-.14-.67-1.87a1 1 0 00-.94-.66M12 15a3 3 0 113-3 3 3 0 01-3 3"
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div class="d-none d-md-block profileInfoStyle__actionIcon___iWiGy">
                            <span class="SVGInline">
                              <svg
                                class="SVGInline-svg"
                                style={{ width: '36px', height: '36px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M13.29 3L14 4.88l.16.43.42.16.29.12.42.19.41-.2 1.8-.86 1.83 1.83-.86 1.8-.2.41.19.42c0 .09.08.19.11.28l.17.43.43.15 1.83.66v2.59l-1.88.71-.43.15-.17.43c0 .09-.07.18-.11.27l-.19.42.2.42.86 1.8-1.83 1.83-1.8-.86-.41-.2-.42.18c-.09.05-.19.08-.28.12l-.43.17-.15.43-.67 1.84H10.7l-.7-1.88-.15-.43-.43-.17-.28-.11-.42-.19-.41.2-1.8.86-1.79-1.83.86-1.8.19-.41-.18-.42-.12-.29-.16-.42-.44-.11L3 13.29V10.7l1.87-.7.44-.15.16-.43.12-.28.18-.42-.19-.42-.86-1.75 1.83-1.83 1.8.86.41.19.42-.18.28-.12.43-.16.11-.44.7-1.87h2.59M12 16a4 4 0 10-4-4 4 4 0 004 4m1.29-14H10.7a1 1 0 00-.94.67L9.1 4.54l-.32.13L7 3.82a.94.94 0 00-.43-.1 1 1 0 00-.73.28L4 5.84A1 1 0 003.82 7l.85 1.79-.13.33-1.88.66a1 1 0 00-.66.92v2.59a1 1 0 00.66.94l1.88.67c0 .11.09.21.13.32L3.82 17A1 1 0 004 18.15L5.84 20a1 1 0 00.71.3 1.08 1.08 0 00.43-.1l1.8-.86.32.13.66 1.88a1 1 0 00.94.67h2.59a1 1 0 00.94-.67l.67-1.88.32-.13 1.8.86a1.12 1.12 0 00.43.1 1 1 0 00.71-.3L20 18.15a1 1 0 00.18-1.15l-.86-1.8.14-.32 1.88-.67a1 1 0 00.66-.94V10.7a1 1 0 00-.66-.94l-1.88-.66c-.05-.11-.09-.22-.14-.32L20.18 7A1 1 0 0020 5.84L18.16 4a1 1 0 00-.71-.29 1 1 0 00-.43.1l-1.8.86-.32-.14-.67-1.87a1 1 0 00-.94-.66M12 15a3 3 0 113-3 3 3 0 01-3 3"
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </button>
                      <div class="d-flex justify-content-center align-items-start">
                        <div class="profileInfoStyle__caption___7rzry">Manage Privacy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section
              class="SectionStyles__section___3ZANh px-std px-md-0 mt-0"
              data-test="AboutMeSection"
              id="AboutCompany"
            >
              <div
                class="SectionHeaderStyles__sectionHeader___3b_50 d-flex align-items-center no-gutters SectionHeaderStyles__bordered___3i8xM"
                data-test="sectionHeader"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <h3 data-test="profileHeading">About Company</h3>
                </div>
              </div>
              <p data-test="description" class="m-0 preWrap" style={{fontFamily: "'Lato', sans-serif"}}>
                Wipro Limited (NYSE: WIT, BSE: 507685, NSE: WIPRO) is a leading global information
                technology, consulting and business process services company. We harness the power
                of cognitive computing, hyper-automation, robotics, cloud, analytics and emerging
                technologies to help our clients adapt to the digital world and make them
                successful. A company recognized globally for its comprehensive portfolio of
                services, a strong commitment to sustainability and good corporate citizenship, we
                have over 160,000 dedicated employees serving clients across six continents.
                Together, we discover ideas and connect the dots to build a better and a bold new
                future.
              </p>
            </section>
            <section
              class="SectionStyles__section___3ZANh px-std px-md-0 mt-0"
              data-test="MissionSection"
              id="CompanyMission"
            >
              <div
                class="SectionHeaderStyles__sectionHeader___3b_50 d-flex align-items-center no-gutters SectionHeaderStyles__bordered___3i8xM"
                data-test="sectionHeader"
              >
                <div class="d-flex justify-content-start align-items-center">
                  <h3 data-test="profileHeading">Mission</h3>
                </div>
              </div>
              <p data-test="description" class="m-0 preWrap" style={{fontFamily: "'Lato', sans-serif"}}>
                The Spirit of Wipro is the core of Wipro. These are our Values. It is about who we
                are. It is our character. It embraces what we must aspire to be. It is the
                indivisible synthesis of the four values. The Spirit is a beacon. It is what gives
                us direction and a clear sense of purpose. 1. Be Passionate about Client's Success
                2. Be Global and Responsible 3. Treat Each Person with Respect 4. Unyielding
                Integrity in Everything We Do
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
