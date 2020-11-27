import React, { Component } from 'react';
import moment from 'moment';
import defaultplaceholder from '../CompanyProfile/CompanyNavbar/default-placeholder.png';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = { showanswer: false };
  }
  showAnswers = (event) => {
    event.preventDefault();
    this.setState({
      showanswer: !this.state.showanswer,
    });
  };
  render() {
    const interview = this.props.interview;

    return (
      <div id="InterviewQuestionResult_1" class="interviewQuestionWrapper padVertLg">
        <div
          class="interviewQuestion noPad "
          data-brandviews="BRAND:n=hub-interviewQuestion:eid=6036:uid=94575"
        >
          <div class="tbl fill">
            <div id="interview" class="row">
              <div class="cell">
                <div class="tbl fill margBotSm">
                  <div id="interview" class="row">
                    <h3 class="cell p">
                      <span class="authorInfo">
                        <a>
                          {interview.JobTitle} at {interview.CompanyName} was asked...
                        </a>
                      </span>
                    </h3>
                    <div class="cell alignRt noWrap minor hideHH">
                      {' '}
                      {moment(interview.DatePosted).format('ll')}
                    </div>
                  </div>
                </div>
                <div class="question margTopSm">
                  <table class="interviewQuestionText">
                    <tbody>
                      <tr>
                        <td>
                          <p class="questionText h3" style={{ marginBottom: '10px' }}>
                            {' '}
                            {interview.InterviewQuestions}
                          </p>
                          <a
                            onClick={this.showAnswers}
                            class="userResponseLink margTop block hiddenLink mmLink "
                            href="#"
                          >
                            Answer
                            <i
                              class={`caret-blue margLtSm ${
                                this.state.showanswer ? 'rotate180' : ''
                              }`}
                            ></i>
                          </a>
                          <div
                            class="userResponses margTopLg borderTop"
                            style={{ display: this.state.showanswer ? 'block' : 'none' }}
                          >
                            <div class="responseText padTopSm tbl fill">
                              <p class="cell noMargVert padVert borderBot">{interview.Answers}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
