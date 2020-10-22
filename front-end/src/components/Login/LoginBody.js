import React, { Component } from "react";
import "./LoginBody.css";
class LoginBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="wide lockedHero">
        <div class="bannerImage d-flex justify-content-center">
          <div class="bannerImageLeft"></div>
          <div
            style={{ width: "1340px", height: "594px" }}
            class="bannerImageCenter"
          ></div>
          <div
            style={{ width: "1340px", height: "594px" }}
            class="bannerImageRight"
          ></div>
        </div>
        <div class="lockedSignUp d-flex align-items-center justify-content-center flex-column">
          <h1 class="m-0 center d-flex align-items-center">
            {" "}
            Find The Job That Fits Your Life
          </h1>
          <div id="InlineLoginModule">
            <div class="gdUserLogin gdGrid " data-test="authInlineContainer">
              <div class="signup px-std px-sm-xxl d-flex flex-column justify-content-between">
                <div>
                  <div class="mt-xsm mt-sm-std">
                    <div class="mx-auto my-0  maxw-sm-authInlineInner  mw-400">
                      <p class="my-0 legalText">
                        By continuing, you agree to our{" "}
                        <a
                          href="/about/terms.htm"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="link"
                        >
                          Terms of Use
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://hrtechprivacy.com/brands/glassdoor#privacypolicy"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="link"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>
                      <div class="">
                        <form name="" class="" novalidate="">
                          <input
                            type="hidden"
                            name="userOriginHook"
                            value="LOCKED_NONMEMBER_HOME"
                          />
                          <input type="hidden" name="postLoginUrl" value="" />
                          <input type="hidden" name="emailOptOut" value="" />
                          <div>
                            <div class="valid css-1ohf0ui">
                              <label for="UserEmailSignUp" class="css-2ku426">
                                <span>Create account with Email</span>
                              </label>
                              <div class="input-wrapper css-q444d9">
                                <input
                                  id="UserEmailSignUp"
                                  name="user.email_1603326479667"
                                  title="Create account with Email"
                                  type="email"
                                  data-test=""
                                  aria-label=""
                                  class="css-dacmey"
                                  value=""
                                />
                                <div class="css-1sltif6">
                                  <span class="SVGInline grey-400">
                                    <svg
                                      class="SVGInline-svg grey-400-svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        d="M20.42 5H3.58l7.71 7.71a1 1 0 001.42 0zM3 5.83v12.45l6.23-6.23zm18 0l-6.23 6.23L21 18.28zm-6.93 6.93l-.66.66a2 2 0 01-2.82 0l-.66-.66L3.7 19h16.6zM20.9 4A1.12 1.12 0 0122 5.14v13.72A1.13 1.13 0 0120.9 20H3.1A1.12 1.12 0 012 18.86V5.14A1.13 1.13 0 013.1 4z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div data-test="error" class="css-5eiq8t">
                                Please enter a valid email address.
                              </div>{" "}
                            </div>
                          </div>
                          <div class="mt-xsm">
                            <div class="valid css-1ohf0ui">
                              <label
                                for="UserPasswordSignUp"
                                class="css-2ku426"
                              >
                                <span>Password</span>
                              </label>
                              <div class="input-wrapper css-q444d9">
                                <input
                                  id="UserPasswordSignUp"
                                  name="user.password_1603326479667"
                                  title="Password"
                                  type="password"
                                  autocomplete="new-password"
                                  data-test=""
                                  aria-label=""
                                  class="css-dacmey"
                                  value=""
                                />
                                <div class="css-1sltif6">
                                  <span class="SVGInline grey-400">
                                    <svg
                                      class="SVGInline-svg grey-400-svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        d="M12 3a3.93 3.93 0 00-4 3.86V10h8V6.86A3.93 3.93 0 0012 3zm0 11a2 2 0 00-2 2 2 2 0 001 1.73V19h2v-1.27A2 2 0 0014 16a2 2 0 00-2-2zm0-12a5 5 0 015 4.89V10h2.71A1.21 1.21 0 0121 11.09v9.82A1.21 1.21 0 0119.71 22H4.29A1.21 1.21 0 013 20.91v-9.82A1.21 1.21 0 014.29 10H7V6.89A5 5 0 0112 2zM4 21h16V11H4v10z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div data-test="error" class="css-5eiq8t">
                                Password must be at least 8 characters, no
                                spaces.
                              </div>{" "}
                            </div>
                          </div>
                          <div class="mt-std d-flex justify-content-center">
                            <button
                              class="gd-ui-button minWidthBtn signupSubmit css-8i7bc2"
                              disabled=""
                              type="submit"
                            >
                              Continue with Email
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="post-job pb-lg pb-0-lg">
            {" "}
            Are You Hiring?&nbsp;
            <a
              href="/post-job"
              class="track-click strong"
              data-track-cmpgn="home"
              data-track-source="below-form-locked-b2c"
              data-track-type="src"
              data-ga-lbl="post-jobs-for-free"
            >
              Post Jobs
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default LoginBody;
