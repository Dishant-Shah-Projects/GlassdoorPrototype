import React, { Component } from 'react';
import PaginationComponent from '../../Common/PaginationComponent';
import './CompanyPhotos.css';

class CompanyPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article id="MainCol">
        <div id="NodeReplace" class="gdGrid">
          <div>
            <div class=" gd-ui-module css-1mzux4t">
              <div class="mb row d-flex flex-wrap">
                <button
                  style={{ paddingLeft: '0', height: '100%', paddingRight: '0' }}
                  class="eiPhoto css-15w2ie1 e25p3zc0"
                  data-id="12643486"
                  data-slide-num="1"
                  data-slide-num-on-page="18"
                >
                  <img
                    class="p-xsm"
                    src="https://media.glassdoor.com/lst/ad/7a/0e/0f/amazon-office-location-in-munich-schwabing-north.jpg"
                    alt=" photo of: Amazon office location in Munich Schwabing-North"
                  />
                </button>
              </div>{' '}
              <div class="gd-ui-pagination css-k5362a css-1rvdm42" data-test="">
                <PaginationComponent
                  //   PageCount={this.props.jobListStore.PageCount}
                  //   PageNo={this.props.jobListStore.PageNo}
                  onPageClick={(e) => {
                    this.onPageClick(e);
                  }}
                />{' '}
                <div class="paginationFooter">
                  Viewing 1 - 18 of 653 <span class="filterLabel"></span> Photos
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default CompanyPhotos;
