import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import CommonRoutes from './CommonRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import LoadingSpinner from '../ui/LoadingSpinner'
import Error from '../ui/Error';



import { getSession } from '../redux/actions/SessionActions';

const Routes = () => {
  const dispatch = useDispatch();
  const { sessionInfo, checked } = useSelector(state => state.session);

  console.log("1-session " + sessionInfo);
  console.log("1-check " + checked);

  useEffect(() => {
    if (!checked) {
      dispatch(getSession());
    }
  }, [checked]);

  console.log("2-session " + sessionInfo);
  console.log("2-check " + checked);

  const RoutesHandler = () => {
    if (!checked) return <div style={{ height: '80vh' }}><LoadingSpinner /></div>;
    if (!sessionInfo) return <CommonRoutes error={<Error />}/>;
    return <ProtectedRoutes error={<Error />}/>;
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
