import React, { Component } from 'react';
import moment from 'moment';

class SalaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  abbrNum = (number, decPlaces = 2) => {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);
    // Enumerate number abbreviations
    var abbrev = ['k', 'm', 'b', 't'];
    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3);
      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round((number * decPlaces) / size) / decPlaces;

        // Handle special case where we round up to the next abbreviation
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1;
          i++;
        }

        // Add the letter for the abbreviation
        number += abbrev[i];

        // We are done... stop
        break;
      }
    }

    return number;
  };

  render() {
    const salary = this.props.salary;
    const salaryValue = this.abbrNum(salary.BaseSalary + salary.Bonuses);
    return (
      <tr>
        <td class="summary">
          <p class="job">
            <strong>{salary.JobTitle}</strong> at {salary.CompanyName}
            <br />
          </p>
          <p class="desc">
            {' '}
            {salaryValue} $<span> yearly</span>
          </p>
        </td>
        <td class="submitted center nowrap middle"> {moment(salary.DatePosted).format('ll')}</td>
        <td class="actions center noWrap middle">
          {/*<a href="/member/account/editSalary_input.htm?editId=29925291&amp;gdToken=hNopzthp9xvg_Gc0hEJMwg%3ApZwrLPDHSRcSGLOaGgZ3u2qzmRkWAo-GunUwlBfAJmqBXDTtRBVtdFqc0oKykfK2bKfOl5O09NvoeY8G3LQKNg%3AlynaUNXG0LJU6CMkJN7_AJ7kh7TKRBjxvw47W7DQiMw">
                    Edit
        </a>
      &nbsp;&nbsp;|&nbsp;&nbsp;*/}
          <a
            href="/member/account/salaries_execute.htm?deleteId=29925291&amp;gdToken=hNopzthp9xvg_Gc0hEJMwg%3ApZwrLPDHSRcSGLOaGgZ3u2qzmRkWAo-GunUwlBfAJmqBXDTtRBVtdFqc0oKykfK2bKfOl5O09NvoeY8G3LQKNg%3AlynaUNXG0LJU6CMkJN7_AJ7kh7TKRBjxvw47W7DQiMw"
            onclick="return GD.account.showDeleteContentConfirm('/member/account/salaries_execute.htm?deleteId=29925291&amp;gdToken=hNopzthp9xvg_Gc0hEJMwg%3ApZwrLPDHSRcSGLOaGgZ3u2qzmRkWAo-GunUwlBfAJmqBXDTtRBVtdFqc0oKykfK2bKfOl5O09NvoeY8G3LQKNg%3AlynaUNXG0LJU6CMkJN7_AJ7kh7TKRBjxvw47W7DQiMw', 'Salary');"
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}

export default SalaryCard;
