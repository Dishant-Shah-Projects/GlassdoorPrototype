import React, { Component } from 'react';
import './RightBlock.css';
import DonutChart from 'react-donut-chart';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import serverUrl from '../../../config.js';
import { connect } from 'react-redux';
import PaginationComponent from '../../Student/Common/PaginationComponent';

class RightBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statsData: [],
      chartEvents: [],
    };
  }

 
  componentDidMount() {
    let eventrow = 0;
    this.props.fetchReport(this.props.updateEmployerStatsStore.PageNo);
    this.setState({
      chartEvents: [
        {
          eventName: 'select',
          callback({ chartWrapper }) {
            const chartevent = chartWrapper.getChart().getSelection();
            eventrow = chartevent[0].row;
            let JobId = this.props.updateEmployerStatsStore.statsList[eventrow].jobDetails.jobData.JobID;
            localStorage.setItem('Jobid', JobId);
            console.log('Selected ', JobId);
          },
        },
      ],
    })
    this.getBarData();  
  }

  onPageClick = (e) => {
    this.props.fetchReport(e.selected);
  };
  getBarData() {
    let data1 = [];
          let statsData1 = [];
          data1.push('Jobs');
          data1.push('Applicants Applied');
          data1.push('Applicants Selected');
          data1.push('Applicants Rejected');
          statsData1.push(data1);
          console.log('statsData1', statsData1);
          this.setState({
            statsData: [...this.state.statsData, data1],
            
          });          
          console.log('statsData', this.state.statsData);
          let data = [];
          for (var i = 0; i < this.props.updateEmployerStatsStore.statsList.length; i++) {
            // data.push(response.data.statsData[i].jobDetails.jobData.Title);
            // data.push(response.data.statsData[i].Applied.results[0].TotalApplicants);
            // data.push(response.data.statsData[i].Selected.results[0].SelectedApplicants);
            // data.push(response.data.statsData[i].Rejected.results[0].RejectedApplicants);
            data.push(this.props.updateEmployerStatsStore.statsList[i].jobDetails.jobData.Title);
            data.push(12);
            data.push(6);
            data.push(6);
            console.log('data', data);
            statsData1.push(data);
            this.setState({
              statsData: [...this.state.statsData, data],
            });
            data = [];
          }
          console.log('statsData1', statsData1);
          console.log('statsData', this.state.statsData);
        }
  

  fetchDemographics(event) {

    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'company/demographicsJob', {
        params: { JobID: localStorage.getItem('Jobid')},
        withCredentials: true,
      })
      .then((response) => {
        if (response.status == 200) {
          console.log('response', response);
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: 'No Demographics Found',
        });
      });
  }
  render() {
    return (
      <div className="col-md-8 px-0">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex flex-column">
            <span class="mb-sm">Jobs Statistics</span>
            <div class="d-flex">
              <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={this.state.statsData}
                options={{
                  title: 'Statistics of the Jobs Posted',
                  chartArea: { width: '50%' },
                  isStacked: true,
                  hAxis: {
                    title: 'Total Applicants',
                    minValue: 0,
                  },
                  vAxis: {
                    title: 'Jobs',
                  },
                }}
                // For tests
                rootProps={{ 'data-testid': '3' }}
                chartEvents={this.state.chartEvents}
              />
            </div>
          </div>
          <div className="tbl fill padHorz margVert" id="ResultsFooter">
          <div className="cell middle hideMob padVertSm" data-test="page-x-of-y">
            Page {this.props.updateEmployerStatsStore.PageNo + 1} of {this.props.updateEmployerStatsStore.PageCount}
          </div>
          <div className="module pt-xxsm">
            <PaginationComponent
              PageCount={this.props.updateEmployerStatsStore.PageCount}
              PageNo={this.props.updateEmployerStatsStore.PageNo}
              onPageClick={(e) => {
                this.onPageClick(e);
              }}
            />
          </div>
        </div>
          <div class="justify-content-around justify-content-md-between mt-lg column">
            <div class="d-flex">
              <span>Click on Job Bar to fetch Demographic and click here</span>
              <div class="mr-md">                
                <button
                  class="gd-ui-button  css-glrvaa"
                  onClick={(event) => {
                    this.fetchDemographics(event);
                  }}
                >
                  Fetch Demographics
                </button>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column">
            <span class="mb-sm">
              <strong>Demographics</strong>
            </span>
          </div>
          <div class="d-flex flex-column">
            <span class="mb-sm">Race/Ethnicity</span>
            <div class="d-flex">
              <div>
                <Chart
                  width={'300px'}
                  height={'300px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7],
                  ]}
                  options={{
                    title: 'My Daily Activities',
                    // Just add this option
                    pieHole: 0.4,
                  }}
                  rootProps={{ 'data-testid': '3' }}
                />
              </div>
            </div>
          </div>
          <div class="d-flex flex-column">
            <span class="mb-sm">Gender</span>
            <div class="d-flex">
              <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Task', 'Hours per Day'],
                  ['Work', 11],
                  ['Eat', 2],
                  ['Commute', 2],
                  ['Watch TV', 2],
                  ['Sleep', 7],
                ]}
                options={{
                  title: 'My Daily Activities',
                  // Just add this option
                  pieHole: 0.4,
                }}
                rootProps={{ 'data-testid': '3' }}
              />
            </div>
          </div>

          <div class="d-flex flex-column">
            <span class="mb-sm">Disability</span>
            <div class="d-flex">
              <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Task', 'Hours per Day'],
                  ['Work', 11],
                  ['Eat', 2],
                  ['Commute', 2],
                  ['Watch TV', 2],
                  ['Sleep', 7],
                ]}
                options={{
                  title: 'My Daily Activities',
                  // Just add this option
                  pieHole: 0.4,
                }}
                rootProps={{ 'data-testid': '3' }}
              />
            </div>
          </div>

          <div class="d-flex flex-column">
            <span class="mb-sm">Veteran Status</span>
            <div class="d-flex">
              <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Task', 'Hours per Day'],
                  ['Work', 11],
                  ['Eat', 2],
                  ['Commute', 2],
                  ['Watch TV', 2],
                  ['Sleep', 7],
                ]}
                options={{
                  title: 'My Daily Activities',
                  // Just add this option
                  pieHole: 0.4,
                }}
                rootProps={{ 'data-testid': '3' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { updateEmployerStatsStore } = state.EmployerReportStatsReducer; 
  return {
    updateEmployerStatsStore: updateEmployerStatsStore,    
  };
};

export default connect(mapStateToProps, null)(RightBlock);
//export default RightBlock;
