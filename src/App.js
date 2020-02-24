import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import IndexPage from "./pages/IndexPage/index";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact={true} component={IndexPage} />
        </Switch>
    </Router>
  );
}

export default App;
