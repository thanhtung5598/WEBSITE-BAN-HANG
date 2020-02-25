import React, { Component } from 'react';
import { routes } from "./routes";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      });
    }
    return result;
  }
  render() {
    return (
      <Router>
        <Switch>
          {this.showContentMenu(routes)}
        </Switch>
      </Router>
    );
  }


}
export default App;
