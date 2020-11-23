import React, { Component } from 'react';
import PaginationComponent from '../../Common/PaginationComponent';
import './CompanySalaries.css';

class CompanySalaries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article id="MainCol">
        <div id="nodeReplace">
          <main class="gdGrid">
            <div data-test="ei-salaries">
              <div class="eiSalaries__EISalariesStyle__salariesContainer module ">
                <div id="SalariesRef">
                  <div data-test="salary-list-items">
                    <div
                      class="row no-gutters mx-0 py align-items-center css-1u4lhyp"
                      data-test="salary-row"
                      data-brandviews="BRAND:n=salaries-salariesByCompany:eid=9079"
                    >
                      <div class="col-md-6">
                        <div class="d-flex">
                          <div class="undefined mr-sm">
                            <a href="/Salary/Google-Salaries-E9079.htm">
                              <span class="common__SqLogoStyle__sqLogo common__SqLogoStyle__sm tighten">
                                <img
                                  alt="Google"
                                  class="lazy lazy-loaded sm"
                                  src="https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png"
                                />
                              </span>
                            </a>
                          </div>
                          <div class="" data-test="job-info">
                            <p class="m-0">
                              <a href="/Salary/Google-Software-Engineer-San-Jose-Salaries-EJI_IE9079.0,6_KO7,24_IL.25,33_IM761.htm">
                                Software Engineer
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-2 d-none d-md-flex flex-row justify-content-end">
                        <strong>$137,541</strong>/yr
                      </div>
                      <div class="col-3 offset-1 d-none d-md-block">
                        <div class="common__RangeBarStyle__rangeBar undefined undefined ">
                          <div class="d-none d-md-block">
                            <div
                              class="common__RangeBarStyle__meanIndicator"
                              style={{ left: '68px' }}
                            ></div>
                            <div class="common__RangeBarStyle__bar"></div>
                          </div>
                          <div class="common__RangeBarStyle__values common__flex__justifySpaceBetween common__flex__container ">
                            <span>$13K</span>
                            <span>$304K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{' '}
                </div>
                <PaginationComponent
                  // PageCount={this.props.companyReviewsStore.PageCount}
                  // PageNo={this.props.companyReviewsStore.PageNo}
                  onPageClick={(e) => {
                    this.onPageClick(e);
                  }}
                />{' '}
              </div>
            </div>
          </main>
        </div>
      </article>
    );
  }
}

export default CompanySalaries;
