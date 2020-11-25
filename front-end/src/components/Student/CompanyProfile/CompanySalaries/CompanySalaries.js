import React, { Component } from 'react';
import PaginationComponent from '../../Common/PaginationComponent';
import './CompanySalaries.css';
import axios from 'axios';
import serverUrl from '../../../../config';
import { updateCompanySalariesStore } from '../../../../constants/action-types';
import { connect } from 'react-redux';
import CompanySalaryCard from './CompanySalaryCard';

class CompanySalaries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.commonFetch();
  }

  commonFetch = (PageNo = 0) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .get(serverUrl + 'student/salaryReview', {
        params: {
          CompanyID: localStorage.getItem('companyID'),
          PageNo,
        },
        withCredentials: true,
      })
      .then(
        (response) => {
          console.log('Salaryies', response.data);
          let payload = {
            SalaryList: response.data.results,
            PageNo,
            Totalcount: response.data.count,
            PageCount: Math.ceil(response.data.count / 10),

            // PageCount: Math.ceil(response.data.Totalcount / 3),
          };
          this.props.updateCompanySalariesStore(payload);
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
    return (
      <article id="MainCol">
        <div id="nodeReplace">
          <main class="gdGrid">
            <div data-test="ei-salaries">
              <div class="eiSalaries__EISalariesStyle__salariesContainer module ">
                <div id="SalariesRef">
                  {this.props.companySalariesStore.SalaryList.length === 0 ? (
                    <tr>
                      <td colspan="4">
                        <p> Company have not yet recieved any Salary review. </p>
                      </td>
                    </tr>
                  ) : (
                    ''
                  )}
                  <div data-test="salary-list-items">
                    {this.props.companySalariesStore.SalaryList.map((salary) => (
                      <CompanySalaryCard salary={salary} />
                    ))}
                  </div>
                </div>
                {this.props.companySalariesStore.SalaryList.length > 0 ? (
                  <PaginationComponent
                    PageCount={this.props.companySalariesStore.PageCount}
                    PageNo={this.props.companySalariesStore.PageNo}
                    onPageClick={(e) => {
                      this.onPageClick(e);
                    }}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </main>
        </div>
      </article>
    );
  }
}

// export default CompanySalaries;

const mapStateToProps = (state) => {
  const { companyOverviewStore, companySalariesStore } = state.CompanyPageReducer;

  return {
    companyOverviewStore,
    companySalariesStore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateCompanySalariesStore: (payload) => {
      dispatch({
        type: updateCompanySalariesStore,
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanySalaries);
