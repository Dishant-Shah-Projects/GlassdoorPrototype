import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../../../config.js';
import {
  hideReplyModal,
  showReplyModal,
  updateReviewFeature,
  updateReviewFavorite,
} from '../../../constants/action-types';
import './RightBlock.css';
import ReplyModal from './ReplyModal';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import PaginationComponent from '../../Student/Common/PaginationComponent';
import ReviewCard from './ReviewCard';

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
      Favorite: 0,
    };
  }  

  componentDidMount() {
    this.props.fetchReviews();
  }

  onPageClick = (e) => {
    this.props.fetchReviews(e.selected);
  };

  handleFeatured(Id, CompanyId) {
    this.setFeature(Id, CompanyId);
  }

  saveFeat(Id,CompanyId) {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .post(serverUrl + 'company/reviewFeatured', {
        ID: Id,
        CompanyID: CompanyId,
        Response: this.state.feature,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('response', response);
          
          // let payload2 = {
          //   reviewFeature: this.state.feature,
          // };
          // this.props.updateReviewFeature(payload2);
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: 'No Reviews Found',
        });
      });
  }
  setFeature(Id,CompanyId) {
    if (this.state.Feature === 0) {
      console.log('inside if 0');
      this.setState(
        {
          Feature: 1,
        },
        function () {
          this.saveFeat(Id,CompanyId);
        }
      );
    } else {
      console.log('inside if 1');
      this.setState(
        {
          Feature: 0,
        },
        function (Id) {
          this.saveFeat(Id,CompanyId);
        }
      );
    }
    
  }

  handleSaveFavorite(Id) {
    this.setFavorite(Id);
    
  }

  saveFav(Id) {
    console.log('Id1',Id);
    console.log('inside save', this.state.Favorite);
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .post(serverUrl + 'company/reviewFavorite', {
        ID: Id,
        Favorite: this.state.Favorite,
      })
      .then((response) => {
        if (response.status == 200) {
          console.log('response', response);
          // let payload3 = {
          //   reviewFavorite: this.state.Favorite,
          // };
          // this.props.updateReviewFavorite(payload3);
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: 'No Reviews Found',
        });
      });
  }

  setFavorite(Id) {
    console.log('Id',Id);
    if (this.state.Favorite === 0) {
      console.log('inside if 0');
      this.setState(
        {
          Favorite: 1,
        },
        function () {
          this.saveFav(Id);
        }
      );
    } else {
      console.log('inside if 1');
      this.setState(
        {
          Favorite: 0,
        },
        function (Id) {
          this.saveFav(Id);
        }
      );
    }
  }

  render() {
    return (
      <div className="col-12 col-md-8">
        <header class="row justify-content-between align-items-center mb-std">
          <h1 class="eiReviews__EIReviewsPageStyles__pageHeader col-12 col-md-auto m-0">
            {localStorage.getItem('companyName')} Reviews
          </h1>
        </header>
        <div class="ReviewsRef">
          <div id="ReviewsFeed" class="mt">
            <ol class=" empReviews emp-reviews-feed pl-0">
              {this.props.reviewListStore.reviewList.map((review) => (
                <li class="empReview cf  " id="empReview_35973660" key={review.ID}>
                  <ReviewCard
                    handleSaveFavorite={() => this.handleSaveFavorite(review.ID)}
                    handleFeatured={() => this.handleFeatured(review.ID)}
                    review={review}
                  />
                </li>
              ))}
            </ol>
          </div>
          <div className="tbl fill padHorz margVert" id="ResultsFooter">
            <div className="cell middle hideMob padVertSm" data-test="page-x-of-y">
              Page {this.props.reviewListStore.PageNo + 1} of {this.props.reviewListStore.PageCount}
            </div>
            <div className="module pt-xxsm">
              <PaginationComponent
                PageCount={this.props.reviewListStore.PageCount}
                PageNo={this.props.reviewListStore.PageNo}
                onPageClick={(e) => {
                  this.onPageClick(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
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
    updateReviewFeature: (payload2) => {
      dispatch({
        type: updateReviewFeature,
        payload2,
      });
    },
    updateReviewFavorite: (payload3) => {
      dispatch({
        type: updateReviewFavorite,
        payload3,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightBlock);
//export default RightBlock;
