import React, { Component } from 'react';
import './SalaryForm.css';

class SalaryForm extends Component {
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
          <div></div>
          <div
            class="gdGrid article-aside salary-survey-page"
            data-brandviews="PAGE:n=mz-survey-salaryPage:eid=6036"
          >
            <article class="module">
              <div class="d-flex align-items-center salary-survey-header mb-std">
                <h1 class="tight"> Add a Salary</h1>
              </div>
              <p>Your anonymous salary will help other job seekers.</p>
              <div>
                <form class="stacked fill salary-survey" autocomplete="off">
                  <h2>Salary Details*</h2>
                  <div class="base-pay">
                    <div style={{ position: 'relative' }}>
                      <div class="mb-std css-1ohf0ui">
                        <div class="input-wrapper css-q444d9">
                          <input
                            id="basePayAmount"
                            name="form.basePayAmount"
                            placeholder="Enter Base Pay"
                            type="number"
                            data-test=""
                            aria-label=""
                            class="css-1sk6eli"
                            value=""
                          />
                        </div>
                      </div>
                      <span class="minor subtle">USD per year</span>
                    </div>
                    <div class="button-set ">
                      <div>
                        <div class="selected" tabindex="0">
                          <label for="form.basePayPeriod_ANNUAL">Per Year</label>
                          <input
                            class="hidden"
                            type="radio"
                            name="form.basePayPeriod"
                            id="form.basePayPeriod_ANNUAL"
                            value="ANNUAL"
                            checked=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="button-set ">
                    <label>Do you get bonuses, tips, or sales commission?*</label>
                  </div>
                  <div class="">
                    <div class="additional-comp">
                      <div class="d-flex flex-column flex-md-row align-items-center mb-std">
                        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mr-md-std bonusInputContainer">
                          <label for="cashBonusAmount">Cash Bonus</label>
                          <div class="bonusNumberInput css-1ohf0ui">
                            <div class="input-wrapper css-q444d9">
                              <input
                                id="cashBonusAmount"
                                name="form.cashBonusAmount"
                                placeholder="#"
                                type="number"
                                data-test=""
                                aria-label=""
                                class="css-1sk6eli"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        <div class="bonusDropdown mt-std mt-md-0 css-1ohf0ui">
                          <div
                            tabindex="0"
                            direction="auto"
                            aria-expanded="false"
                            role="listbox"
                            aria-activedescendant="option_0_cashBonusPeriod"
                            aria-label=""
                            class="css-e0ra1d"
                          >
                            <div class="selectedLabel">Per Year</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>Job Details*</h2>
                  <div class=" css-1ohf0ui">
                    <label
                      for="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                      class="css-1opum1l"
                    >
                      <span>Title*</span>
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
                            name="salaryUIData.state.salaryReview.userEnteredOccupation"
                            id="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                            data-test=""
                            aria-label="Title*"
                            class="css-1sk6eli"
                            value=""
                          />
                        </div>
                      </div>
                      <ul class="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                  <div class=" css-1ohf0ui">
                    <label
                      for="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                      class="css-1opum1l"
                    >
                      <span>Title*</span>
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
                            name="salaryUIData.state.salaryReview.userEnteredOccupation"
                            id="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                            data-test=""
                            aria-label="Title*"
                            class="css-1sk6eli"
                            value=""
                          />
                        </div>
                      </div>
                      <ul class="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                  <div class=" css-1ohf0ui">
                    <label
                      for="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                      class="css-1opum1l"
                    >
                      <span>Title*</span>
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
                            name="salaryUIData.state.salaryReview.userEnteredOccupation"
                            id="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                            data-test=""
                            aria-label="Title*"
                            class="css-1sk6eli"
                            value=""
                          />
                        </div>
                      </div>
                      <ul class="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                  <div class=" css-1ohf0ui">
                    <label
                      for="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                      class="css-1opum1l"
                    >
                      <span>Title*</span>
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
                            name="salaryUIData.state.salaryReview.userEnteredOccupation"
                            id="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                            data-test=""
                            aria-label="Title*"
                            class="css-1sk6eli"
                            value=""
                          />
                        </div>
                      </div>
                      <ul class="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                  <div class=" css-1ohf0ui">
                    <label
                      for="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                      class="css-1opum1l"
                    >
                      <span>Title*</span>
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
                            name="salaryUIData.state.salaryReview.userEnteredOccupation"
                            id="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                            data-test=""
                            aria-label="Title*"
                            class="css-1sk6eli"
                            value=""
                          />
                        </div>
                      </div>
                      <ul class="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                  <div class=" css-1ohf0ui">
                    <label
                      for="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                      class="css-1opum1l"
                    >
                      <span>Title*</span>
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
                            name="salaryUIData.state.salaryReview.userEnteredOccupation"
                            id="salaryUIData.state.salaryReview.userEnteredOccupation-ed3f62f-0130-8627-ab63-258c7681fc6c"
                            data-test=""
                            aria-label="Title*"
                            class="css-1sk6eli"
                            value=""
                          />
                        </div>
                      </div>
                      <ul class="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="sunset-employer undefined">
                      <input type="hidden" name="employerId" value="6036" />
                      <div class="ajax-input">
                        <label>Employer Name*</label>
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
                                  placeholder="Employer"
                                  autocomplete="off"
                                  name="salaryEmployerName"
                                  id="salaryEmployerName-f530a1-3350-fd6c-db14-ab464cbd1fe"
                                  data-test=""
                                  aria-label=""
                                  class="css-1sk6eli"
                                  value="Amazon"
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
                    </div>
                  </div>
                  <div class="optional-employer">
                    <div>
                      <input type="hidden" name="specificEmployer" value="true" />
                    </div>
                    <div></div>
                  </div>
                  <input type="hidden" name="_dummy" />
                  <div class="submitBtn">
                    <button type="submit">Submit Salary</button>
                  </div>
                </form>
              </div>
            </article>
          </div>
        </div>
      </main>
    );
  }
}

export default SalaryForm;
