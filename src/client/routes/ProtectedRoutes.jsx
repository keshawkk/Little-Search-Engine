import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../ui/Landing';

const ProtectedRoutes = () => (
  <Switch>
    <Route path="/" exact><Landing /></Route>
  </Switch>
);

export default ProtectedRoutes;
