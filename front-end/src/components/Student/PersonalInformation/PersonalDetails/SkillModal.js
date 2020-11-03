import React, { Component } from 'react';
import './SkillModal.css';
import { connect } from 'react-redux';

class SkillModal extends Component {
  constructor(props) {
    super(props);
    this.state = { studentProfile: this.props.studentInfoStore.studentProfile, Skill: '' };
  }

  onChangeHandler = (event) => {
    this.setState({
      Skill: event.target.value,
    });
  };

  saveSkill = (event) => {
    if (event.key === 'Enter') {
      const studentProfile = this.state.studentProfile;
      studentProfile.Skills.push(this.state.Skill);
      this.setState({
        studentProfile,
        Skill: '',
      });
    }
  };

  removeSkill = (event, skill) => {
    event.preventDefault();
    const studentProfile = this.state.studentProfile;
    const index = studentProfile.Skills.indexOf(skill);
    if (index > -1) {
      studentProfile.Skills.splice(index, 1);
      this.setState({
        studentProfile,
      });
    }
  };

  restoreToDefault = (event) => {
    // event.preventDefault();
    this.setState({
      studentProfile: this.props.studentInfoStore.studentProfile,
    });
    this.props.openSkillForm(event);
  };

  render() {
    return (
      <div class="gd-ui-modal css-q2nzru">
        <div class="background-overlay" aria-label="Background Overlay"></div>
        <div class="modal_main ">
          <span onClick={this.props.openSkillForm} alt="Close" class="SVGInline modal_closeIcon">
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
            <div class="modal_title">Skills</div>
            <div class="modal_content">
              <div>
                <div class="skillsStyle__addSkillEntry___2RqJn d-block">
                  <div class=" css-1ohf0ui">
                    <div
                      data-test="newskill"
                      aria-expanded="false"
                      role="combobox"
                      aria-autocomplete="list"
                      class="css-1xtvih1"
                    >
                      <div class=" css-1ohf0ui">
                        <div class="input-wrapper css-q444d9">
                          <input
                            onChange={this.onChangeHandler}
                            onKeyPress={this.saveSkill}
                            placeholder="Enter a skill (ex: Data Analysis)"
                            autocomplete="off"
                            name="Autocomplete"
                            id="Autocomplete-e451b47-37d6-8a3-d66-53a6fa7767c"
                            data-test=""
                            aria-label=""
                            class="css-ofiv3k"
                            value={this.state.Skill}
                          />
                        </div>
                      </div>
                      <ul class="suggestions down"></ul>
                      <div>
                        <div data-test="FilterChips"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="editableSkillList pt">
                  {this.state.studentProfile.Skills.map((skill) => (
                    <span class="skillsStyle__capitalize___1tkT7">
                      <div class="css-zomrfc">
                        <span title="Flask" class="css-1p0oo7a">
                          {skill}
                        </span>
                        <button
                          onClick={(event) => {
                            this.removeSkill(event, skill);
                          }}
                          type="button"
                          class="css-gw9vqy"
                        >
                          ✕
                        </button>
                      </div>
                    </span>
                  ))}
                  {/*<span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Flask" class="css-1p0oo7a">
                        Flask
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>
                  <span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Ambari" class="css-1p0oo7a">
                        Ambari
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>
                  <span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Visual Studio" class="css-1p0oo7a">
                        Visual Studio
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>
                  <span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Tensorflow" class="css-1p0oo7a">
                        Tensorflow
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>
                  <span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Svn" class="css-1p0oo7a">
                        Svn
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>
                  <span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Redux" class="css-1p0oo7a">
                        Redux
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>
                  <span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Pandas" class="css-1p0oo7a">
                        Pandas
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>
                  <span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Object-oriented Programming" class="css-1p0oo7a">
                        Object-oriented Programming
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>
                  <span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Node.js" class="css-1p0oo7a">
                        Node.js
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>
                  <span class="skillsStyle__capitalize___1tkT7">
                    <div class="css-zomrfc">
                      <span title="Matplotlib" class="css-1p0oo7a">
                        Matplotlib
                      </span>
                      <button type="button" class="css-gw9vqy">
                        ✕
                      </button>
                    </div>
                  </span>*/}
                </div>
              </div>
            </div>
          </div>
          <div class="bottomShadow"></div>
          <div class="actionBar">
            <div class="d-flex justify-content-end skillsStyle__actionBar___DOXCZ">
              <button
                onClick={this.props.openSkillForm}
                class="gd-ui-button d-none d-md-inline-block mr-md-sm css-1c2vj07"
                data-test="cancelChanges"
              >
                Cancel
              </button>
              <button
                onClick={(event) =>
                  this.props.updateStudentProfile(event, this.state.studentProfile)
                }
                class="gd-ui-button  css-uk8w9o"
                data-test="saveChanges"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default SkillModal;
const mapStateToProps = (state) => {
  const { studentInfoStore } = state.StudentCompleteInfoReducer;

  return {
    studentInfoStore,
  };
};

// export default LeftBlock;
export default connect(mapStateToProps, null)(SkillModal);
