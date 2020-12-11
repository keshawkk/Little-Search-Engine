import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../ui/Landing';

const ProtectedRoutes = ({error}) => (
  <Switch>
    <Route path="/" exact><Landing /></Route>
    <Route>{error}</Route>
  </Switch>
);

export default ProtectedRoutes;
