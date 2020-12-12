import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../ui/Landing';
import AdminPage from '../ui/AdminPage';
import UserPage from '../ui/UserPage'

const ProtectedRoutes = ({error}) => (
  <Switch>
    <Route path="/admin" exact> <AdminPage /></Route>
    <Route path="/user" exact> <UserPage /></Route>

    <Route path="/" exact><Landing /></Route>
    <Route>{error}</Route>
  </Switch>
);

export default ProtectedRoutes;
