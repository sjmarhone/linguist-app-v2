import React, { Component, Fragment } from "react";
//import {connect} from 'react-redux'
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
//import { Login, Signup } from './components/AuthForm';
import Home from "./components/Home";
//import {me} from './store'
import Translator from "./components/Translator";

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/translator" component={Translator} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
