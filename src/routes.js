import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/info/:name" component={Info} />
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);
