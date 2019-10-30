import React, { Component } from "react";
import { browserHistory, Router, Route } from "react-router";
import App from "./App";
import UserView from "./components/UserView";
import NotFound from "./components/NotFound";

class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/users/:id" component={UserView} />
        <Route path="/*" component={NotFound} />
      </Router>
    );
  }
}

export default AppRoutes;
