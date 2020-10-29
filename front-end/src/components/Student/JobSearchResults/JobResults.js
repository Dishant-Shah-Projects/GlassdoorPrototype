import React, { Component } from 'react';
import JobApplyModal from './JobApplyModal';
import JobLeftResultsBlock from './JobLeftResultsBlock';
import './JobList.css';
import JobRightResultsBlock from './JobRightResultsBlock';

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
          <JobLeftResultsBlock saveJob={(event, JobID) => this.props.saveJob(event, JobID)} />
          <JobRightResultsBlock
            toggle={(event) => this.toggle(event)}
            saveJob={(event, JobID) => this.props.saveJob(event, JobID)}
          />
        </section>
      </div>
    );
  }
}

export default JobResults;
