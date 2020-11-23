import React, { Component } from 'react';
import {
  LowerNavBarOther,
  updateCompanyOverview,
  updateStudentProfile,
} from '../../../../constants/action-types';
import { connect } from 'react-redux';
import './JobApplicationPage.css';
import defaultplaceholder from '../CompanyNavbar/default-placeholder.png';
import axios from 'axios';
import serverUrl from '../../../../config';

class JobApplicationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: { url: '', name: '' },
      coverLetter: { url: '', name: '' },
      errormsg: false,
    };
  }

  onChangeResumeHandler = (event) => {
    if (event.target.files.length === 1) {
      axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
      event.preventDefault();
      let formData = new FormData();
      formData.append('file', event.target.files[0], event.target.files[0].name);
      const resumeName = event.target.files[0].name;
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
            const resume = { url: response.data, name: resumeName };

            this.setState({
              resume,
              errormsg: false,
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

  onChangeCoverLetterHandler = (event) => {
    if (event.target.files.length === 1) {
      axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
      event.preventDefault();
      let formData = new FormData();
      formData.append('file', event.target.files[0], event.target.files[0].name);
      const coverLetterName = event.target.files[0].name;
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
            const coverLetter = { url: response.data, name: coverLetterName };

            this.setState({
              coverLetter,
              errormsg: false,
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

  applyJob = (event) => {
    event.preventDefault();
    if (this.state.resume.name === '' || this.state.coverLetter.name === '') {
      this.setState({
        errormsg: true,
      });
    } else {
      // event.preventDefault();
      axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
      const data = {
        StudentID: localStorage.getItem('userId'),
        JobID: localStorage.getItem('application_job_id'),
        StudentName: this.props.studentInfoStore.studentProfile.Name,
        ResumeURL: this.state.resume.url,
        CoverLetterURL: this.state.coverLetter.url,
      };
      axios.post(serverUrl + 'student/companyApplyJob', data).then(
        (response) => {
          console.log('Status Code : ', response.status);
          if (response.status === 200) {
            this.setState({
              resume: { url: '', name: '' },
              coverLetter: { url: '', name: '' },
              errormsg: false,
            });
          }
        },
        (error) => {
          console.log('error:', error.response);
        }
      );
    }
  };

  saveJob = (event) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    const data = {
      JobID: localStorage.getItem('application_job_id'),
      StudentID: localStorage.getItem('userId'),
    };
    axios.post(serverUrl + 'student/companyFavouriteJobs', data).then(
      (response) => {
        console.log('Status Code : ', response.status);
        if (response.status === 200) {
          console.log(response.data);

          let studentProfile = { ...this.props.studentInfoStore.studentProfile };
          studentProfile.FavouriteJobs.push(localStorage.getItem('application_job_id'));
          const payload = {
            studentProfile,
          };
          this.props.updateStudentProfile(payload);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  unsaveJob = (event) => {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    const data = {
      JobID: localStorage.getItem('application_job_id'),
      StudentID: localStorage.getItem('userId'),
    };
    axios.post(serverUrl + 'student/removeFavouriteJobs', data).then(
      (response) => {
        console.log('Status Code : ', response.status);
        if (response.status === 200) {
          console.log(response.data);

          let studentProfile = { ...this.props.studentInfoStore.studentProfile };
          var index = studentProfile.FavouriteJobs.indexOf(
            localStorage.getItem('application_job_id')
          );
          if (index !== -1) {
            studentProfile.FavouriteJobs.splice(index, 1);
          }
          // studentProfile.FavouriteJobs.push(JobID);
          const payload = {
            studentProfile,
          };
          this.props.updateStudentProfile(payload);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  render() {
    let alreadyFav = false;
    let heartIcon = (
      <path
        d="M12 5.11l.66-.65a5.56 5.56 0 017.71.19 5.63 5.63 0 010 7.92L12 21l-8.37-8.43a5.63 5.63 0 010-7.92 5.56 5.56 0 017.71-.19zm7.66 6.75a4.6 4.6 0 00-6.49-6.51L12 6.53l-1.17-1.18a4.6 4.6 0 10-6.49 6.51L12 19.58z"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    );
    if (
      this.props.studentInfoStore.studentProfile.FavouriteJobs.includes(
        localStorage.getItem('application_job_id')
      )
    ) {
      alreadyFav = true;
      heartIcon = (
        <path
          d="M20.37 4.65a5.57 5.57 0 00-7.91 0l-.46.46-.46-.46a5.57 5.57 0 00-7.91 0 5.63 5.63 0 000 7.92L12 21l8.37-8.43a5.63 5.63 0 000-7.92z"
          fill="currentColor"
          fill-rule="evenodd"
        ></path>
      );
    }
    this.props.LowerNavBarOther();
    const defaultCoverPic =
      'https://s3-media0.fl.yelpcdn.com/assets/public/defaultBusinessHeaderImage.yji-a94634351a246719545b17b9bddc388f.png';

    return (
      <div class="gdGrid pageContentWrapperStudent ">
        <div style={{ width: '1024px' }} id="PageContent" class="">
          <div id="PageBodyContents" class="meat">
            <div id="JobView">
              <div class="css-1snhjc9 ejc001y0">
                <div id="EmpHero" class=" css-8phuvf et5pnof0">
                  <div
                    class="content css-1btihuh et5pnof1"
                    data-employer-id="100431"
                    data-test="company-banner"
                  >
                    <img
                      alt="Cover for Amazon"
                      class="lazy"
                      src={
                        localStorage.getItem('CoverPhoto')
                          ? localStorage.getItem('CoverPhoto')
                          : defaultCoverPic
                      }
                    />
                  </div>
                </div>
                <div class="" style={{}}>
                  <div style={{}}>
                    <div class="ctasTest d-block p-0 css-13kzq25 efy8art0">
                      <div class="d-flex flex-column px pt m-0 smarterBannerEmpInfo false">
                        <div class="d-flex">
                          <div class="d-flex pb css-29jl6 efy8art3">
                            <div class="css-f4rs18 css-7xi6we epu0oo20">
                              <a
                                class="mt-0 css-1sltc87 epu0oo21"
                                href="/Overview/Working-at-Amazon-EI_IE6036.11,17.htm"
                                target="_blank"
                              >
                                <span class="css-13u5hxa epu0oo22">
                                  <img
                                    alt="Amazon Logo"
                                    class="lazy"
                                    src={
                                      localStorage.getItem('ProfileImg')
                                        ? localStorage.getItem('ProfileImg')
                                        : defaultplaceholder
                                    }
                                  />
                                </span>
                              </a>
                            </div>
                            <div class="css-f4rs18 css-1e169oc efy8art2">
                              <div class="d-flex flex-column">
                                <div class="css-ur1szg e11nt52q0">
                                  <div class="css-16nw49e e11nt52q1">
                                    Amazon
                                    <span class="css-1pmc6te e11nt52q4">
                                      4.3<span class="css-mfns2c e11nt52q5">★</span>
                                    </span>
                                  </div>
                                  <div class="css-17x2pwl e11nt52q6">Software Engineer II</div>
                                  <div class="css-1v5elnn e11nt52q2">Hyderābād</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="css-1yurns8 efy8art1">
                            <div class="css-radise een4i1m1">
                              <div class="css-1niemjw een4i1m0">
                                <div class="css-0 e1h54cx80">
                                  <a
                                    class="gd-ui-button applyButton e1ulk49s0 css-1m0gkmt"
                                    onClick={this.applyJob}
                                    href="#"
                                    rel="nofollow"
                                  >
                                    <i class="icon-offsite-white mr-sm"></i>
                                    <span>Apply Now</span>
                                    <i class="hlpr"></i>
                                  </a>
                                </div>
                                <div style={{ paddingLeft: '16px' }} class="css-0 e1h54cx80">
                                  <a
                                    class="gd-ui-button applyButton e1ulk49s0 css-1m0gkmt"
                                    href="#"
                                    rel="nofollow"
                                  >
                                    <label style={{ width: '100%' }} for="resumeUpload">
                                      <span>Upload Resume</span>

                                      <input
                                        onChange={this.onChangeResumeHandler}
                                        id="resumeUpload"
                                        name="resumeUpload"
                                        type="file"
                                        aria-labelledby="submit"
                                        class="hidden"
                                        accept=".doc, .docx,.pdf"
                                      />
                                    </label>
                                  </a>
                                </div>
                                <div style={{ paddingLeft: '16px' }} class="css-0 e1h54cx80">
                                  <a
                                    class="gd-ui-button applyButton e1ulk49s0 css-1m0gkmt"
                                    href="#"
                                    rel="nofollow"
                                  >
                                    <label style={{ width: '100%' }} for="coverLetterUpload">
                                      <span>Upload Cover Letter</span>

                                      <input
                                        onChange={this.onChangeCoverLetterHandler}
                                        id="coverLetterUpload"
                                        name="coverLetterUpload"
                                        type="file"
                                        aria-labelledby="submit"
                                        class="hidden"
                                        accept=".doc, .docx,.pdf"
                                      />
                                    </label>
                                  </a>
                                </div>
                                <div class="css-3nnrip et4swdz0">
                                  <button
                                    onClick={
                                      alreadyFav
                                        ? (event) => this.unsaveJob(event)
                                        : (event) => this.saveJob(event)
                                    }
                                    // onClick={(event) => this.props.saveJob(event)}
                                    class="gd-ui-button save-job-button gradient fillMob hideHH css-3ybntp"
                                    data-test="desktop-btn"
                                  >
                                    <span class="SVGInline heart unsave mr-xsm">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                      >
                                        {heartIcon}
                                      </svg>
                                    </span>
                                    <span>Saved</span>
                                    <i class="hlpr"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="css-15asexb e18tf5om0">
                <div class="css-u9c4ai e18tf5om1">
                  <span class="css-fdajvm e18tf5om5">Job Application Files </span>
                  {this.state.errormsg ? (
                    <span style={{ color: 'red' }} class="css-fdajvm e18tf5om5">
                      Missing files
                    </span>
                  ) : (
                    ''
                  )}
                  <div class="css-qiuq2n e18tf5om3"></div>
                  <div class="css-1hb8zec e18tf5om2">
                    <div>
                      <div class="css-1ieo3ql e18tf5om7">
                        <span class="css-1vg6q84 e18tf5om6">Resume:&nbsp;</span>
                        <span class="css-sr4ps0 e18tf5om4">{this.state.resume.name}</span>
                      </div>
                      <div class="css-1ieo3ql e18tf5om7">
                        <span class="css-1vg6q84 e18tf5om6">Cover Letter:&nbsp;</span>
                        <span class="css-o4d739 e18tf5om4">{this.state.coverLetter.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="css-15asexb e18tf5om0">
                <div class="css-u9c4ai e18tf5om1">
                  <span class="css-fdajvm e18tf5om5">Job &amp; Company Insights</span>
                  <div class="css-qiuq2n e18tf5om3"></div>
                  <div class="css-1hb8zec e18tf5om2">
                    <div>
                      <div class="css-1ieo3ql e18tf5om7">
                        <span class="css-1vg6q84 e18tf5om6">Job Type:&nbsp;</span>
                        <span class="css-sr4ps0 e18tf5om4">Full-time</span>
                      </div>
                      <div class="css-1ieo3ql e18tf5om7">
                        <span class="css-1vg6q84 e18tf5om6">Job Function:&nbsp;</span>
                        <span class="css-o4d739 e18tf5om4">software engineer</span>
                      </div>
                    </div>
                    <div>
                      <div class="css-1ieo3ql e18tf5om7">
                        <span class="css-1vg6q84 e18tf5om6">Industry:&nbsp;</span>
                        <span class="css-sr4ps0 e18tf5om4">Information Technology</span>
                      </div>
                      <div class="css-1ieo3ql e18tf5om7">
                        <span class="css-1vg6q84 e18tf5om6">Size:&nbsp;</span>
                        <span class="css-sr4ps0 e18tf5om4">10000+ Employees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="css-jfggi0 e1eh6fgm2">
                <div>
                  <div id="JobDescriptionContainer" class="tabSection p-std mt-0">
                    <div id="JobDesc3738626687" class="css-ndcerj ecgq1xb3">
                      <div class="desc css-58vpdc ecgq1xb4">
                        Do you want to work on cutting edge technology, solve new problems that
                        didnt exist before, and have the ability to see the impact of your
                        contributions?
                        <br />
                        <br />
                        Amazon is growing, and so is our team, looking for SDE who moves fast, is
                        capable of cracking and solving complex problems, and has a strong will to
                        get things done. SDEs at Amazon work on real world problems on a global
                        scale, own their systems end to end and influence the direction of our
                        technology that impacts hundreds of millions customers around the world.
                        <br />
                        <br />
                        As an SDE you are expected to design flexible and scalable solutions, and
                        work on some of the most complex challenges in large-scale computing by
                        utilizing your skills in data structures, algorithms, and object oriented
                        programming..
                        <br />
                        <br />
                        Value Added Services team in Hyderabad, India is developing a services
                        platform which will make it possible to sell services with the same degree
                        of convenience and flexibility we sell products. We are looking to hire
                        smart and highly motivated Engineers who will work towards launching this
                        next wave of disruptive services platform for Amazon. As a member of this
                        team your mission will be to design, develop, deploy, document and support
                        scalable and distributed real time systems.
                        <br />
                        <br />
                        <b>Basic Qualifications</b>
                        <br />
                        <br />· 2+ years of non-internship professional software development
                        experience
                        <br />· Programming experience with at least one modern language such as
                        Java, C++, or C# including object-oriented design
                        <br />· 1+ years of experience contributing to the architecture and design
                        (architecture, design patterns, reliability and scaling) of new and current
                        systems.
                        <br />· Bachelors or Masters Degree in Computer Science or related field
                        <br />· Strong in data structures and problem solving
                        <br />· Solid experience in Java, C++, or C# (expert in at least one)
                        <br />· 1+ years industry experience in developing and launching production
                        grade software
                        <br />· Great understanding of database theory and solid experience in at
                        least one relational of non-relational DBMS
                        <br />· Outstanding interpersonal and communication skills
                        <br />
                        <br />
                        <b>Preferred Qualifications</b>
                        <br />
                        <br />· Experience in ecommerce domain
                        <br />· Exposure to full stack development and web technologies
                      </div>
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

// export default JobApplicationPage;

const mapStateToProps = (state) => {
  const { companyNavbarStore } = state.CompanyResultPageReducer;
  const { companyOverviewStore } = state.CompanyPageReducer;
  const { studentInfoStore } = state.StudentCompleteInfoReducer;
  return {
    companyNavbarStore,
    companyOverviewStore,
    studentInfoStore,
  };
};

// export default CompanyPage;
const mapDispatchToProps = (dispatch) => {
  return {
    LowerNavBarOther: (payload) => {
      dispatch({
        type: LowerNavBarOther,
        payload,
      });
    },
    updateCompanyOverview: (payload) => {
      dispatch({
        type: updateCompanyOverview,
        payload,
      });
    },
    updateStudentProfile: (payload) => {
      dispatch({
        type: updateCompanyOverview,
        payload,
      });
    },
  };
};

// export default LoginBody;
export default connect(mapStateToProps, mapDispatchToProps)(JobApplicationPage);
