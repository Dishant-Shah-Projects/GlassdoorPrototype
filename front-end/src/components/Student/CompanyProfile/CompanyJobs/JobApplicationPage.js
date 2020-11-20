import React, { Component } from 'react';
import { LowerNavBarOther, updateCompanyOverview } from '../../../../constants/action-types';
import { connect } from 'react-redux';
import './JobApplicationPage.css';

class JobApplicationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    this.props.LowerNavBarOther();
    return (
      <div class="gdGrid pageContentWrapperStudent ">
        <div id="PageContent" class="">
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
                      data-original="https://media.glassdoor.com/banner/bh/6036/amazon-banner-1578695809222.jpg"
                      data-original-2x="https://media.glassdoor.com/banner/bh/6036/amazon-banner-1578695809222.jpg"
                      src="https://media.glassdoor.com/banner/bh/6036/amazon-banner-1578695809222.jpg"
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
                                    data-original="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png"
                                    data-original-2x="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png"
                                    src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png"
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
                                    data-adv-type="EMPLOYER"
                                    data-apply-type="NONE"
                                    data-easy-apply="false"
                                    data-is-organic-job="false"
                                    data-is-sponsored-job="true"
                                    data-job-id="3738626687"
                                    data-job-url="/partner/jobListing.htm?pos=101&amp;ao=883174&amp;s=21&amp;guid=00000175de9de72992f1f98567b48765&amp;src=GD_JOB_VIEW&amp;t=ESR&amp;extid=2&amp;exst=E&amp;ist=L&amp;ast=EL&amp;vt=w&amp;uido=5B485F458EBD641B&amp;slr=true&amp;cs=1_9c704393&amp;cb=1605757706915&amp;jobListingId=3738626687"
                                    data-test="apply-button"
                                    href="/partner/jobListing.htm?pos=101&amp;ao=883174&amp;s=21&amp;guid=00000175de9de72992f1f98567b48765&amp;src=GD_JOB_VIEW&amp;t=ESR&amp;extid=2&amp;exst=E&amp;ist=L&amp;ast=EL&amp;vt=w&amp;uido=5B485F458EBD641B&amp;slr=true&amp;cs=1_9c704393&amp;cb=1605757706915&amp;jobListingId=3738626687"
                                    target="_blank"
                                    rel="nofollow"
                                  >
                                    <i class="icon-offsite-white mr-sm"></i>
                                    <span>Apply Now</span>
                                    <i class="hlpr"></i>
                                  </a>
                                </div>
                                <div class="css-3nnrip et4swdz0">
                                  <button
                                    class="gd-ui-button save-job-button gradient fillMob hideHH css-3ybntp"
                                    data-test="desktop-btn"
                                  >
                                    <span class="SVGInline heart unsave mr-xsm">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17"
                                        height="16"
                                        viewBox="0 0 17 16"
                                      >
                                        <path
                                          fill="#1861BF"
                                          fill-rule="evenodd"
                                          stroke="#1861BF"
                                          d="M8.583 15S1.6 10.725 1.018 5.55c-.35-4.162 4.54-6.412 7.565-2.587 3.027-3.825 7.915-1.575 7.566 2.588C15.567 10.838 8.583 15 8.583 15z"
                                        ></path>
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
  return {
    companyNavbarStore,
    companyOverviewStore,
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
  };
};

// export default LoginBody;
export default connect(mapStateToProps, mapDispatchToProps)(JobApplicationPage);
