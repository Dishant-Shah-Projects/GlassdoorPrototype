import React, { Component } from 'react';
import './RightBlock.css';
import DonutChart from 'react-donut-chart';
import axios from 'axios';
import serverUrl from '../../../config.js';

class RightBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

componentDidMount() {
  axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'company/report', {
        params: { CompanyID: localStorage.getItem('userId'), PageNo: 0 },
        withCredentials: true,
      })
      .then((response) => {
        if (response.status == 200) {
          console.log('response', response.data.results);
          
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: 'No Reviews Found',
        });
      });
}
  render() {
    return (
      <div>
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex flex-column">
            <span class="mb-sm">Jobs Statistics</span>
            <div class="d-flex">
              <DonutChart
                data={[
                  {
                    label: 'Give you up',
                    value: 25,
                  },
                  {
                    label: '',
                    value: 75,
                    isEmpty: true,
                  },                  
                ]}
                width={200}
              />
              <div class="ml-xsm css-1dach6o ee3ubnb0">
                <div class="d-flex pb-sm c0 css-1adfoly ee3ubnb1">
                  <span class="mr-xsm">Positive</span>
                  <span class="ml-auto">69%</span>
                </div>
                <div class="d-flex pb-sm c1 css-1adfoly ee3ubnb1">
                  <span class="mr-xsm">Negative</span>
                  <span class="ml-auto">11%</span>
                </div>
                <div class="d-flex pb-sm c2 css-1adfoly ee3ubnb1">
                  <span class="mr-xsm">Neutral</span>
                  <span class="ml-auto">19%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column">
            <span class="mb-sm">Getting an Interview</span>
            <div class="d-flex">
              <div>
                <svg width="59.68310365946075" height="59.68310365946075">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="23.8732414637843"
                    fill="transparent"
                    stroke="#ccc"
                    stroke-width="10"
                  ></circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="23.8732414637843"
                    fill="transparent"
                    stroke="#0c4085"
                    stroke-width="10"
                    stroke-dasharray="46 104"
                    stroke-dashoffset="37.5"
                  ></circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="23.8732414637843"
                    fill="transparent"
                    stroke="#25a1a1"
                    stroke-width="10"
                    stroke-dasharray="46 104"
                    stroke-dashoffset="141.5"
                  ></circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="23.8732414637843"
                    fill="transparent"
                    stroke="#a068e8"
                    stroke-width="10"
                    stroke-dasharray="27 123"
                    stroke-dashoffset="95.5"
                  ></circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="23.8732414637843"
                    fill="transparent"
                    stroke="#90d966"
                    stroke-width="10"
                    stroke-dasharray="17 133"
                    stroke-dashoffset="68.5"
                  ></circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="23.8732414637843"
                    fill="transparent"
                    stroke="#2aabde"
                    stroke-width="10"
                    stroke-dasharray="6 144"
                    stroke-dashoffset="51.5"
                  ></circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="23.8732414637843"
                    fill="transparent"
                    stroke="#ea7600"
                    stroke-width="10"
                    stroke-dasharray="5 145"
                    stroke-dashoffset="45.5"
                  ></circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="23.8732414637843"
                    fill="transparent"
                    stroke="#858c94"
                    stroke-width="10"
                    stroke-dasharray="4 146"
                    stroke-dashoffset="40.5"
                  ></circle>
                </svg>
              </div>
              <div class="ml-xsm css-1dach6o ee3ubnb0">
                <div class="d-flex pb-sm c0 css-1adfoly ee3ubnb1">
                  <span class="mr-xsm">Campus Recruiting</span>
                  <span class="ml-auto">31%</span>
                </div>
                <div class="d-flex pb-sm c1 css-1adfoly ee3ubnb1">
                  <span class="mr-xsm">Applied online</span>
                  <span class="ml-auto">30%</span>
                </div>
                <div class="d-flex pb-sm c2 css-1adfoly ee3ubnb1">
                  <span class="mr-xsm">Employee Referral</span>
                  <span class="ml-auto">18%</span>
                </div>
              </div>
            </div>
            <div>
              <button class="css-1qy4jkk ee3ubnb2">More</button>
            </div>
          </div>
          <div class="d-flex flex-column">
            <span class="mb-sm">Difficulty</span>
            <div class="d-flex">
              <div class="align-self-center">
                <div class="css-155sv15 e1webdg50">3.0</div>Average
              </div>
              <div class="pl-sm">
                <div class="d-flex">
                  <div class="mr-xsm d-flex flex-column-reverse">
                    <span class="mt-xxsm green css-ignl0t e1webdg52"></span>
                    <span class="mt-xxsm green css-ignl0t e1webdg52"></span>
                    <span class="mt-xxsm css-1a7fmfp e1webdg52"></span>
                    <span class="mt-xxsm css-ignl0t e1webdg52"></span>
                    <span class="mt-xxsm css-ignl0t e1webdg52"></span>
                  </div>
                  <div class="col d-flex flex-column justify-content-between css-i7cnje e1webdg51">
                    <span>Hard</span>
                    <span>Average</span>
                    <span>Easy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightBlock;
