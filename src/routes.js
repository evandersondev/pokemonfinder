import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/info/:name" component={Info} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);
