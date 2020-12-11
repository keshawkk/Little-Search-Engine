import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import CommonRoutes from './CommonRoutes';
import ProtectedRoutes from './ProtectedRoutes';

import { getSession } from '../redux/actions/SessionActions';

const Routes = () => {
  const dispatch = useDispatch();
  const { sessionInfo, checked } = useSelector(state => state.session);

  useEffect(() => {
    if (!checked) {
      dispatch(getSession());
    }
  }, [checked]);

  const RoutesHandler = () => {
    if (!sessionInfo) return <CommonRoutes />;
    return <ProtectedRoutes />;
  };

  return (
    <>
      <Switch>
        <RoutesHandler />
      </Switch>
    </>
  );
};

export default Routes;
