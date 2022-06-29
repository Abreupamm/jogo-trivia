import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Login,
  Game,
  Settings,
} from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route path="/game">
      <Game />
    </Route>
    <Route path="/settings">
      <Settings />
    </Route>
  </Switch>
);

export default Routes;
