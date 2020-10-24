import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Student/LandingPage/Home';
import Login from './Login/Login';
class Main extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  };
  // }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Main;
