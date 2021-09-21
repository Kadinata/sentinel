import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthDataContext } from '../../auth/AuthProvider';
import Loading from './Loading';

const useAuthRedirect = () => {

  const [isLoading, setLoading] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const { user, token, authCheckComplete } = useAuthDataContext();

  React.useEffect(() => {
    setLoading(true);
    setLoggedIn((!!user && !!token));
    setLoading(!authCheckComplete);
  }, [user, token, authCheckComplete]);

  return { isLoading, loggedIn };
};

const AuthRedirect = ({ redirect, ...rest }) => {
  const { isLoading, loggedIn } = useAuthRedirect();

  if (loggedIn && !isLoading) {
    return (<Redirect to={redirect} />);
  }

  return (<Loading show={isLoading} {...rest} />);
};

export default AuthRedirect;