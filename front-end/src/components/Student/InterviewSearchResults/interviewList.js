import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LowerNavBarOther, updateInterviewList } from '../../../constants/action-types';
import PaginationComponent from '../Common/PaginationComponent';
import './interviewList.css';
import Questions from './Questions';
import axios from 'axios';
import serverUrl from '../../../config';
import { history } from '../../../App';

class interviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  commonFetch = (PageNo = 0) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'student/searchInterview', {
        params: {
          SearchString: localStorage.getItem('SearchString'),
          State: localStorage.getItem('Location'),
          PageNo,
        },
        withCredentials: true,
      })
      .then(
        (response) => {
          console.log('interview list', response);
          let payload = {
            interviewSearchList: response.data.results,
            PageNo,
            PageCount: Math.ceil(response.data.count / 10),
            Totalcount: response.data.count,

            // PageCount: Math.ceil(response.data.Totalcount / 3),
          };
          this.props.updateInterviewList(payload);
        },
        (error) => {
          console.log('error', error);
        }
      );
  };

  componentDidMount() {
    localStorage.setItem('companyID', '');
    this.commonFetch();
  }

  onPageClick = (e) => {
    // console.log('Page Clicked:', e.selected);
    this.commonFetch(e.selected);
  };

  openCompanyProfile = (event, CompanyID) => {
    localStorage.setItem('companyID', CompanyID);
    history.push('/CompanyPage');

    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    const data = { CompanyID };
    axios.post(serverUrl + 'student/companyViewCount', data).then(
      (response) => {
        console.log('View incremented');
      },
      (error) => {
        console.log('error', error);
      }
    );
  };

  render() {
    this.props.LowerNavBarOther();
    return (
      <body className="main flex loggedIn lang-en en-US hollywood  _initOk noTouch desktop">
        {/*<Navbar />*/}
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
                                    {this.props.interviewListStore.interviewSearchList.length ===
                                    0 ? (
                                      <h2 class="block" style={{ fontWeight: '400' }}>
                                        No interviews found, try different seach criteria
                                      </h2>
                                    ) : (
                                      <h2 class="block" style={{ fontWeight: '400' }}>
                                        {localStorage.getItem('SearchString')} Interview Questions
                                      </h2>
                                    )}
                                  </header>
                                  <div class="interviewQuestionsList lockedInterviewQuestions">
                                    {this.props.interviewListStore.interviewSearchList.map(
                                      (interview) => (
                                        <Questions
                                          interview={interview}
                                          openCompanyProfile={(event) =>
                                            this.openCompanyProfile(event, interview.CompanyID)
                                          }
                                        />
                                      )
                                    )}
                                  </div>
                                  <div class="tbl fill margTopSm">
                                    <div class="row alignMid">
                                      <div class="cell span-1-2 drop noWrap middle">
                                        {this.props.interviewListStore.interviewSearchList.length >
                                        0 ? (
                                          <div class="margTopSm">
                                            <strong>
                                              {this.props.interviewListStore.PageNo * 10 + 1}
                                            </strong>
                                            –
                                            <strong>
                                              {' '}
                                              {this.props.interviewListStore.interviewSearchList
                                                .length +
                                                this.props.interviewListStore.PageNo * 10}
                                            </strong>{' '}
                                            of{' '}
                                            <strong>
                                              {this.props.interviewListStore.Totalcount}
                                            </strong>{' '}
                                            Interview Questions
                                          </div>
                                        ) : (
                                          ''
                                        )}
                                      </div>
                                      {this.props.interviewListStore.interviewSearchList.length >
                                      0 ? (
                                        <PaginationComponent
                                          PageCount={this.props.interviewListStore.PageCount}
                                          PageNo={this.props.interviewListStore.PageNo}
                                          onPageClick={(e) => {
                                            this.onPageClick(e);
                                          }}
                                        />
                                      ) : (
                                        ''
                                      )}
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
  const { interviewListStore } = state.InterviewListReducer;

  return {
    interviewListStore,
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
    updateInterviewList: (payload) => {
      dispatch({
        type: updateInterviewList,
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(interviewList);
