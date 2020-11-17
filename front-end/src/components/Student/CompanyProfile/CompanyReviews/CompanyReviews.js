import React, { Component } from 'react';
import PaginationComponent from '../../Common/PaginationComponent';
import AllReview from './AllReview';
// import '../CompanyOverView/CompanyOverView.css';
import './CompanyReviews.css';
import SpecialReview from './SpecialReview';
import axios from 'axios';
import serverUrl from '../../../../config';
import {
  updatespecialReviews,
  updateCompanyReviewsStore,
} from '../../../../constants/action-types';
import { connect } from 'react-redux';
import moment from 'moment';

class CompanyReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'student/featureReview', {
        params: { CompanyID: localStorage.getItem('companyID') },
        withCredentials: true,
      })
      .then((response) => {
        // console.log('compsnyData:', response.data);
        const payload = {
          featuredReview: { ...response.data.featuredReview },
          positiveReview: { ...response.data.positiveReview },
          negatieReview: { ...response.data.negativeReview },
        };
        this.props.updatespecialReviews(payload);
      });
    this.commonFetch();
  }
  commonFetch = (PageNo = 0) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'student/companyReview', {
        params: {
          CompanyID: localStorage.getItem('companyID'),
          PageNo,
        },
        withCredentials: true,
      })
      .then(
        (response) => {
          console.log('companyReviews', response.data);
          let payload = {
            ReviewList: response.data[2],
            PageNo,
            Totalcount: response.data[0].count,
            PageCount: Math.ceil(response.data[0].count / 10),

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
    // console.log('Page Clicked:', e.selected);
    this.commonFetch(e.selected);
  };
  render() {
    let rating = 0;
    if (this.props.companyOverviewStore.companyOverview.GeneralReviewCount > 0) {
      rating = Math.round(
        this.props.companyOverviewStore.companyOverview.TotalGeneralReviewRating /
          this.props.companyOverviewStore.companyOverview.GeneralReviewCount
      );
    }
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
                <div class="gdGrid">
                  <div class="mt-xl" id="EmpStats">
                    <div class="empStatsBody">
                      <div class="mb-md-md mb-xsm">
                        <div class=" v2__EIReviewsRatingsStylesV2__ratingInfoWrapper">
                          <div class="v2__EIReviewsRatingsStylesV2__ratingInfo" rel="nofollow">
                            <div class="v2__EIReviewsRatingsStylesV2__ratingNum v2__EIReviewsRatingsStylesV2__large">
                              {rating}
                            </div>
                            <span class="gdStars gdRatings common__StarStyles__gdStars">
                              <span class="rating">
                                <span title="3.9"></span>
                              </span>
                              <div font-size="md" class={`css-1nka8iu${rating}s`}>
                                <span role="button">★</span>
                                <span role="button">★</span>
                                <span role="button">★</span>
                                <span role="button">★</span>
                                <span role="button">★</span>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="common__EIReviewsRatingsStyles__ratingDonuts d-table">
                        <div class="d-table-cell">
                          <div class="donut-wrap d-table">
                            <div class=" donut-chart d-lg-table-cell">
                              <div data-percentage="76" id="EmpStats_Recommend">
                                <svg
                                  width="66"
                                  height="66"
                                  class="donut__DonutStyle__donutchart d-block"
                                  style={{ fill: 'transparent' }}
                                >
                                  <circle
                                    r="29"
                                    cx="33"
                                    cy="33"
                                    transform="rotate(-90 33,33)"
                                    style={{ stroke: '#DAE2E5', strokeWidth: '8' }}
                                    class="donut__DonutStyle__donutchart_track"
                                  ></circle>
                                  <circle
                                    r="29"
                                    cx="33"
                                    cy="33"
                                    transform="rotate(-90 33,33)"
                                    style={{
                                      stroke: '#0CAA41',
                                      strokeDasharray: '138.48140417023808 182.212373908208',
                                      strokeWidth: '8',
                                    }}
                                    class="donut__DonutStyle__donutchart_indicator"
                                  ></circle>
                                  <text
                                    class="donut__DonutStyle__donutchart_text"
                                    x="33"
                                    y="33"
                                    text-anchor="middle"
                                    style={{ fill: '#0CAA41' }}
                                  >
                                    <tspan
                                      class="donut__DonutStyle__donutchart_text_val"
                                      alignment-baseline="middle"
                                      style={{ fontSize: '18px' }}
                                    >
                                      76
                                    </tspan>
                                    <tspan
                                      class="donut__DonutStyle__donutchart_text_percent"
                                      alignment-baseline="middle"
                                      baseline-shift="-25%"
                                      style={{ fontSize: '9px' }}
                                    >
                                      %
                                    </tspan>
                                  </text>
                                </svg>
                              </div>
                            </div>
                            <div class="donut-text d-lg-table-cell pt-sm pt-lg-0 px-lg-sm">
                              Recommend to a Friend
                            </div>
                          </div>
                        </div>
                        <div class="d-table-cell">
                          <div class="donut-wrap d-table">
                            <div class="ceoApprove donut-chart d-lg-table-cell">
                              <div data-percentage="83" id="EmpStats_Approve">
                                <svg
                                  width="66"
                                  height="66"
                                  class="donut__DonutStyle__donutchart d-block"
                                  style={{ fill: 'transparent' }}
                                >
                                  <circle
                                    r="29"
                                    cx="33"
                                    cy="33"
                                    transform="rotate(-90 33,33)"
                                    style={{ stroke: '#DAE2E5', strokeWidth: '8' }}
                                    class="donut__DonutStyle__donutchart_track"
                                  ></circle>
                                  <circle
                                    r="29"
                                    cx="33"
                                    cy="33"
                                    transform="rotate(-90 33,33)"
                                    style={{
                                      stroke: '#0CAA41',
                                      strokeDasharray: '151.23627034381263 182.212373908208',
                                      strokeWidth: '8',
                                    }}
                                    class="donut__DonutStyle__donutchart_indicator"
                                  ></circle>
                                  <text
                                    class="donut__DonutStyle__donutchart_text"
                                    x="33"
                                    y="33"
                                    text-anchor="middle"
                                    style={{ fill: '#0CAA41' }}
                                  >
                                    <tspan
                                      class="donut__DonutStyle__donutchart_text_val"
                                      alignment-baseline="middle"
                                      style={{ fontSize: '18px' }}
                                    >
                                      83
                                    </tspan>
                                    <tspan
                                      class="donut__DonutStyle__donutchart_text_percent"
                                      alignment-baseline="middle"
                                      baseline-shift="-25%"
                                      style={{ fontSize: '9px' }}
                                    >
                                      %
                                    </tspan>
                                  </text>
                                </svg>
                              </div>
                            </div>
                            <div class="donut-text d-lg-table-cell pt-sm pt-lg-0 px-lg-sm">
                              Approve of CEO
                            </div>
                          </div>
                          <aside class="common__EIReviewsRatingsStyles__lineCEO"></aside>
                        </div>
                        <div class="d-table-cell ">
                          <div class="donut-wrap d-table">
                            <div class="donut-text d-lg-table-cell pt-sm pt-lg-0 pl-lg-sm">
                              <div> {this.props.companyOverviewStore.companyOverview.CEO}</div>
                              <div class="numCEORatings">{/*26,648 Ratings*/}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SpecialReview
                  review={this.props.companyOverviewStore.featuredReview}
                  reviewType={'Featured Review'}
                />
                <SpecialReview
                  review={this.props.companyOverviewStore.positiveReview}
                  reviewType={'Most Helpufl Positive Review'}
                />
                <SpecialReview
                  review={this.props.companyOverviewStore.negatieReview}
                  reviewType={'Most Helpufl Negative Review'}
                />
                <div id="ReviewsRef">
                  <div id="ReviewsFeed" class=" mt">
                    <ol class=" empReviews emp-reviews-feed pl-0">
                      {this.props.companyReviewsStore.ReviewList.map((review) => (
                        <AllReview review={review} />
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

  return {
    companyOverviewStore,
    companyReviewsStore,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyReviews);
