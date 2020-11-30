import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../../../config.js';
import { showPostJobModal, hidePostJobModal } from '../../../constants/action-types';
import { connect } from 'react-redux';

class PostJobModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyID: localStorage.getItem('userId'),
      CompanyName: '',
      Title: '',
      JobDescription: '',
      Responsibilities: '',
      Qualifications: '',
      ExpectedSalary: 0,
      Industry: '',
      Country: '',
      Remote: '',
      StreetAddress: '',
      City: '',
      State: '',
      Zip: '',
      errorMessage: '',
    };
  }

  handleOnChange = (e) => {
    this.setState({
      errorMessage: '',
    });
    if (e.target.name === 'Zip') {
      if (/^(\s*|\d+)$/.test(e.target.value)) {
         this.setState({
           ...this.state,
           [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
         });
      }
     
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
      });
    }
  };

  cancelChanges = () => {
    this.props.hidePostJobModal();
  };

  saveJob = () => {
    let JobDetails = {
      CompanyID: this.state.CompanyID,
      CompanyName: this.state.CompanyName,
      Title: this.state.Title,
      JobDescription: this.state.JobDescription,
      Responsibilities: this.state.Responsibilities,
      Qualifications: this.state.Qualifications,
      ExpectedSalary: this.state.ExpectedSalary,
      Industry: this.state.Industry,
      Country: this.state.Country,
      Remote: this.state.Remote,
      StreetAddress: this.state.StreetAddress,
      City: this.state.City,
      State: this.state.State,
      Zip: this.state.Zip
    };
    console.log('state', this.state);
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios
      .post(serverUrl + 'company/postJob', JobDetails)
      .then((response) => {
        if (response.status == 201) {
          this.props.hidePostJobModal();
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: 'Job not saved',
        });
      });
  };

  render() {
    return (
      <div class="modal_main ">       
        <div class="topShadow"></div>
        <div class="fullContent">
          <div class="modal_title">Add Job</div>
          <div class="modal_content">
            <div>
              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b7ea7-0803-df5f-1b37-572164c68be6" class="css-1opum1l">
                  <span>Job Title</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="Title"
                        autocomplete="off"
                        name="Title"
                        id="Autocomplete-b7ea7-0803-df5f-1b37-572164c68be6"
                        data-test=""
                        aria-label="Title"
                        class="css-ofiv3k"
                        value={this.state.Title}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <ul class="suggestions down"></ul>
                  <div>
                    <div data-test="FilterChips"></div>
                  </div>
                </div>
              </div>
              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>Company Name</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="Company Name"
                        autocomplete="off"
                        name="CompanyName"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="Company Name"
                        class="css-ofiv3k"
                        value={this.state.CompanyName}                        
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="experienceStyle__description___1wJ2R css-1ohf0ui">
                <label for="" class="css-1opum1l">
                  <span>Description</span>
                </label>
                <div class="input-wrapper css-q444d9">
                  <textarea
                    rows="5"
                    placeholder="Description"
                    data-test="description"
                    name="JobDescription"
                    maxlength="2000"
                    aria-label=""
                    class="css-1q8a8vk"
                    value={this.state.JobDescription}
                    onChange={(event) => this.handleOnChange(event)}
                  ></textarea>
                </div>
              </div>

              <div class="experienceStyle__description___1wJ2R css-1ohf0ui">
                <label for="" class="css-1opum1l">
                  <span>Responsiblity</span>
                </label>
                <div class="input-wrapper css-q444d9">
                  <textarea
                    rows="5"
                    placeholder="Responsiblity"
                    data-test="Responsiblity"
                    name="Responsibilities"
                    maxlength="2000"
                    aria-label=""
                    class="css-1q8a8vk"
                    value={this.state.Responsibilities}
                    onChange={(event) => this.handleOnChange(event)}
                  ></textarea>
                </div>
              </div>
              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>Qualifications</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="Qualifications"
                        autocomplete="off"
                        name="Qualifications"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="Qualifications"
                        class="css-ofiv3k"
                        value={this.state.Qualifications}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>Salary</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        type="number"
                        min="0"
                        placeholder="Salary"
                        autocomplete="off"
                        name="ExpectedSalary"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="Salary"
                        class="css-ofiv3k"
                        value={this.state.ExpectedSalary}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>Industry</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="Industry"
                        autocomplete="off"
                        name="Industry"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="Industry"
                        class="css-ofiv3k"
                        value={this.state.Industry}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>Country</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="Country"
                        autocomplete="off"
                        name="Country"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="Country"
                        class="css-ofiv3k"
                        value={this.state.Country}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>Remote</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="Remote"
                        autocomplete="off"
                        name="Remote"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="Remote"
                        class="css-ofiv3k"
                        value={this.state.Remote}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>Street Address</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="Street Address"
                        autocomplete="off"
                        name="StreetAddress"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="Street Address"
                        class="css-ofiv3k"
                        value={this.state.StreetAddress}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>City</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="City"
                        autocomplete="off"
                        name="City"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="City"
                        class="css-ofiv3k"
                        value={this.state.City}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>State</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="State"
                        autocomplete="off"
                        name="State"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="State"
                        class="css-ofiv3k"
                        value={this.state.State}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="pb-sm css-1ohf0ui">
                <label for="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71" class="css-1opum1l">
                  <span>Zip</span>
                </label>
                <div
                  aria-expanded="false"
                  role="combobox"
                  aria-autocomplete="list"
                  class="css-1xtvih1"
                >
                  <div class=" css-1ohf0ui">
                    <div class="input-wrapper css-q444d9">
                      <input
                        placeholder="Zip"
                        autocomplete="off"
                        type="text"
                        maxlength='5'
                        name="Zip"
                        id="Autocomplete-b230ed-362-3f5-8c0d-1bb5d0363b71"
                        data-test=""
                        aria-label="Zip"
                        class="css-ofiv3k"                        
                        value={this.state.Zip}                        
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottomShadow"></div>
        <div class="actionBar">
          <div class="experienceStyle__actionBar___2lnIS" style={{position:"absolute"}}>
            <button
              class="gd-ui-button d-none d-md-inline-block mr-md-sm mb-sm css-3ybntp"
              data-test="cancelChanges"
              onClick={() => this.cancelChanges()}
            >
              Cancel
            </button>
            <button
              class="gd-ui-button mb-sm css-uk8w9o"
              data-test="saveChanges"
              onClick={() => this.saveJob()}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//export default ApplicantsList;
const mapStateToProps = (state) => {
  const { postJobModalStore } = state.ApplicantsListModalReducer;
  return {
    postJobModalStore: postJobModalStore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hidePostJobModal: (payload) => {
      dispatch({
        type: hidePostJobModal,
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostJobModal);
//export default ApplicantsList;
