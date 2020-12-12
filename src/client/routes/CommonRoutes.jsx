import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../ui/Landing';
import AdminLogin from '../ui/AdminLogin';
import UserLogin from '../ui/UserLogin';



const CommonRoutes = ({error}) => (
  <Switch>
    
    <Route path="/admin/login" exact><AdminLogin /></Route>    
    <Route path="/user/login" exact><UserLogin /></Route>

    <Route path="/" exact><Landing /></Route>
    <Route> {error} </Route>
  </Switch>
);

export default CommonRoutes;
