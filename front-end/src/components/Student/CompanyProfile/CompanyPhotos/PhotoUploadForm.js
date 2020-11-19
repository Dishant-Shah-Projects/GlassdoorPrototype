import React, { Component } from 'react';
import './PhotoUploadForm.css';

class PhotoUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main id="mount">
        <div>
          <header id="header">
            <div class="background">
              <nav>
                <div class="logoContainer">
                  <a class="logo green " aria-label="Go To Glassdoor homepage"></a>
                </div>
              </nav>
            </div>
          </header>
          <div></div>
          <div class="article-aside">
            <article class="module">
              <div class="survey-two-column">
                <div>
                  <img
                    src="https://media.glassdoor.com/sqlm/6036/amazon-squarelogo-1552847650117.png"
                    alt="Amazon Logo"
                    class="square-logo sm "
                    data-original="https://media.glassdoor.com/sqlm/6036/amazon-squarelogo-1552847650117.png"
                  />
                </div>
                <div>
                  <h1>Post Amazon Workplace Photos</h1>
                </div>
              </div>
              <p>
                We encourage you to upload photos that offer a behind-the-scenes look at your
                workplace (e.g. your office, break room, etc.) and are reflective of your company's
                culture.
              </p>
              <div class="photo-survey">
                <form autocomplete="off">
                  <div class="photo-add-caption">
                    <div>
                      <img src="" alt="darthVader.jpg" />
                    </div>
                  </div>
                  <div class="photo-add-caption">
                    <div>
                      <img src="" alt="caesarSalad.jpg" />
                    </div>
                  </div>
                  <div>
                    <p class="link center">Or Browse Files</p>
                    <input type="file" aria-labelledby="submit" class="hidden" accept="image/*" />
                  </div>
                  <button class="gd-ui-button submitButton css-8i7bc2" type="submit" id="submit">
                    Upload Photos
                  </button>
                </form>
              </div>
            </article>
          </div>
        </div>
      </main>
    );
  }
}

export default PhotoUploadForm;
