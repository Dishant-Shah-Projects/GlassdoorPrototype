import React, { Component } from 'react';
import './Salaries.css';
import { Link } from 'react-router-dom';

class Salaries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="MainCol" style={{ paddingBottom: '0px' }} class="col span-3-4 noPadLt padRt">
        <div id="MyAccountSalaries" class="module">
          <h1>Salaries</h1>
          <Link
            // onClick={(event) => this.props.openCommonContributionPage(event, 'salaries')}
            to="/CommonContribute"
            // href="/mz-survey/start_input.htm?showSurvey=SALARIES&amp;c=PAGE_MYACCOUNT_TOP"
            // id="AddSalary"
            class="gd-btn gd-btn-link gradient gd-btn-1 gd-btn-med ctaButtons margBot"
          >
            <span>Add a Salary</span>
            <i class="hlpr"></i>
          </Link>
          <p> All salaries you've posted are displayed below.</p>
          <table class="std fill tbl">
            <thead>
              <tr>
                <th class="summary chubby middle">Details</th>
                <th class="empStatus hideHH center middle">Employee Status</th>
                <th class="submitted center middle">Submitted</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="summary">
                  <p class="job">
                    <strong>Software Engineer</strong> in Bhubaneswar (India) at Tata Consultancy
                    Services
                    <br />
                  </p>
                  <p class="desc">
                    {' '}
                    ₹32,000<span> monthly</span>
                  </p>
                </td>
                <td class="empStatus center hideHH middle"> Former</td>
                <td class="submitted center nowrap middle"> Oct 16, 2020</td>
                <td class="actions center noWrap middle">
                  <a href="/member/account/editSalary_input.htm?editId=29925291&amp;gdToken=hNopzthp9xvg_Gc0hEJMwg%3ApZwrLPDHSRcSGLOaGgZ3u2qzmRkWAo-GunUwlBfAJmqBXDTtRBVtdFqc0oKykfK2bKfOl5O09NvoeY8G3LQKNg%3AlynaUNXG0LJU6CMkJN7_AJ7kh7TKRBjxvw47W7DQiMw">
                    Edit
                  </a>{' '}
                  &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
                  <a
                    href="/member/account/salaries_execute.htm?deleteId=29925291&amp;gdToken=hNopzthp9xvg_Gc0hEJMwg%3ApZwrLPDHSRcSGLOaGgZ3u2qzmRkWAo-GunUwlBfAJmqBXDTtRBVtdFqc0oKykfK2bKfOl5O09NvoeY8G3LQKNg%3AlynaUNXG0LJU6CMkJN7_AJ7kh7TKRBjxvw47W7DQiMw"
                    onclick="return GD.account.showDeleteContentConfirm('/member/account/salaries_execute.htm?deleteId=29925291&amp;gdToken=hNopzthp9xvg_Gc0hEJMwg%3ApZwrLPDHSRcSGLOaGgZ3u2qzmRkWAo-GunUwlBfAJmqBXDTtRBVtdFqc0oKykfK2bKfOl5O09NvoeY8G3LQKNg%3AlynaUNXG0LJU6CMkJN7_AJ7kh7TKRBjxvw47W7DQiMw', 'Salary');"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Salaries;
