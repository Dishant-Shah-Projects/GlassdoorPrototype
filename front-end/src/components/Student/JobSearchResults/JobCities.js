import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobCities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  selectFilter = (event, State) => {
    this.props.filterChangeCall(
      event,
      this.props.jobListStore.Sort,
      this.props.jobListStore.JobType,
      State,
      this.props.jobListStore.SalStart,
      this.props.jobListStore.SalEnd,
      0
    );
  };
  render() {
    return (
      <ul className="css-1dv4b0s ew8xong0">
        <li
          style={{ cursor: 'pointer' }}
          value="-1"
          className={this.props.jobListStore.State === '' ? 'selected' : ''}
          onClick={(event) => this.selectFilter(event, '')}
        >
          <span className="label">All Cities</span>
          <span className="labelTick"></span>
        </li>
        {this.props.masterData.States.map((state) => (
          <li
            style={{ cursor: 'pointer' }}
            value={state}
            className={this.props.jobListStore.State === state ? 'selected' : ''}
            onClick={(event) => this.selectFilter(event, state)}
          >
            <span className="label">
              {state}
              <span className="minor padLtXs ib"></span>
            </span>
            <span className="labelTick"></span>
          </li>
        ))}
      </ul>
    );
  }
}

// export default JobCities;
const mapStateToProps = (state) => {
  const { jobListStore } = state.JobSearchPageReducer;
  const { masterData } = state.staticDataReducer;

  return {
    jobListStore,
    masterData,
  };
};
export default connect(mapStateToProps, null)(JobCities);
