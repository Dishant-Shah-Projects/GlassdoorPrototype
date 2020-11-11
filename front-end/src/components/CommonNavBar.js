/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
// import './Navbar.css';
// import {
//   updateSearcFilter,
//   updateLowerNavBar,
//   updateActiveStringList,
//   updateStudentProfile,
//   openProfileTabOnClick,
// } from '../../../constants/action-types';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import axios from 'axios';
// import serverUrl from '../../../config';
// // import LowerNavBarHome from './LowerNavBarHome';
// import LowerNavBarOther from './LowerNavBarOther';
// import { history } from '../../../App';
// import SuggestedNames from './SuggestedNames';
// import { Link } from 'react-router-dom';
import Navbar1 from './Employer/Common/Navbar';
import Navbar from './Student/Common/Navbar';

class CommonNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let redirectVar = null;
    let selectedNavBar = null;
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('userrole') === 'student') {
        if (this.props.location.pathname === '/') {
          redirectVar = <Redirect to="/Home" />;
        }
        selectedNavBar = <Navbar />;
      } else if (localStorage.getItem('userrole') === 'company') {
        if (this.props.location.pathname === '/') {
          redirectVar = <Redirect to="/Employer" />;
        }
        selectedNavBar = <Navbar1 />;
      }
    }
    if (!localStorage.getItem('token') && this.props.location.pathname !== '/login') {
      redirectVar = <Redirect to="/login" />;
    }
    return (
      <div>
        {redirectVar}
        {selectedNavBar}
      </div>
    );
  }
}

export default CommonNavBar;
