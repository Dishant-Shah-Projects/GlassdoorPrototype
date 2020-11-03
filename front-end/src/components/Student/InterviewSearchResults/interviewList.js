import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LowerNavBarOther, updateSalaryList } from '../../../constants/action-types';
import Navbar from '../Common/Navbar';
import PaginationComponent from '../Common/PaginationComponent';
import './interviewList.css';
import Questions from './Questions';

class interviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    this.props.LowerNavBarOther();
    return (
      <body className="main flex loggedIn lang-en en-US hollywood  _initOk noTouch desktop">
        <Navbar />
        <div class="pageContentWrapperStudent ">
          <div id="PageContent">
            <div id="PageBodyContents" class="meat">
              <div class="pageInsideContent cf">
                <div id="nodeReplace">
                  <main class="gdGrid">
                    <div id="EI-Srch">
                      <div id="SearchResults">
                        <div id="InterviewsSearchResults">
                          <div class="flex-aside">
                            <article style={{ position: 'relative' }} id="MainCol" class="mainCol">
                              <div class="module padHorzLg padVertLg">
                                <div id="InterviewQuestionList" class="module">
                                  <header class="lined">
                                    <h2 class="block" style={{ fontWeight: '400' }}>
                                      amazon Interview Questions
                                    </h2>
                                  </header>
                                  <div class="interviewQuestionsList lockedInterviewQuestions">
                                    {<Questions />}
                                    {<Questions />}
                                    {<Questions />}
                                    {<Questions />}
                                    {<Questions />}
                                  </div>
                                  <div class="tbl fill margTopSm">
                                    <div class="row alignMid">
                                      <div class="cell span-1-2 drop noWrap middle">
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
                            </article>
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
