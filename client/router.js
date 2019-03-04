import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Pages
import pageHome from './components/home';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={pageHome}>
    </Route>
  </Router>
  
);
