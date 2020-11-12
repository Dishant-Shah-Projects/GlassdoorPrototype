import React, { Component } from 'react';
import LeftPannel from './LeftPannel/LeftPannel';
import Salaries from './Salary/Salaries';
import './ContributionPage.css';
import { connect } from 'react-redux';
import { LowerNavBarOther } from '../../../constants/action-types';
import Reviews from './Review/Reviews';
import Interview from './InterView/Interview';
import Photos from './Photos/Photos';
import { history } from '../../../App';

class ContributionPage extends Component {
  constructor(props) {
    super(props);
    this.state = { tabOpened: 'Salaries' };
  }
  switchTab = (event, tab) => {
    event.preventDefault();
    this.setState({
      tabOpened: tab,
    });
  };

  // openCommonContributionPage = (event, page) => {
  //   // event.preventDefault();

  //   history.push('/CommonContribute');
  //   // return false;
  // };

  render() {
    this.props.LowerNavBarOther();

    return (
      <div class="pageContentWrapperStudent ">
        <div id="PageContent">
          <div id="PageBodyContents" class="meat">
            <div class="pageInsideContent cf">
              <div id="MyAccount">
                <div id="Account">
                  <div class="flex-grid padTop">
                    <LeftPannel
                      tabOpened={this.state.tabOpened}
                      switchTab={(event, tab) => this.switchTab(event, tab)}
                    />
                    {this.state.tabOpened === 'Salaries' ? (
                      <Salaries
                        openCommonContributionPage={(event, page) => {
                          this.openCommonContributionPage(event, page);
                        }}
                      />
                    ) : (
                      ''
                    )}
                    {this.state.tabOpened === 'Reviews' ? <Reviews /> : ''}
                    {this.state.tabOpened === 'Interviews' ? <Interview /> : ''}
                    {this.state.tabOpened === 'Photos' ? <Photos /> : ''}
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

// export default ContributionPage;
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

export default connect(null, mapDispatchToProps)(ContributionPage);
