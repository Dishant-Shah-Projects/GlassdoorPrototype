import React, { Component } from 'react';
import '../Salary/Salaries.css';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="MainCol" style={{ paddingBottom: '0px' }} class="col span-3-4 noPadLt padRt">
        <div class="module">
          <h1>Reviews</h1>
          <a
            href="/mz-survey/start_input.htm?showSurvey=REVIEWS&amp;c=PAGE_MYACCOUNT_TOP"
            id="AddReviews"
            class="gd-btn gd-btn-link gradient gd-btn-1 gd-btn-med ctaButtons margBot"
          >
            <span>Write a Review</span>
            <i class="hlpr"></i>
          </a>
          <p>
            {' '}
            The Glassdoor team reviews every piece of content submitted by users, so please be
            patient. Contributions with the 'Pending' status are being reviewed, and will appear on
            the site once they are approved.
          </p>
          <table class="std fill">
            <thead>
              <tr>
                <th class="summary wide5">Details</th>
                <th class="empStatus hyphenate wrap hideMob center">Employee Status</th>
                <th class="submitted hideMob center">Submitted</th>
                <th class="itemStatus hyphenate hideMob center">
                  {' '}
                  Review Status [
                  <span
                    class="tt link"
                    title="<table id='StatusHelp'> <caption>About Review Status</caption> <tr> <th>Approved</th> <td> The review is currently available on the site.</td> </tr> <tr> <th>Archived</th> <td> The review is no longer available on the site in an effort to reduce out-of-date or duplicate data.</td> </tr> <tr> <th>Pending</th> <td> The review or employer is currently awaiting approval by the Glassdoor team.</td> </tr> <tr> <th>Removed</th> <td> The review is not available on the site due to a violation of our <a href='/about/guidelines.htm' target='guidelines'>Community Guidelines</a> or due to a failure to meet our minimum requirements for review detail.</td> </tr> <tr> <th>Verification Needed</th> <td> The review needs additional verification from you. To do so, please click 'Verification Needed' and you will be taken to a screen with additional directions.</td> </tr> </table>"
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
                    <a href="/Reviews/Employee-Review-Tata-Consultancy-Services-RVW37250114.htm">
                      <span class="strong">Software Engineer</span>
                      <br /> in Bhubaneswar (India), at Tata Consultancy Services
                    </a>
                  </p>
                  <p class="rating">
                    <span class="gdStars gdRatings med ">
                      <i>
                        <i></i>
                        <i class="star">
                          <span>Star</span>
                        </i>
                      </i>
                      <i>
                        <i></i>
                        <i class="star">
                          <span>Star</span>
                        </i>
                      </i>
                      <i>
                        <i></i>
                        <i class="star">
                          <span>Star</span>
                        </i>
                      </i>
                      <i>
                        <i></i>
                        <i class="star">
                          <span>Star</span>
                        </i>
                      </i>
                      <i>
                        <i style={{ width: '0.0%' }}></i>
                        <i class="star">
                          <span>Star</span>
                        </i>
                      </i>
                    </span>
                    <br />
                    <span class="strong">
                      <span class="gdRatingDesc "> Satisfied</span>
                    </span>
                  </p>
                  <p class="strong"> “Good for starting a career, not recommend for long term”</p>
                </td>
                <td class="empStatus noWrap hideMob center"> Former</td>
                <td class="submitted noWrap hideMob center"> Oct 17, 2020</td>
                <td class="itemStatus noWrap hideMob center"> Approved</td>
                <td class="actions noWrap center">
                  <a href="/member/account/editReview_input.htm?editId=37250114&amp;gdToken=0mclOMbkvweHVLjLoX4Omg%3AA-JscUXxKVuQHMd6OgG0OWLhaVGPs6iVAAeT8zx3px9XCfPtfyTbFqqUsX5Iv4QmagDvC_XoFDqA2y5oHCe_yw%3A4wJ7Bwj8od-rGv-kYisFLMwukqQMBxUEgtw9-TPRjhQ">
                    Edit
                  </a>{' '}
                  &nbsp;&nbsp;|&nbsp;&nbsp;{' '}
                  <a
                    href="/member/account/reviews_execute.htm?deleteId=37250114&amp;gdToken=0mclOMbkvweHVLjLoX4Omg%3AA-JscUXxKVuQHMd6OgG0OWLhaVGPs6iVAAeT8zx3px9XCfPtfyTbFqqUsX5Iv4QmagDvC_XoFDqA2y5oHCe_yw%3A4wJ7Bwj8od-rGv-kYisFLMwukqQMBxUEgtw9-TPRjhQ"
                    onclick="return GD.account.showDeleteContentConfirm('/member/account/reviews_execute.htm?deleteId=37250114&amp;gdToken=0mclOMbkvweHVLjLoX4Omg%3AA-JscUXxKVuQHMd6OgG0OWLhaVGPs6iVAAeT8zx3px9XCfPtfyTbFqqUsX5Iv4QmagDvC_XoFDqA2y5oHCe_yw%3A4wJ7Bwj8od-rGv-kYisFLMwukqQMBxUEgtw9-TPRjhQ', 'Review');"
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

export default Reviews;
