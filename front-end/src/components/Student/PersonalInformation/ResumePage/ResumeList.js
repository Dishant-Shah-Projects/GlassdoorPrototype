import React, { Component } from 'react';
import './ResumeList.css';
import { Redirect } from 'react-router-dom';

class ResumeList extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };
  }
  // openResumeUploadPage = () => {
  // this.props.openResumeUploadPage();
  //   this.setState({
  //     redirect: '/ResumeUploadPage',
  //   });
  // };
  //   openResumeUploadPage = () => {
  //     history.push('/ResumeUploadPage');
  //   };
  render() {
    let redirectVar = null;
    if (this.state.redirect) {
      redirectVar = <Redirect to={this.state.redirect} />;
    }
    return (
      <div class="col-12 col-md-8" style={{ flex: '0 0 66.666667%' }}>
        {redirectVar}
        <div class="resumesPageStyle__resumesPage___10PUZ">
          <div id="ResumePage" class="row flex-row px-lg px-md-0">
            <div class="col-12">
              <div class="manageResumesStyle__resumesContainer___RxX8O">
                <div>
                  <div
                    class="SectionHeaderStyles__sectionHeader___3b_50 pt-sm pt-md-0 d-flex align-items-center justify-content-between no-gutters SectionHeaderStyles__bordered___3i8xM"
                    data-test="sectionHeader"
                  >
                    <div class="d-flex justify-content-start align-items-center">
                      <h1>Manage resumes</h1>
                    </div>
                    <a href="#" onClick={this.props.openResumeUploadPage}>
                      <button
                        // onClick={(event) => event.preventDefault()}
                        // type="button"
                        // onClick={this.openResumeUploadPage}
                        class="gd-ui-button SectionHeaderStyles__addIcon___2YMd- p-0 css-1c2vj07"
                      >
                        <span class="SVGInline">
                          <svg
                            class="SVGInline-svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <circle cx="12" cy="12" fill="#f5f6f7" r="12"></circle>
                              <path
                                d="M12.5 12.5H18h-5.5V7zm0 0V18v-5.5H7z"
                                stroke="#1861bf"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </button>
                    </a>
                  </div>
                  <div>
                    <div class="mx-0 mx-md-xsm pb-md d-flex flex-row justify-content-between align-items-center manageResumesStyle__resume___1cZaU">
                      <div class="mr-xsm d-flex flex-row justify-content-start align-items-center manageResumesStyle__resumeFile___2XwmV">
                        <div class="d-flex flex-column justify-content-start align-items-center undefined">
                          <i class="filePDF"></i>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-start ml-sm manageResumesStyle__resumeFileName___1_0Wo">
                          <a
                            class="manageResumesStyle__downloadLink___2nQj3"
                            href="/member/profileApi/resumeMetaData/fetchResumeUrl.htm?resumeMetaDataId=58508040&amp;gdToken=LlJXpI0YXvcm_g-WmXgwgg:agPtl18ufHZBSb-EPuJxv97PvXgMylxLJEPvxBJ05MPBMLa16p9XoyzN9KGexUyoSAom2iagIqxr2KaT8OsuxQ:hjJwjk4Fkwyr0Y3ljqg9vAgS4SkUeJkxdCy00QolRIo"
                            target="_self"
                            rel="noopener noreferrer"
                            title="Resume.pdf"
                          >
                            Resume.pdf
                          </a>
                          <div style={{ lineHeight: '30px' }}>10/20/2020</div>
                        </div>
                      </div>
                      <button
                        class="gd-ui-button d-flex flex-row align-items-center justify-content-start p-0 manageResumesStyle__deleteResumeBtn___1SIEs css-1c2vj07"
                        data-test="resumesHeaderAddButton"
                      >
                        <div class="manageResumesStyle__icon___vXT_M manageResumesStyle__trashIcon___3acWK">
                          <span class="SVGInline">
                            <svg
                              class="SVGInline-svg"
                              style={{ width: '24', height: '24' }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M13.67 3h-3.34a.75.75 0 00-.75.75V5h4.84V3.71a.75.75 0 00-.75-.71zM15 8a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 0115 8zM9 8a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 019 8zm3 0a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 0112 8zm6-2H6l.21 14.83a.33.33 0 00.32.25l11-.08a.33.33 0 00.32-.26zm-4.33-4a1.75 1.75 0 011.75 1.75V5h5a.53.53 0 01.56.5.54.54 0 01-.56.5H19l-.17 14.8v.07A1.34 1.34 0 0117.5 22H6.55a1.33 1.33 0 01-1.32-1.12v-.07L5 6H3.56A.54.54 0 013 5.46.53.53 0 013.56 5h5V3.71A1.75 1.75 0 0110.33 2z"
                                fill="currentColor"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </button>
                    </div>
                    <div class="mx-0 mx-md-xsm pb-md d-flex flex-row justify-content-between align-items-center manageResumesStyle__resume___1cZaU">
                      <div class="mr-xsm d-flex flex-row justify-content-start align-items-center manageResumesStyle__resumeFile___2XwmV">
                        <div class="d-flex flex-column justify-content-start align-items-center undefined">
                          <i class="filePDF"></i>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-start ml-sm manageResumesStyle__resumeFileName___1_0Wo">
                          <a
                            class="manageResumesStyle__downloadLink___2nQj3"
                            href="/member/profileApi/resumeMetaData/fetchResumeUrl.htm?resumeMetaDataId=58507909&amp;gdToken=LlJXpI0YXvcm_g-WmXgwgg:agPtl18ufHZBSb-EPuJxv97PvXgMylxLJEPvxBJ05MPBMLa16p9XoyzN9KGexUyoSAom2iagIqxr2KaT8OsuxQ:hjJwjk4Fkwyr0Y3ljqg9vAgS4SkUeJkxdCy00QolRIo"
                            target="_self"
                            rel="noopener noreferrer"
                            title="PranjaySagarResume.pdf"
                          >
                            PranjaySagarResume.pdf
                          </a>
                          <div>10/20/2020</div>
                        </div>
                      </div>
                      <button
                        class="gd-ui-button d-flex flex-row align-items-center justify-content-start p-0 manageResumesStyle__deleteResumeBtn___1SIEs css-1c2vj07"
                        data-test="resumesHeaderAddButton"
                      >
                        <div class="manageResumesStyle__icon___vXT_M manageResumesStyle__trashIcon___3acWK">
                          <span class="SVGInline">
                            <svg
                              class="SVGInline-svg"
                              style={{ width: '24', height: '24' }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M13.67 3h-3.34a.75.75 0 00-.75.75V5h4.84V3.71a.75.75 0 00-.75-.71zM15 8a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 0115 8zM9 8a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 019 8zm3 0a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 0112 8zm6-2H6l.21 14.83a.33.33 0 00.32.25l11-.08a.33.33 0 00.32-.26zm-4.33-4a1.75 1.75 0 011.75 1.75V5h5a.53.53 0 01.56.5.54.54 0 01-.56.5H19l-.17 14.8v.07A1.34 1.34 0 0117.5 22H6.55a1.33 1.33 0 01-1.32-1.12v-.07L5 6H3.56A.54.54 0 013 5.46.53.53 0 013.56 5h5V3.71A1.75 1.75 0 0110.33 2z"
                                fill="currentColor"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </button>
                    </div>
                    <div class="mx-0 mx-md-xsm pb-md d-flex flex-row justify-content-between align-items-center manageResumesStyle__resume___1cZaU">
                      <div class="mr-xsm d-flex flex-row justify-content-start align-items-center manageResumesStyle__resumeFile___2XwmV">
                        <div class="d-flex flex-column justify-content-start align-items-center undefined">
                          <i class="filePDF"></i>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-start ml-sm manageResumesStyle__resumeFileName___1_0Wo">
                          <a
                            class="manageResumesStyle__downloadLink___2nQj3"
                            href="/member/profileApi/resumeMetaData/fetchResumeUrl.htm?resumeMetaDataId=58444149&amp;gdToken=LlJXpI0YXvcm_g-WmXgwgg:agPtl18ufHZBSb-EPuJxv97PvXgMylxLJEPvxBJ05MPBMLa16p9XoyzN9KGexUyoSAom2iagIqxr2KaT8OsuxQ:hjJwjk4Fkwyr0Y3ljqg9vAgS4SkUeJkxdCy00QolRIo"
                            target="_self"
                            rel="noopener noreferrer"
                            title="PranjaSagar_Resume.pdf"
                          >
                            PranjaSagar_Resume.pdf
                          </a>
                          <div>10/19/2020</div>
                        </div>
                      </div>
                      <button
                        class="gd-ui-button d-flex flex-row align-items-center justify-content-start p-0 manageResumesStyle__deleteResumeBtn___1SIEs css-1c2vj07"
                        data-test="resumesHeaderAddButton"
                      >
                        <div class="manageResumesStyle__icon___vXT_M manageResumesStyle__trashIcon___3acWK">
                          <span class="SVGInline">
                            <svg
                              class="SVGInline-svg"
                              style={{ width: '24', height: '24' }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M13.67 3h-3.34a.75.75 0 00-.75.75V5h4.84V3.71a.75.75 0 00-.75-.71zM15 8a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 0115 8zM9 8a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 019 8zm3 0a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 0112 8zm6-2H6l.21 14.83a.33.33 0 00.32.25l11-.08a.33.33 0 00.32-.26zm-4.33-4a1.75 1.75 0 011.75 1.75V5h5a.53.53 0 01.56.5.54.54 0 01-.56.5H19l-.17 14.8v.07A1.34 1.34 0 0117.5 22H6.55a1.33 1.33 0 01-1.32-1.12v-.07L5 6H3.56A.54.54 0 013 5.46.53.53 0 013.56 5h5V3.71A1.75 1.75 0 0110.33 2z"
                                fill="currentColor"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeList;
