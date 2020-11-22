import React, { Component } from 'react';
import './PhotoUploadForm.css';
import axios from 'axios';
import serverUrl from '../../../../config';

class PhotoUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  onChangeFileHandler = (event) => {
    if (event.target.files.length === 1) {
      axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
      event.preventDefault();
      let formData = new FormData();
      formData.append('file', event.target.files[0], event.target.files[0].name);
      const imageName = event.target.files[0].name;
      axios({
        method: 'post',
        url: serverUrl + 'student/upload',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          // console.log('Status Code : ', response.status);
          if (response.status === 200) {
            // console.log('Product Saved');
            let photos = this.state.photos;
            photos.push({ imageurl: response.data, name: imageName });
            this.setState({
              photos,
            });
          } else if (parseInt(response.status) === 400) {
            // console.log(response.data);
          }
        })
        .catch((error) => {
          this.setState({
            errorMsg: error.message,
            authFlag: false,
          });
        });
    }
  };

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
                  <h1>Post {localStorage.getItem('form_company_name')} Workplace Photos</h1>
                </div>
              </div>
              <p>
                We encourage you to upload photos that offer a behind-the-scenes look at your
                workplace (e.g. your office, break room, etc.) and are reflective of your company's
                culture.
              </p>
              <div class="photo-survey">
                <form autocomplete="off">
                  {this.state.photos.map((image) => (
                    <div class="photo-add-caption">
                      <div>
                        <img src={image.imageurl} alt="darthVader.jpg" />
                      </div>
                      <div>
                        <p>{image.name}</p>
                      </div>
                    </div>
                  ))}

                  {/* <div class="photo-add-caption">
                    <div>
                      <img src="" alt="caesarSalad.jpg" />
                    </div>
                  </div>*/}
                  <div>
                    <label style={{ width: '100%' }} for="imageupload">
                      <p style={{ cursor: 'pointer' }} class="link center">
                        Or Browse Files
                      </p>

                      <input
                        onChange={this.onChangeFileHandler}
                        id="imageupload"
                        name="imageupload"
                        type="file"
                        aria-labelledby="submit"
                        class="hidden"
                        accept="image/*"
                      />
                    </label>
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
