import React from 'react';
import AuthService from './Auth';
import { getAuthToken, removeToken } from './utils';

export const AuthContext = React.createContext(null);

const getInitialData = () => {
  const user = null;
  const token = getAuthToken();
  return { user, token };
};

const useAuthState = (initialAuthData = {}) => {
  const [authState, setAuthState] = React.useState({
    authCheckComplete: false,
    authData: initialAuthData,
  });

  const setAuthData = (user, token) => {
    setAuthState((prevState) => ({
      authCheckComplete: true,
      authData: { ...prevState.authData, user, token }
    }))
  };

  const { authData, authCheckComplete } = authState;

  return { authData, authCheckComplete, setAuthData };
};

const AuthDataProvider = (props) => {

  const { authData, authCheckComplete, setAuthData } = useAuthState(getInitialData());

  const checkAuthState = React.useCallback(async () => {
    const token = getAuthToken();
    try {
      const user = await AuthService.CheckAuthState();
      setAuthData(user, token);
    } catch (err) {
      removeToken();
      setAuthData(null, null);
    }
  }, []);

  React.useEffect(() => {
    console.log('useEffect() -> checkAuthState');
    checkAuthState();
  }, [checkAuthState]);

  const onLogout = () => {
    removeToken();
    setAuthData(null, null);
  }

  const onLogin = () => checkAuthState();

  const handleLogin = async (username, password) => {
    try {
      const result = await AuthService.Login(username, password);
      checkAuthState();
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const authDataValue = { ...authData, authCheckComplete, onLogin, handleLogin, onLogout };
  console.log('AuthDataProvider()', authData, { authCheckComplete });
  return (<AuthContext.Provider value={authDataValue} {...props} />);
};

export const useAuthDataContext = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthDataContext must be used within an AuthDataProvider.');
  }
  return context;
}

export default AuthDataProvider;