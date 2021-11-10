import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthDataContext } from '../../auth/AuthProvider';
import Loading from './Loading';

const initialState = {
  loading: true,
  loggedIn: false,
  activated: false,
};

const useAuthRedirect = (noRetry = false) => {

  const [state, setState] = React.useState(initialState);
  const { user, token, authCheckComplete } = useAuthDataContext();

  React.useEffect(() => {
    const loading = !authCheckComplete;
    const loggedIn = !!user && !!token;
    const activated = (authCheckComplete && !loggedIn && noRetry);
    setState((prevState) => ({
      ...prevState,
      loading,
      loggedIn,
      activated: prevState.activated || activated,
    }));
  }, [user, token, authCheckComplete, noRetry]);

  return state;
};

const AuthRedirect = ({ redirect, noRetry = false, ...rest }) => {

  const { loading, loggedIn, activated } = useAuthRedirect(noRetry);

  if (loggedIn && !loading && !activated) {
    return (<Redirect to={redirect} />);
  }

  return (<Loading show={loading} {...rest} />);
};

export default AuthRedirect;