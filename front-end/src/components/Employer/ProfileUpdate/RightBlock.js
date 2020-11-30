import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import serverUrl from '../../../config.js';
import { connect } from 'react-redux';
import './RightBody.css';

class RightBlock extends Component {
  constructor(props) {
    super(props);  
    this.inputElement = React.createRef();  
    this.state = {
      errorMessage: '',
      CompanyName: '',
      Website: '',
      Size: '',
      ProfileImg: '',
      Type: '',
      Revenue: '',
      Headquarter: '',
      Industry: '',
      Founded: '',
      CompanyDescription: '',
      CompanyMission: '',
      CEO: '',
      City: '',
      State: '',
      authFlag: false, 
      cancelUpdate: false,
      redirect: null, 
      showImageUploadModal: false 
    };
    
  }

  openImageModal = (event) => {
    this.setState({
      showImageUploadModal: !this.state.showImageUploadModal,
    });
  };

  handleClick = (event) => {
    this.inputElement.current.click();
  };

  uploadImage = (event) => {
    if (event.target.files.length === 1) {
      
    }}

  componentDidMount() {
    //set the with credentials to true
    const data = localStorage.getItem('userId');
    console.log(data);
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    //make a post request with the user data')
    axios
      .get(serverUrl + 'company/profile', {
        params: {
          CompanyID: data,
        },
      })
      .then(
        (response) => {
          if (response.status === 200) {
            console.log(response);
            localStorage.setItem('companyName',response.data.CompanyName);
            // let payload = {
            //   CompanyName: response.data.CompanyName,
            //   Website: response.data.Website,
            //   Size: response.data.Size,
            //   ProfileImg: response.data.ProfileImg,
            //   Type: response.data.Type,
            //   Revenue: response.data.Revenue,
            //   Headquarter: response.data.Headquarter,
            //   Industry: response.data.Industry,
            //   Founded: response.data.Founded,
            //   CompanyDescription: response.data.CompanyDescription,
            //   CompanyMission: response.data.CompanyMission,
            //   CEO: response.data.CEO,
            //   City: response.data.City,
            //   State: response.data.State,
            // };
            // console.log('payload', payload);
            // this.props.updateCompanyProfile(payload);
            this.setState({
              CompanyName: response.data.CompanyName,
              Website: response.data.Website,
              Size: response.data.Size,
              ProfileImg: response.data.ProfileImg,
              Type: response.data.Type,
              Revenue: response.data.Revenue,
              Headquarter: response.data.Headquarter,
              Industry: response.data.Industry,
              Founded: response.data.Founded,
              CompanyDescription: response.data.CompanyDescription,
              CompanyMission: response.data.CompanyMission,
              CEO: response.data.CEO,
              City: response.data.City,
              State: response.data.State,              
            });
          }
        },
        (error) => {
          this.setState({
            errorMessage: error.response.data,
          });
        }
      );
  }
  onChangeCommonHandler = (e) => {
    this.setState({
      errorMessage: '',      
    });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  

  handleSubmit = (e) => {
    
    e.preventDefault();
    let CompanyID = localStorage.getItem('userId');

    const data = {
      CompanyID: CompanyID,
      Website: this.state.Website,
      Size: this.state.Size,
      Type: this.state.Type,
      Revenue: this.state.Revenue,
      Headquarter: this.state.Headquarter,
      Industry: this.state.Industry,
      Founded: this.state.Founded,
      CompanyMission: this.state.CompanyMission,
      CEO: this.state.CEO,
      CompanyDescription: this.state.CompanyDescription,
      City: this.state.City,
      State: this.state.State
    };
    console.log(data);
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    axios.post(serverUrl + 'company/profileupdate', data).then(
      (response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response);        
          this.setState({
            authFlag: true,
          });
           let payload = {
              CompanyName: this.state.CompanyName,
              Website: this.state.Website,
              Size: this.state.Size,
              ProfileImg: this.state.ProfileImg,
              Type: this.state.Type,
              Revenue: this.state.Revenue,
              Headquarter: this.state.Headquarter,
              Industry: this.state.Industry,
              Founded: this.state.Founded,
              CompanyDescription: this.state.CompanyDescription,
              CompanyMission: this.state.CompanyMission,
              CEO: this.state.CEO,
              City: this.state.City,
              State: this.state.State,
            };
            console.log('payload', payload);
            this.props.updateCompanyProfile(payload);
          console.log(this.state.authFlag);          
        }
      },
      (error) => {
        console.log(error);
        this.setState({
          errorMessage: error.response.data,          
        });
      }
    );
  };

  handleCancel = () => {        
    this.setState({
      cancelUpdate: true,
    });    
  }
  render() {
    
    let redirectVar = null;
    if(this.state.authFlag === true) {
      redirectVar = <Redirect to="/Employer" />
    }
    if(this.state.cancelUpdate === true) {
      redirectVar = <Redirect to="/Employer" />
    }
    
    return (
      <div className="col-md-8 px-0">
        {redirectVar}
        <div id="PreferencesPage" className="module mb-md PreferencesStyles__preferencesModule___1FDO2">
          <div className="d-flex flex-column flex-md-row-reverse flex-wrap align-items-start align-items-md-center justify-content-md-between PreferencesStyles__visibility___hswA8">
            <div className="mb-xxsm p-xsm PreferencesStyles__visibilityIndicator___2Nfyv">
              Viewable only by you
            </div>
            <h1 className="strong m-0 align-self-start align-self-md-center PreferencesStyles__preferencesHeader___30Q2a">
              Update Profile
            </h1>
          </div>
          <p style={{ paddingBottom: '10px' }}>
            Update the profile information for your company. This information will be visible to
            Students.
          </p>
          <form onSubmit={this.handleSubmit}>
          <div class="d-none d-md-block">
          <div data-test="profilePhoto" id="ProfilePhoto">
            <div class="profilePhotoStyle__profilePhoto___CTVQw">
              <div class="d-inline-flex justify-content-start align-items-center profilePhotoStyle__photoContainer___3itOq">
                <div class="mr-xsm">
                {this.props.companyInfo.ProfileImg ? (                  
                    <img
                      src={this.props.companyInfo.ProfileImg}
                      alt="Profile avatar"
                      class="mb-xsm css-uodor8 css-1k2lqp9"
                    />
                     
                  ) : (
                  <span class="SVGInline profilePhotoStyle__icon___1H_01">
                    <svg
                      class="SVGInline-svg profilePhotoStyle__icon___1H_01-svg"
                      style={{ width: '55px', height: '55px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 7a3 3 0 103 3 3 3 0 00-3-3zm0 9a6 6 0 00-5.33 3.25 9 9 0 0010.66 0A6 6 0 0012 16zm0-14A10 10 0 112 12 10 10 0 0112 2z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  )}
                </div>
                <div class="profilePhotoBadge">
                  <div onClick={this.openImageModal} class="profilePhotoStyle__caption___HtLE-">
                    <span>Add/Update a photo</span>
                  </div>
                </div>
                {this.state.showImageUploadModal ? (
                  <div class="gd-ui-modal css-tb9ljb">
                    <div class="background-overlay" aria-label="Background Overlay"></div>
                    <div class="modal_main ">
                      <span
                        onClick={this.openImageModal}
                        alt="Close"
                        class="SVGInline modal_closeIcon"
                      >
                        <svg
                          class="SVGInline-svg modal_closeIcon-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13.34 12l5.38-5.38a.95.95 0 00-1.34-1.34L12 10.66 6.62 5.28a.95.95 0 00-1.34 1.34L10.66 12l-5.38 5.38a.95.95 0 001.34 1.34L12 13.34l5.38 5.38a.95.95 0 001.34-1.34z"
                            fill="currentColor"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <div class="topShadow"></div>
                      <div class="fullContent">
                        <div class="modal_title">Upload profile picture</div>
                        <div class="modal_content">
                          <div style={{ minWidth: '200px', textAlign: 'center' }}>
                            <div class="h4 m-0">2 MB Max. Minimum 120px x 120px</div>
                            <p class="mt-0 mb-lg _cropmodal__minor___3e2MH">
                              This will replace the current photo if one is already uploaded.
                            </p>
                            <div>
                              <div class="_cropmodal__flexGrid___34tZB _cropmodal__textAlignCenter___2qOZu mt">
                                <div class="m-auto p-0" style={{ height: '200px', width: '200px' }}>
                                  <div
                                    class="_cropmodal__imagePlaceHolder___3oxLX"
                                    style={{
                                      position: 'relative',
                                      width: '200px',
                                      height: '200px',
                                    }}
                                  >
                                    <span class="SVGInline">
                                      <svg
                                        class="SVGInline-svg"
                                        style={{ width: '150px', height: '150px' }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          d="M12 7a3 3 0 103 3 3 3 0 00-3-3zm0 9a6 6 0 00-5.33 3.25 9 9 0 0010.66 0A6 6 0 0012 16zm0-14A10 10 0 112 12 10 10 0 0112 2z"
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                    <div
                                      class="cropit-preview-image-container"
                                      style={{
                                        position: 'absolute',
                                        overflow: 'hidden',
                                        left: '0px',
                                        top: '0px',
                                        width: '100%',
                                        height: '100%',
                                      }}
                                    >
                                      <img
                                        src={this.props.companyInfo.ProfileImg ? this.props.companyInfo.ProfileImg : ''}
                                        class="cropit-preview-image"
                                        alt=""
                                        style={{
                                          transformOrigin: 'left top',
                                          willChange: 'transform',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="my hidden">
                                  <span class="pr-md">
                                    <i class="icon-rotate pointer"></i>
                                  </span>
                                  <span class="_cropmodal__sliders___AIJLy">
                                    <i class="mr-sm icon-picture-small"></i>
                                    <input
                                      type="range"
                                      class="coverZoom"
                                      min="0"
                                      max="1"
                                      step="0.01"
                                    />
                                    <i class="ml-sm icon-picture-large"></i>
                                  </span>
                                </div>
                              </div>
                              <div class="hidden">
                                <input type="file" class="hidden" accept="image/*" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bottomShadow"></div>
                      <div class="actionBar">
                        <button
                          onClick={this.handleClick}
                          class="gd-ui-button  css-uk8w9o"
                          data-test="cropModalPrimary"
                        >
                          <input
                            type="file"
                            ref={this.inputElement}
                            style={{ display: 'none' }}
                            accept=".jpg,.png"
                            onChange={this.uploadImage}
                          />
                          Choose Photo
                        </button>
                        <div class="_cropmodal__cancelButton___3efpJ mt-sm">
                          <button class="gd-ui-button  css-3ybntp" data-test="cropModalCancel">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
            <div className="relative" id="JobSearchStatus">
              <ul>
                <li
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>Website</label>
                  <input type="hidden" name="Website" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="Website"
                            autocomplete="off"
                            name="Website"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.Website}                            
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>Company Size</label>
                  <input type="hidden" name="Company Size" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="Company Size"
                            autocomplete="off"
                            name="Size"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.Size}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </li>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>Company Type</label>
                  <input type="hidden" name="Company Type" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="Company Type"
                            autocomplete="off"
                            name="Type"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.Type}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>Revenue</label>
                  <input type="hidden" name="Revenue" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="Revenue"
                            autocomplete="off"
                            name="Revenue"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.Revenue}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>Headquarters</label>
                  <input type="hidden" name="Headquarters" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="Headquarters"
                            autocomplete="off"
                            name="Headquarter"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.Headquarter}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>Industry</label>
                  <input type="hidden" name="Industry" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="Industry"
                            autocomplete="off"
                            name="Industry"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.Industry}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>City</label>
                  <input type="hidden" name="City" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="City"
                            autocomplete="off"
                            name="City"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.City}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>State</label>
                  <input type="hidden" name="State" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="State"
                            autocomplete="off"
                            name="State"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.State}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>Founded</label>
                  <input type="hidden" name="Founded" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="Founded"
                            autocomplete="off"
                            name="Founded"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.Founded}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>CEO Name</label>
                  <input type="hidden" name="CEO Name" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="CEO Name"
                            autocomplete="off"
                            name="CEO"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.CEO}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>About</label>
                  <input type="hidden" name="About" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="About"
                            autocomplete="off"
                            name="CompanyDescription"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.CompanyDescription}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="ajax-input"
                  style={{
                    '-webkit-box-align': 'center',
                    'align-items': 'center',
                    'flex-wrap': 'wrap',
                    width: 'auto',
                    'margin-bottom': '16px',
                  }}
                >
                  <label style={{ paddingBottom: '5px' }}>Mission</label>
                  <input type="hidden" name="Mission" value="0" />
                  <div className=" css-1ohf0ui">
                    <div aria-expanded="false" aria-autocomplete="list" className="css-1xtvih1">
                      <div className=" css-1ohf0ui">
                        <div className="input-wrapper css-q444d9">
                          <input
                            placeholder="Mission"
                            autocomplete="off"
                            name="CompanyMission"
                            type="text"
                            id="userEnteredOccupationInput-jobTitleId"
                            data-test=""
                            aria-label=""
                            className="css-1sk6eli"
                            onChange={this.onChangeCommonHandler}
                            value={this.state.CompanyMission}
                          />
                        </div>
                      </div>
                      <ul className="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
              <button
                className="gd-ui-button ml-std col-auto css-iixdfr"
                type="submit"
                data-test="search-bar-submit"
                style={{width: "20%"}}
              >
                <span>Submit</span>             
              
              </button>
              <button
                className="gd-ui-button ml-std col-auto css-iixdfr"
                type="button"
                data-test="search-bar-submit"
                style={{width: "20%", 
                        backgroundColor: "#fff", 
                        border: "1px solid #0caa41", 
                        color: "#0caa41",
                        "margin-left": "10px"}}
                onClick={this.handleCancel}
              >
                <span>Cancel</span>
                </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { companyInfo } = state.CompaniesProfileReducer;
  return {
    companyInfo,
  };
};

export default connect(mapStateToProps, null)(RightBlock);
//export default RightBlock;
