import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LowerNavBarOther, updateSalaryList } from '../../../constants/action-types';
import Navbar from '../Common/Navbar';
import PaginationComponent from '../Common/PaginationComponent';
import SalaryCard from './SalaryCard';
import './salaryList.css';

class salaryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  commonFetch = (PageNo = 0) => {
    let payload = {
      SalarySearchList: [{ name: 'pr' }, { name: 'pr' }, { name: 'pr' }, { name: 'pr' }],
      PageNo,
      PageCount: Math.ceil(116 / 10),
      Totalcount: 116,

      // PageCount: Math.ceil(response.data.Totalcount / 3),
    };
    this.props.updateSalaryList(payload);
  };

  componentDidMount() {
    this.commonFetch();
  }

  onPageClick = (e) => {
    // console.log('Page Clicked:', e.selected);
    this.commonFetch(e.selected);
  };
  render() {
    this.props.LowerNavBarOther();
    return (
      <body className="main flex loggedIn lang-en en-US hollywood  _initOk noTouch desktop">
        {<Navbar />}
        <div class="pageContentWrapper ">
          <div id="PageContent">
            <div id="PageBodyContents" class="meat">
              <div class="pageInsideContent cf">
                <div id="nodeReplace">
                  <main class="gdGrid">
                    <div id="EI-Srch">
                      <div
                        id="SalarySearchResults"
                        class="d-flex flex-column flex-md-row mx-md-std mt-std"
                      >
                        <article
                          style={{ width: '67%' }}
                          class="mr-0 mr-md-std css-8atqhb ep6ayhb0"
                        >
                          <div data-test="employer-salaries">
                            <div class=" gd-ui-module css-1mzux4t">
                              {localStorage.getItem('SearchString') ? (
                                <h1>{localStorage.getItem('SearchString')} Salaries</h1>
                              ) : (
                                ''
                              )}
                              <div data-test="" class=" e1liezln0 css-1gjvczy">
                                <div class="textAndIconContainer">
                                  <div class="iconContainer">
                                    <span alt="btn-icon" class="SVGInline">
                                      <svg
                                        class="SVGInline-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                      >
                                        <g fill="none" fill-rule="evenodd">
                                          <circle
                                            cx="16"
                                            cy="16"
                                            r="10.667"
                                            fill="#00A1DF"
                                          ></circle>
                                          <path
                                            fill="#FFF"
                                            d="M14.667 16a1.333 1.333 0 112.666 0v5.333a1.333 1.333 0 11-2.666 0V16zM16 13.333a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666z"
                                          ></path>
                                        </g>
                                      </svg>
                                    </span>
                                  </div>
                                  <div class="text">
                                    {localStorage.getItem('SearchString') ? (
                                      <strong class="title">
                                        Did you mean job titles matching{' '}
                                        {localStorage.getItem('SearchString')}?
                                      </strong>
                                    ) : (
                                      <strong class="title">Top salary searches </strong>
                                    )}
                                  </div>
                                </div>
                              </div>
                              {this.props.salaryListStore.SalarySearchList.map(() => (
                                <SalaryCard />
                              ))}{' '}
                            </div>
                          </div>

                          <div className="module pt-xxsm">
                            <PaginationComponent
                              PageCount={this.props.salaryListStore.PageCount}
                              PageNo={this.props.salaryListStore.PageNo}
                              onPageClick={(e) => {
                                this.onPageClick(e);
                              }}
                            />
                          </div>
                        </article>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

// export default salaryList;
const mapStateToProps = (state) => {
  const { salaryListStore } = state.SalaryListReducer;

  return {
    salaryListStore,
  };
};
// export default CompanySearchResults;
const mapDispatchToProps = (dispatch) => {
  return {
    LowerNavBarOther: (payload) => {
      dispatch({
        type: LowerNavBarOther,
        payload,
      });
    },
    updateSalaryList: (payload) => {
      dispatch({
        type: updateSalaryList,
        payload,
      });
    },
  };
};

// export default LoginBody;
export default connect(mapStateToProps, mapDispatchToProps)(salaryList);
