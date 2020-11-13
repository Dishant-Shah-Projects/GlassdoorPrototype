import React, { Component } from 'react';
import './Body.css';

class LeftBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="col-12 col-md-4 pr-md-xxl">
      <div class="d-none d-md-block">
        <div data-test="profilePhoto" id="ProfilePhoto">
          <div class="profilePhotoStyle__profilePhoto___CTVQw">
            <div class="d-inline-flex justify-content-start align-items-center profilePhotoStyle__photoContainer___3itOq">
              <div class="mr-xsm">
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
              </div>
              <div class="profilePhotoBadge">
                <div class="CompletionBadgeStyles__badge___18L6x">
                  <span class="SVGInline d-flex align-items-center">
                    <svg
                      class="SVGInline-svg d-flex-svg align-items-center-svg"
                      style={{ width: '24px', height: '24px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 20 24"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g stroke-width="2">
                          <path
                            stroke="#0CAA41"
                            d="M16.2 3H3.8a.797.797 0 00-.8.8v12.248a.8.8 0 00.38.68l7.04 3.836 6.2-3.835a.8.8 0 00.38-.68V3.8a.797.797 0 00-.8-.8z"
                            stroke-linejoin="square"
                            fill="#FFF"
                          ></path>
                          <path
                            stroke="#FFF"
                            d="M16.2 1H3.8c-.773 0-1.473.313-1.98.82A2.791 2.791 0 001 3.8v12.248a2.8 2.8 0 001.327 2.382l6.2 3.835a2.798 2.798 0 002.946 0l6.2-3.835A2.8 2.8 0 0019 16.048V3.8c0-.773-.313-1.473-.82-1.98A2.791 2.791 0 0016.2 1z"
                          ></path>
                        </g>
                        <path
                          d="M10.982 5.463L10.303 10h3.121c.556 0 .738.363.411.805l-4.372 5.91c-.328.445-.528.357-.448-.178L9.694 12h-3.12c-.556 0-.739-.363-.412-.805l4.372-5.91c.329-.445.528-.357.448.178z"
                          fill="#0CAA41"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div class="profilePhotoStyle__caption___HtLE-">
                <span>Add a photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navigationStyle__nav___1PF4F gd-ui-tab css-o9yci5">
        <ul role="tablist">
          <li role="tab" class="active css-1h7a53u" aria-selected="true" tabindex="0">
            <div class="customItem css-wks0vk">
              <div class="d-flex flex-row justify-content-start align-items-center">
                Profile
              </div>
            </div>
          </li>
          <li role="tab" class=" css-1h7a53u" aria-selected="false" tabindex="0">
            <div class="customItem css-wks0vk">
              <div class="d-flex flex-row justify-content-start align-items-center">
                Reports
              </div>
            </div>
          </li>          
        </ul>
      </div>
    </div>
    );
  }
}

export default LeftBlock;
