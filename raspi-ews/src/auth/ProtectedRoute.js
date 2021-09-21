import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthDataContext } from './AuthProvider';

const ProtectedRoute = ({ children, ...rest }) => {

  const { user, authCheckComplete } = useAuthDataContext();
  if(!authCheckComplete) return null;

  if (!user) {
    return (<Redirect to="/login" />);
  }
  return (<Route {...rest} render={children} />);
};

export default ProtectedRoute;