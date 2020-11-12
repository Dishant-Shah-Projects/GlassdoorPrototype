import React, { Component } from 'react';
import '../Salary/Salaries.css';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="MainCol" class="col span-3-4 noPadLt padRt">
        <div class="module" id="MyAccountSalaries">
          <h1>Photos</h1>
          <a
            href="/mz-survey/start_input.htm?showSurvey=PHOTOS&amp;c=PAGE_MYACCOUNT_TOP"
            id="AddPhoto"
            class="gd-btn gd-btn-link gradient gd-btn-1 gd-btn-med ctaButtons margBot"
          >
            <span>Add Photos</span>
            <i class="hlpr"></i>
          </a>
          <p>
            {' '}
            The Glassdoor team reviews every piece of content submitted by users, so please be
            patient. Contributions with the 'Pending' status are being reviewed, and will appear on
            the site once they are approved.
          </p>
          <table class="std fill tbl">
            <thead>
              <tr>
                <th class="summary wide9 middle">Details</th>
                <th class="empStatus center middle">Submitted</th>
                <th class="submitted hideMob middle center">
                  Status [
                  <span
                    class="tt link"
                    title="<table id='StatusHelp'> <caption>About Review Status</caption> <tr> <th>Approved</th> <td> The review is currently available on the site.</td> </tr> <tr> <th>Archived</th> <td> The review is no longer available on the site in an effort to reduce out-of-date or duplicate data.</td> </tr> <tr> <th>Pending</th> <td> The review is currently awaiting approval by the Glassdoor team.</td> </tr> <tr> <th>Removed</th> <td> The review is not available on the site due to a violation of our <a href='/about/guidelines.htm' target='guidelines'>Community Guidelines</a> or due to a failure to meet our minimum requirements for review detail.</td> </tr> <tr> <th>Verification Needed</th> <td> The review needs additional verification from you. To do so, please click 'Verification Needed' and you will be taken to a screen with additional directions.</td> </tr> </table>"
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
                <td colspan="4">
                  <p>
                    {' '}
                    You have not yet submitted any Photos.{' '}
                    <a href="/survey/start_input.htm?showSurvey=PHOTOS&amp;amp;contentOriginHook=PAGE_MYACCOUNT_TOP">
                      Submit a Photo
                    </a>
                    .{' '}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Photos;
