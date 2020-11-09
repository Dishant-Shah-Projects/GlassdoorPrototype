import React, { Component } from 'react';
import JobApplyModal from './JobApplyModal';
import JobLeftResultsBlock from './JobLeftResultsBlock';
import './JobList.css';
import JobRightResultsBlock from './JobRightResultsBlock';
import { connect } from 'react-redux';

class JobResults extends Component {
  constructor(props) {
    super(props);
    this.state = { popSeen: false };
  }
  toggle = (event) => {
    event.preventDefault();
    this.setState({
      popSeen: !this.state.popSeen,
    });
  };

  render() {
    return (
      <div id="JobResults" className="module noPad">
        <section className="flexbox" id="PanesWrap">
          {this.state.popSeen ? <JobApplyModal toggle={(event) => this.toggle(event)} /> : ''}
          <JobLeftResultsBlock
            filterChangeCall={(JobType, State, SalStart, SalEnd, PageNo) =>
              this.props.filterChangeCall(JobType, State, SalStart, SalEnd, PageNo)
            }
            saveJob={(event, JobID) => this.props.saveJob(event, JobID)}
          />
          {this.props.jobListStore.jobList.length > 0 ? (
            <JobRightResultsBlock
              toggle={(event) => this.toggle(event)}
              saveJob={(event, JobID) => this.props.saveJob(event, JobID)}
            />
          ) : (
            ''
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { jobListStore } = state.JobSearchPageReducer;
  return {
    jobListStore,
  };
};
export default connect(mapStateToProps, null)(JobResults);

// export default JobResults;
