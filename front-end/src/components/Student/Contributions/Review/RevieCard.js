import React, { Component } from 'react';
import moment from 'moment';

class RevieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const review = this.props.review;
    const stars = [];
    for (let i = 1; i <= review.Rating; i++) {
      stars.push(i);
    }
    console.log('stars', stars);
    return (
      <tr>
        <td class="summary">
          <p>
            <a href="/Reviews/Employee-Review-Tata-Consultancy-Services-RVW37250114.htm">
              <span class="strong">{review.JobTitle}</span> at {review.CompanyName}
            </a>
          </p>
          <p class="rating">
            <span class="gdStars gdRatings med ">
              {stars.map((star) => (
                <i>
                  <i></i>
                  <i class="star">
                    <span>Star</span>
                  </i>
                </i>
              ))}
            </span>
          </p>
          <p class="strong"> {review.Description}</p>
          <br />
          Pros: <p class="strong"> {review.Pros}</p>
          <br />
          Cons: <p class="strong"> {review.Cons}</p>
        </td>
        <td class="empStatus noWrap hideMob center"> {review.EmployeeStatus}</td>
        <td class="submitted noWrap hideMob center">{moment(review.DatePosted).format('ll')}</td>
        <td class="itemStatus noWrap hideMob center"> {review.Status}</td>
        <td class="actions noWrap center">
          {/*<a href="/member/account/editReview_input.htm?editId=37250114&amp;gdToken=0mclOMbkvweHVLjLoX4Omg%3AA-JscUXxKVuQHMd6OgG0OWLhaVGPs6iVAAeT8zx3px9XCfPtfyTbFqqUsX5Iv4QmagDvC_XoFDqA2y5oHCe_yw%3A4wJ7Bwj8od-rGv-kYisFLMwukqQMBxUEgtw9-TPRjhQ">
                    Edit
                </a>
      &nbsp;&nbsp;|&nbsp;&nbsp;*/}
          <a href="#" onclick={(event) => this.props.delete(event)}>
            Delete
          </a>
        </td>
      </tr>
    );
  }
}

export default RevieCard;
