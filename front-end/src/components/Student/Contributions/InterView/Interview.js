import React, { Component } from 'react';
import '../Salary/Salaries.css';

class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="MainCol" class="col span-3-4 noPadLt padRt">
        <div class="module" id="MyAccountSalaries">
          <h1>Inter­views</h1>
          <a
            href="/mz-survey/start_input.htm?showSurvey=INTERVIEWS&amp;c=PAGE_MYACCOUNT_TOP"
            id="AddInterview"
            class="gd-btn gd-btn-link gradient gd-btn-1 gd-btn-med ctaButtons margBot"
          >
            <span>Share an Interview</span>
            <i class="hlpr"></i>
          </a>
          <p>
            {' '}
            The Glassdoor team reviews every piece of content submitted by users, so please be
            patient. Contributions with the 'Pending' status are being reviewed, and will appear on
            the site once they are approved.
          </p>
          <p>
            <strong>Please Note:</strong> Inter­views older than 30 days may not be edited.
          </p>
          <table class="std fill tbl">
            <thead>
              <tr>
                <th class="summary wide11">Details</th>
                <th class="submitted center">Submitted</th>
                <th class="itemStatus hideMob center">
                  {' '}
                  Review Status [
                  <span
                    class="tt link"
                    title="<table id='StatusHelp'> <caption>About Interview Status</caption> <tr> <th>Approved</th> <td> The interview is currently available on the site.</td> </tr> <tr> <th>Archived</th> <td> The interview is no longer available on the site in an effort to reduce out-of-date or duplicate data.</td> </tr> <tr> <th>Pending</th> <td> The interview is currently awaiting approval by the Glassdoor team.</td> </tr> <tr> <th>Removed</th> <td> The interview is not available on the site due to a violation of our <a href='/about/guidelines.htm' target='guidelines'>Community Guidelines</a> or due to a failure to meet our minimum requirements for review detail.</td> </tr> <tr> <th>Verification Needed</th> <td> The interview needs additional verification from you. To do so, please click 'Verification Needed' and you will be taken to a screen with additional directions.</td> </tr> </table>"
                  >
                    ?
                  </span>
                  ]{' '}
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="summary">
                  <p>
                    <strong>Software Engineer(Internship)</strong> at <strong>Okta</strong>
                  </p>
                  <p>
                    <strong> Interviewed Oct 2020 in San Jose, CA</strong>
                  </p>
                  <p>
                    {' '}
                    “Online, Live coding was monitored by the interviewer. Guiding after each step.
                    Was asked to implement List via class and some...”
                  </p>
                </td>
                <td class="submitted center"> Nov 10, 2020</td>
                <td class="itemStatus hideMob center"> Pending</td>
                <td class="actions center noWrap">
                  <a href="/member/account/editInterview_input.htm?editId=38213485&amp;gdToken=KHHEmO68WzDfNopVTPHw_w%3AMQFMIcRK2h7CuTbpk18qNXS_vgJg3Fu1f1Y2qm_3Kre-KPP_Sch4oLGVC3Adc8V-SPEZ2WoRsCk9hoK9zZdqcA%3Ah1yX63Ywq_qPtBqVDb6WXjZFftZU3lin7oj6qHsXjqM">
                    Edit
                  </a>{' '}
                  &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
                  <a
                    href="/member/account/interviews_execute.htm?deleteId=38213485&amp;gdToken=KHHEmO68WzDfNopVTPHw_w%3AMQFMIcRK2h7CuTbpk18qNXS_vgJg3Fu1f1Y2qm_3Kre-KPP_Sch4oLGVC3Adc8V-SPEZ2WoRsCk9hoK9zZdqcA%3Ah1yX63Ywq_qPtBqVDb6WXjZFftZU3lin7oj6qHsXjqM"
                    onclick="return GD.account.showDeleteContentConfirm('/member/account/interviews_execute.htm?deleteId=38213485&amp;gdToken=KHHEmO68WzDfNopVTPHw_w%3AMQFMIcRK2h7CuTbpk18qNXS_vgJg3Fu1f1Y2qm_3Kre-KPP_Sch4oLGVC3Adc8V-SPEZ2WoRsCk9hoK9zZdqcA%3Ah1yX63Ywq_qPtBqVDb6WXjZFftZU3lin7oj6qHsXjqM', 'Interview');"
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

export default Interview;
