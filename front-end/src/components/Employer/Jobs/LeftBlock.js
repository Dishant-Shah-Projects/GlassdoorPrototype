import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LeftBlock.css';
import PaginationComponent from '../../Student/Common/PaginationComponent';
import { showPostJobModal, hidePostJobModal, updateJobSelectList } from '../../../constants/action-types';
import PostJobModal from './PostJobModal';


class LeftBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openJobDetails = (event, Jobid) =>{
    //event.preventDefault();
    const index = this.props.jobsStore.jobsList.findIndex((x) => x._id === Jobid);
    const selectedJob = {
      ...this.props.jobsStore.jobsList[index],
    };

    let payload2 = {
      selectedJob,
    };
    this.props.updateJobSelectList(payload2);
    console.log('jobId:', Jobid);
  };

    showPostJob = () => {      
      this.props.showPostJobModal();
    };
    closePostJob = () => {
      this.props.hidePostJobModal();
    };
  componentDidMount() {
    console.log('props', this.props);
    this.props.jobFetch(this.props.jobsStore.PageNo);
  }

  onPageClick = (e) => {
    this.props.jobFetch(e.selected);
  };

  render() {
    return (
      <div>
        <div class="col-12 col-md-6 pr-md-xxl">
        <div class="d-none d-md-block">
        <article id="MainCol" class="noPad">
          <ul class="jlGrid hover p-0 ">
            {this.props.jobsStore.jobsList.map((listitem) => (
              <li
                class="jl react-job-listing gdGrid selected"
                data-brandviews="BRAND:n=jsearch-job-listing:eid=148784:jlid=3708699629"
                data-id="3708699629"
                data-adv-type="EMPLOYER"
                data-is-organic-job="false"
                data-ad-order-id="897464"
                data-sgoc-id="1005"
                data-is-easy-apply="false"
                data-normalize-job-title="Teller"
                data-job-loc="Madison, WI"
                data-job-loc-id="1133470"
                data-job-loc-type="C"
                key={listitem._id}
                onClick={(event) => {
                  this.openJobDetails(event, listitem._id);
                }}
              >
                <div class="d-flex flex-column pl-sm css-nq3w9f">
                  <div class="jobHeader d-flex justify-content-between align-items-start">
                    <a
                      href="#"
                      type="button"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      class=" css-10l5u4p e1n63ojh0 jobLink"
                      style={{ 'pointer-events': 'all' }}
                    >
                      <span>{listitem.CompanyName}</span>
                    </a>
                    <div class="saveJobWrap align-self-end d-flex flex-nowrap align-items-start">
                      <span class="save-job-button-3708699629 nowrap" data-test="save-job">
                        {listitem.PostedDate.substring(0, 10)}
                      </span>
                    </div>
                  </div>
                  <a
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    class="jobInfoItem jobTitle css-13w0lq6 eigr9kq1 jobLink"
                    style={{ 'pointer-events': 'all' }}
                  >
                    <span>{listitem.Title}</span>
                  </a>
                  <div class="d-flex flex-wrap css-yytu5e e1rrn5ka1">
                    <span class="loc css-nq3w9f pr-xxsm">
                      {listitem.City}, {listitem.State}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="tbl fill padHorz margVert" id="ResultsFooter">
            <div className="cell middle hideMob padVertSm" data-test="page-x-of-y">
              Page {this.props.jobsStore.PageNo + 1} of {this.props.jobsStore.PageCount}
            </div>
            <div className="module pt-xxsm">
              <PaginationComponent
                PageCount={this.props.jobsStore.PageCount}
                PageNo={this.props.jobsStore.PageNo}
                onPageClick={(e) => {
                  this.onPageClick(e);
                }}
              />
            </div>
          </div>
          <div class="justify-content-around justify-content-md-between mt-lg row">
            <div class="d-flex">
              <div class="mr-md">
                <button
                  class="gd-ui-button  css-glrvaa"
                  onClick={() => {
                    this.showPostJob();
                  }}
                >
                  Post New Job
                </button>
              </div>
            </div>
          </div>
          {this.props.postJobModalStore.popSeen ? (
          <PostJobModal toggle={this.closePostJob} />
        ) : ''}
        </article>
      </div>
      </div>
      </div>
    );
  }
}

//export default LeftBlock;
const mapDispatchToProps = (dispatch) => {
  return {
    hidePostJobModal: (payload) => {
      dispatch({
        type: hidePostJobModal,
        payload,
      });
    },
    showPostJobModal: (payload) => {
      dispatch({
        type: showPostJobModal,
        payload,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const { postJobModalStore } = state.PostJobModalReducer;
  const { jobsStore } = state.JobsListReducer;
  return {
    jobsStore: jobsStore,
    postJobModalStore: postJobModalStore
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftBlock);
