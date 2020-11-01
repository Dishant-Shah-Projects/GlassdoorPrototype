import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../../../config';
import Navbar from '../Common/Navbar';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { jobList: [] };
  }
  componentDidMount() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'student/jobSuggestions', {
        params: { StudentID: localStorage.getItem('userId') },
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          jobList: response.data,
        });
      });
  }
  componentDidMount() {   
  }
  render() {
    return (
      <div>
        {<Navbar />}
        <div id="Discover">
          <div>
            <div>
              <div className="container-max-width mx-auto px-std px-md-lg pt-xsm pt-md-xxl pb-xxl">
                <div className="d-flex flex-direction-column row">
                  {<LeftBlock />}
                  {<RightBlock jobList={this.state.jobList} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
