import React, { Component } from 'react';
import AllReview from './AllReview';
// import '../CompanyOverView/CompanyOverView.css';
import './CompanyReviews.css';
// import SpecialReview from './SpecialReview';
import axios from 'axios';
import serverUrl from '../../../config';
import {
  updatespecialReviews,
  updateCompanyReviewsStore,
  updateStudentProfile,
} from '../../../constants/action-types';
import { connect } from 'react-redux';
import moment from 'moment';
import PaginationComponent from '../../Student/Common/PaginationComponent';

class CompanyGeneralReviewsAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { PendingTab: false, ApprovedTab: false, DisapprovedTab: false };
  }
  componentDidMount() {
    this.commonFetch();
  }

  commonFetch = (
    PageNo = 0,
    Status = '',
    PendingTab = false,
    ApprovedTab = false,
    DisapprovedTab = false
  ) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'admin/getGeneralReviews', {
        params: {
          Status,
          PageNo,
        },
        withCredentials: true,
      })
      .then(
        (response) => {
          console.log('getGeneralReviews admin', response.data);
          let payload = {
            ReviewList: response.data[0].Review,
            PageNo,
            Totalcount: response.data[1].Count,
            PageCount: Math.ceil(response.data[1].Count / 10),
            PendingTab,
            ApprovedTab,
            DisapprovedTab,

            // PageCount: Math.ceil(response.data.Totalcount / 3),
          };
          this.props.updateCompanyReviewsStore(payload);
        },
        (error) => {
          console.log('error', error);
        }
      );
  };

  onPageClick = (e) => {
    let Status = '';
    if (this.props.companyReviewsStore.PendingTab) {
      Status = 'Not Approved';
    } else if (this.props.companyReviewsStore.ApprovedTab) {
      Status = 'Approved';
    } else if (this.props.companyReviewsStore.DisapprovedTab) {
      Status = 'Disapproved';
    }
    this.commonFetch(
      e.selected,
      Status,
      this.props.companyReviewsStore.PendingTab,
      this.props.companyReviewsStore.ApprovedTab,
      this.props.companyReviewsStore.DisapprovedTab
    );
  };

  // openCompanyProfile = (event, CompanyID) => {
  //   localStorage.setItem('companyID', CompanyID);
  //   history.push('/CompanyPage');
  // };

  buttonClicked = (event, Status, ID, CompanyID) => {
    event.preventDefault();
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    const data = {
      Status,
      ID,
      CompanyID,
    };
    axios.post(serverUrl + 'admin/updateGeneralReviews', data).then(
      (response) => {
        console.log('Status Code : ', response.status);
        if (response.status === 200) {
          let Status = '';
          if (this.props.companyReviewsStore.PendingTab) {
            Status = 'Not Approved';
          } else if (this.props.companyReviewsStore.ApprovedTab) {
            Status = 'Approved';
          } else if (this.props.companyReviewsStore.DisapprovedTab) {
            Status = 'Disapproved';
          }
          this.commonFetch(
            this.props.companyReviewsStore.PageNo,
            Status,
            this.props.companyReviewsStore.PendingTab,
            this.props.companyReviewsStore.ApprovedTab,
            this.props.companyReviewsStore.DisapprovedTab
          );
          // let ReviewList = [...this.props.companyReviewsStore.ReviewList];
          // const index = ReviewList.findIndex((x) => x.ID === ID);
          // let review = { ...ReviewList[index] };
          // review.Status = Status;
          // ReviewList[index] = review;
          // let payload = {
          //   ReviewList: ReviewList,
          // };
          // this.props.updateCompanyReviewsStore(payload);
        }
      },
      (error) => {
        console.log('error:', error.response);
      }
    );
  };

  changePendingTab = (event) => {
    event.preventDefault();
    if (this.props.companyReviewsStore.PendingTab) {
      this.commonFetch(0, '', false, false, false);
    } else {
      this.commonFetch(0, 'Not Approved', true, false, false);
    }
  };

  changeApprovedTab = (event) => {
    event.preventDefault();
    if (this.props.companyReviewsStore.ApprovedTab) {
      this.commonFetch(0, '', false, false, false);
    } else {
      this.commonFetch(0, 'Approved', false, true, false);
    }
  };
  changeDisapprovedTab = (event) => {
    event.preventDefault();
    if (this.props.companyReviewsStore.DisapprovedTab) {
      this.commonFetch(0, '', false, false, false);
    } else {
      this.commonFetch(0, 'Disapproved', false, false, true);
    }
  };

  render() {
    return (
      <article id="MainCol">
        <div id="NodeReplace">
          <main class="gdGrid">
            <div>
              <div
                data-test="EIReviewsPage"
                class=" eiReviews__EIReviewsPageStyles__EIReviewsPage p-md mb-std"
                data-brandviews="PAGE:n=reviews-reviewsPage:eid=6036"
              >
                <header
                  id="companyReview"
                  class="row justify-content-between align-items-center mb-std"
                >
                  <h1 class="eiReviews__EIReviewsPageStyles__pageHeader col-12 col-md-auto m-0">
                    {this.props.companyOverviewStore.companyOverview.CompanyName} Reviews
                  </h1>
                  <p class="col-auto minor mb-0 mt-xxsm mt-md-0">Updated {moment().format('ll')}</p>
                </header>
                <div></div>
                <div class="lined" id="dynamicFiltersContainer">
                  <div className="selectContainer">
                    <div class="button-set ">
                      <div>
                        <div
                          style={{
                            paddingLeft: '30%',
                          }}
                          onClick={this.changePendingTab}
                          class={this.props.companyReviewsStore.PendingTab ? 'selected' : ''}
                          tabindex="0"
                        >
                          <label
                            style={{ height: '40px' }}
                            for="employerUIData.state.employerReview.currentJob_true"
                          >
                            Pending
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
                        <div
                          onClick={this.changeDisapprovedTab}
                          class={this.props.companyReviewsStore.DisapprovedTab ? 'selected' : ''}
                          tabindex="0"
                        >
                          <label
                            style={{ height: '40px' }}
                            for="employerUIData.state.employerReview.currentJob_false"
                          >
                            Disapproved
                          </label>
                          <input
                            class="hidden"
                            type="radio"
                            name="employerUIData.state.employerReview.currentJob"
                            id="employerUIData.state.employerReview.currentJob_false"
                            value="false"
                          />
                        </div>
                        <div
                          onClick={this.changeApprovedTab}
                          class={this.props.companyReviewsStore.ApprovedTab ? 'selected' : ''}
                          tabindex="0"
                        >
                          <label
                            style={{ height: '40px' }}
                            for="employerUIData.state.employerReview.currentJob_false"
                          >
                            Approved
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
                  </div>
                </div>

                <div id="ReviewsRef">
                  <div id="ReviewsFeed" class=" mt">
                    <ol class=" empReviews emp-reviews-feed pl-0">
                      {this.props.companyReviewsStore.ReviewList.map((review) => (
                        <AllReview
                          buttonClicked={(event, Status) =>
                            this.buttonClicked(event, Status, review.ID, review.CompanyID)
                          }
                          review={review}
                        />
                      ))}
                    </ol>
                  </div>
                </div>
                <div class="eiReviews__EIReviewsPageStyles__pagination noTabover mt">
                  <PaginationComponent
                    PageCount={this.props.companyReviewsStore.PageCount}
                    PageNo={this.props.companyReviewsStore.PageNo}
                    onPageClick={(e) => {
                      this.onPageClick(e);
                    }}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </article>
    );
  }
}

// export default CompanyReviews;

const mapStateToProps = (state) => {
  const { companyOverviewStore, companyReviewsStore } = state.CompanyPageReducer;
  const { studentInfoStore } = state.StudentCompleteInfoReducer;

  return {
    companyOverviewStore,
    companyReviewsStore,
    studentInfoStore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatespecialReviews: (payload) => {
      dispatch({
        type: updatespecialReviews,
        payload,
      });
    },
    updateCompanyReviewsStore: (payload) => {
      dispatch({
        type: updateCompanyReviewsStore,
        payload,
      });
    },
    updateStudentProfile: (payload) => {
      dispatch({
        type: updateStudentProfile,
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyGeneralReviewsAdmin);
