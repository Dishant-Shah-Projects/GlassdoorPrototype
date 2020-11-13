import React, { Component } from 'react';
import axios from 'axios';
import serverUrl from '../../../config';
import { LowerNavBarOther, updateCompanyList } from '../../../constants/action-types';
import { connect } from 'react-redux';
import CompanyNavbar from './CompanyNavbar/CompanyNavbar';
import CompanyOverView from './CompanyOverView/CompanyOverView';
import CompanyReviews from './CompanyReviews/CompanyReviews';

class CompanyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    this.props.LowerNavBarOther();
    return (
      <div class="pageContentWrapperStudent ">
        <div style={{ position: 'relative' }} id="PageContent">
          <div id="PageBodyContents">
            <div class="pageInsideContent cf">
              <div
                id="EI-Srch"
                class="ajaxContent"
                data-page-title="Working at Amazon | Glassdoor"
                data-page-type="OVERVIEW"
                data-analytics="/employerInfo/Overview/employer-summary"
              >
                <div id="EI">
                  <div
                    id="EIOverview"
                    class="sponsoredEmployerOverview"
                    data-brandviews="PAGE:n=hub-overview:eid=6036"
                  >
                    <div class="flex-aside">
                      <CompanyNavbar />
                      {false && <CompanyOverView />}
                      {true && <CompanyReviews />}
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

// export default CompanyPage;
const mapDispatchToProps = (dispatch) => {
  return {
    LowerNavBarOther: (payload) => {
      dispatch({
        type: LowerNavBarOther,
        payload,
      });
    },
  };
};

// export default LoginBody;
export default connect(null, mapDispatchToProps)(CompanyPage);
