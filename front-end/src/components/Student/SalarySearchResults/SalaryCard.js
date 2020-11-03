import React, { Component } from 'react';
class SalaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        id="salaryCardFlex"
        class="row mx-0 py-std css-l8rlna e8dz1vs0"
        data-test="employer-salary-tile"
      >
        <div class="col-auto pl-0">
          <a href="/Salary/Amazon-Salaries-E6036.htm" class="css-1hwaofw e1jqxwq80">
            <img
              src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png"
              alt="Amazon"
            />
          </a>
        </div>
        <div class="col d-flex justify-content-between pl-std">
          <div>
            <a href="/Salary/Amazon-Salaries-E6036.htm">
              <h3 class="link m-0 css-1v81xpy e8dz1vs2">Amazon</h3>
            </a>
            <div class="css-1uyte9r e8dz1vs1">www.amazon.jobs</div>
          </div>
          <a href="/Salary/Amazon-Salaries-E6036.htm" class="d-flex flex-column align-items-center">
            <h3 class="m-0 css-1v81xpy e8dz1vs2">68.7K</h3>
            <span>Salaries</span>
          </a>
        </div>
      </div>
    );
  }
}

export default SalaryCard;
