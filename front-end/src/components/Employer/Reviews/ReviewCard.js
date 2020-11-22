import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../../../config.js';
import { hideReplyModal, showReplyModal } from '../../../constants/action-types';
import './RightBlock.css';
import ReplyModal from './ReplyModal';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import PaginationComponent from '../../Student/Common/PaginationComponent';

class RightBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      reviewsList: [
        {
          CEOApproval: 0,
          CompanyID: 0,
          CompanyName: '',
          Cons: 'banana',
          DatePosted: '',
          Descriptions: '',
          EmployeeStatus: '',
          Favorite: 0,
          Headline: '',
          Helpful: 0,
          ID: 0,
          JobTitle: '',
          JobType: '',
          Pros: '',
          Rating: 0,
          Recommended: 0,
          Response: null,
          Status: '',
          StudentID: 0,
        },
      ],
      authFlag: false,
      cancelUpdate: false,
      feature: 0,
    };
  }

  showReply = (Id) => {
    localStorage.setItem('currentId', Id);
    this.props.showReplyModal();
  };

  closeReplyModal = () => {
    this.props.hideReplyModal();
  };

  componentDidMount() {
    this.props.fetchReviews();
  }

  onPageClick = (e) => {
    this.props.fetchReviews(e.selected);
  };

  handleFeatured(Id, CompanyId) {
    this.setFeature();
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .post(serverUrl + 'company/reviewFeatured', {
        ID: Id,
        CompanyID: CompanyId,
        Response: this.state.feature,
      })
      .then((response) => {
        if (response.status == 201) {
          console.log('response', response);
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: 'No Reviews Found',
        });
      });
  }

  setFeature() {
    this.setState((prevState) => ({
      feature: !prevState.feature,
    }));
  }
  handleSaveFavorite(Id) {
    console.log('inside save');
    this.setFavorite();
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .post(serverUrl + 'company/reviewFavorite', {
        ID: Id,
        Favorite: this.favorite,
      })
      .then((response) => {
        if (response.status == 201) {
          console.log('response', response);
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: 'No Reviews Found',
        });
      });
  }

  setFavorite() {
    this.setState((prevState) => ({
      Favorite: !prevState.Favorite,
    }));
  }

  render() {
    return (
      <li class="empReview cf  " id="empReview_35973660" key={listitem.ID}>
        <div class="gdReview">
          <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
              <time
                class="date subtle small"
                datetime="Thu Oct 01 2020 15:33:44 GMT-0700 (Pacific Daylight Time)"
              >
                {listitem.DatePosted.substring(0, 10)}
              </time>
            </div>
          </div>
          <div class="row mt">
            <div class="col-sm-1">
              <span class="sqLogo smSqLogo logoOverlay">
                <img
                  alt="Wipro Logo"
                  class="lazy lazy-loaded"
                  data-original="https://media.glassdoor.com/sql/9936/wipro-squarelogo-1562144900841.png"
                  data-original-2x="https://media.glassdoor.com/sqll/9936/wipro-squarelogo-1562144900841.png"
                  data-retina-ok="true"
                  src="https://media.glassdoor.com/sql/9936/wipro-squarelogo-1562144900841.png"
                  style={{ opacity: '1' }}
                  title=""
                />
              </span>
            </div>
            <div class="col-sm-11 pl-sm-lg  mx-0">
              <div class="">
                <h2 class="h2 summary strong mt-0 mb-xsm">
                  <a href="/Reviews/Employee-Review-Wipro-RVW35973660.htm" class="reviewLink">
                    {listitem.Headline}
                  </a>
                </h2>
                <div class="mr-xsm d-lg-inline-block">
                  <span class="gdStars gdRatings subRatings__SubRatingsStyles__gdStars">
                    <div class=" v2__EIReviewsRatingsStylesV2__ratingInfoWrapper">
                      <div class="v2__EIReviewsRatingsStylesV2__ratingInfo" rel="nofollow">
                        <div class="v2__EIReviewsRatingsStylesV2__ratingNum v2__EIReviewsRatingsStylesV2__small">
                          {listitem.Rating}.0
                        </div>
                        <span class="gdStars gdRatings common__StarStyles__gdStars">
                          <span class="rating">
                            <span title="rating"></span>
                          </span>
                          <StarRatings
                            rating={listitem.Rating}
                            starRatedColor="#0caa41"
                            numberOfStars={5}
                            name="rating"
                            starDimension="12px"
                            starSpacing="1px"
                          />
                        </span>
                      </div>
                    </div>
                  </span>
                </div>
                <div class="d-lg-inline-block">
                  <div class="author minor">
                    <span class="authorInfo">
                      <span class="authorJobTitle middle">{listitem.JobTitle}</span>
                    </span>
                  </div>
                </div>
                <div>
                  <div class="row reviewBodyCell recommends">
                    <div class="col-sm-4 d-flex align-items-center">
                      <i
                        class="sqLed middle sm mr-xsm"
                        style={{
                          backgroundColor: listitem.Recommended ? 'r#0CAA41' : '#F6B500',
                        }}
                      ></i>
                      <span>Recommends</span>
                    </div>

                    <div class="col-sm-4 d-flex align-items-center">
                      <i
                        class="sqLed sm mr-xsm"
                        onClick={() => this.handleSaveFavorite(listitem.ID)}
                        style={{
                          backgroundColor: this.state.Favorite ? '#1861bf' : '#ececec',
                        }}
                      ></i>
                      <span>Save Favorite</span>
                    </div>
                    <div class="col-sm-4 d-flex align-items-center">
                      <i
                        class="sqLed sm mr-xsm"
                        onClick={() => this.handleFeatured(listitem.ID, listitem.CompanyID)}
                        style={{
                          backgroundColor: this.state.feature ? '#1861bf' : '#ececec',
                        }}
                      ></i>
                      <span>Make Featured</span>
                    </div>
                  </div>
                </div>
                <p class="mainText mb-0">{listitem.descriptions}</p>
              </div>
              <div class="">
                <div class="v2__EIReviewDetailsV2__fullWidth v2__EIReviewDetailsV2__clickable">
                  <p class="strong mb-0 mt-xsm">Pros</p>
                  <p class="mt-0 mb-xsm v2__EIReviewDetailsV2__bodyColor v2__EIReviewDetailsV2__lineHeightLarge v2__EIReviewDetailsV2__isCollapsed v2__EIReviewDetailsV2__singleLine ">
                    <span data-test="pros">{listitem.Pros}</span>
                  </p>
                </div>
                <div class="v2__EIReviewDetailsV2__fullWidth v2__EIReviewDetailsV2__clickable">
                  <p class="strong mb-0 mt-xsm">Cons</p>
                  <p class="mt-0 mb-xsm v2__EIReviewDetailsV2__bodyColor v2__EIReviewDetailsV2__lineHeightLarge v2__EIReviewDetailsV2__isCollapsed v2__EIReviewDetailsV2__singleLine ">
                    <span data-test="cons">{listitem.Cons}</span>
                  </p>
                </div>
                <div class="row mt-xsm mx-0"></div>
                <div class="justify-content-around justify-content-md-between mt-lg row">
                  <div class="d-flex">
                    <div class="mr-md">
                      <button
                        class="gd-ui-button  css-glrvaa"
                        onClick={() => this.showReply(listitem.ID)}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  {this.props.replyModalStore.popSeen ? (
                    <ReplyModal toggle={this.closeReplyModal} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  const { replyModalStore, reviewListStore } = state.ReviewReplyReducer;
  return {
    replyModalStore: replyModalStore,
    reviewListStore: reviewListStore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hideReplyModal: (payload) => {
      dispatch({
        type: hideReplyModal,
        payload,
      });
    },
    showReplyModal: (payload) => {
      dispatch({
        type: showReplyModal,
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightBlock);
//export default RightBlock;
