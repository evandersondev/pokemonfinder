import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/info" component={Info} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
