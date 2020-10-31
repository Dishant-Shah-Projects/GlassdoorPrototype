import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LowerNavBarOther, updateSalaryList } from '../../../constants/action-types';
import Navbar from '../Common/Navbar';
import PaginationComponent from '../Common/PaginationComponent';
import './interviewList.css';

class interviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
                      <div id="SearchResults">
                        <div id="InterviewsSearchResults">
                          <div class="flex-aside">
                            <div id="MainCol" class="mainCol">
                              <div class="module padHorzLg padVertLg">
                                <div id="InterviewQuestionList" class="module">
                                  <header class="lined">
                                    <h2 class=""> amazon Interview Questions</h2>
                                  </header>
                                  <div class="interviewQuestionsList lockedInterviewQuestions">
                                    <div
                                      id="InterviewQuestionResult_1"
                                      class="interviewQuestionWrapper padVertLg"
                                    >
                                      <div
                                        class="interviewQuestion noPad "
                                        data-brandviews="BRAND:n=hub-interviewQuestion:eid=6036:uid=94575"
                                      >
                                        <div class="tbl fill">
                                          <div class="row">
                                            <div class="cell logo padRtLg hideHH">
                                              <a
                                                href="/Interview/Amazon-Interview-Questions-E6036.htm"
                                                class="sqLogoLink"
                                              >
                                                <span class="sqLogo tighten smSqLogo">
                                                  <img
                                                    data-original="https://media.glassdoor.com/sqls/6036/amazon-squarelogo-1552847650117.png"
                                                    data-original-2x="https://media.glassdoor.com/sqlm/6036/amazon-squarelogo-1552847650117.png"
                                                    src="https://media.glassdoor.com/sqls/6036/amazon-squarelogo-1552847650117.png"
                                                    class="lazy lazy-loaded"
                                                    data-retina-ok="true"
                                                    alt=" Logo"
                                                    title=""
                                                    style={{ opacity: '1' }}
                                                  />
                                                </span>
                                              </a>
                                            </div>
                                            <div class="cell">
                                              <div class="tbl fill margBotSm">
                                                <div class="row">
                                                  <h3 class="cell p">
                                                    <span class="authorInfo">
                                                      <a href="/Interview/Amazon-Senior-Product-Manager-Interview-Questions-EI_IE6036.0,6_KO7,29.htm">
                                                        Senior Product Manager at Amazon was
                                                        asked...
                                                      </a>
                                                    </span>
                                                  </h3>
                                                  <div class="cell alignRt noWrap minor hideHH">
                                                    {' '}
                                                    Aug 2, 2010
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="question margTopSm">
                                                <table class="interviewQuestionText">
                                                  <tbody>
                                                    <tr>
                                                      <td>
                                                        <p class="questionText h3">
                                                          {' '}
                                                          The manager of component 'A' says his
                                                          functionality is more important than that
                                                          of component 'B.' The manager of component
                                                          'B' says his is more important than that
                                                          of component 'A.' You can only implement
                                                          one A or B, but not both - which do you
                                                          choose to implement.
                                                        </p>
                                                        <a
                                                          class="userResponseLink margTop block hiddenLink mmLink "
                                                          href="/Interview/The-manager-of-component-A-says-his-functionality-is-more-important-than-that-of-component-B-The-manager-of-component-QTN_94575.htm"
                                                        >
                                                          13 Answers
                                                          <i class="caret-blue margLtSm"></i>
                                                        </a>
                                                        <div
                                                          class="userResponses margTopLg borderTop"
                                                          style={{ display: 'none' }}
                                                        >
                                                          <div class="responseText padTopSm tbl fill">
                                                            <p class="cell noMargVert padVert borderBot">
                                                              I reference the Product Plan and
                                                              select the component w/ the higher
                                                              priority. The interview says "There is
                                                              no Product Plan." I say "I select the
                                                              one w/ the higher ROI." They say
                                                              "there is no ROI." I say "then I
                                                              choose the component whose manager has
                                                              the best rationale."
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>{' '}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tbl fill margTopSm">
                                    <div class="row alignMid">
                                      <div class="cell span-1-2 drop noWrap middle">
                                        <div class="breadcrumbList margTop minor">
                                          <div
                                            class="breadcrumb ib "
                                            itemscope=""
                                            itemtype="http://data-vocabulary.org/Breadcrumb"
                                          >
                                            <a
                                              itemprop="url"
                                              href="/Interview/index.htm"
                                              data-ga-lbl=""
                                            >
                                              <span itemprop="title">Inter­views</span>{' '}
                                              &nbsp;&gt;&nbsp;{' '}
                                            </a>
                                          </div>
                                          <div
                                            class="breadcrumb ib "
                                            itemprop="child"
                                            itemscope=""
                                            itemtype="http://data-vocabulary.org/Breadcrumb"
                                          >
                                            <a
                                              itemprop="url"
                                              href="/Interview/amazon-interview-questions-SRCH_KE0,6.htm"
                                              data-ga-lbl=""
                                            >
                                              <span itemprop="title">amazon</span>
                                            </a>
                                          </div>
                                        </div>
                                        <div class="margTopSm">
                                          <strong>1</strong>–<strong>10</strong> of{' '}
                                          <strong>11,940</strong> Interview Questions
                                        </div>
                                      </div>
                                      <div class="cell span-1-2 drop">
                                        <PaginationComponent />{' '}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

// export default interviewList;
const mapStateToProps = (state) => {
  const { salaryListStore } = state.SalaryListReducer;

  return {
    salaryListStore,
  };
};
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

export default connect(mapStateToProps, mapDispatchToProps)(interviewList);
