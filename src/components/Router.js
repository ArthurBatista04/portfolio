import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as ROUTER from "../constants/";
import * as PAGE from "../pages";
export default class extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={ROUTER.MAIN} component={PAGE.Main} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}
