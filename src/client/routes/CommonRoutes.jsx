import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserLogin from '../ui/UserLogin';
import AdminLogin from '../ui/AdminLogin';
import Landing from '../ui/Landing';

const CommonRoutes = ({error}) => (
  <Switch>
    <Route path="/admin/login" exact><AdminLogin /></Route>
    <Route path="/user/login" exact><UserLogin /></Route>

    <Route path="/" exact><Landing /></Route>
    <Route> {error} </Route>
  </Switch>
);

export default CommonRoutes;
