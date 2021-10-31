import React from 'react';
import AuthService from './Auth';
import { getAuthToken, removeToken } from './utils';

export const AuthContext = React.createContext(null);

const getInitialData = () => {
  const user = null;
  const token = getAuthToken();
  return { user, token };
};

const AuthDataProvider = (props) => {

  const [authData, setAuthData] = React.useState(getInitialData());
  const [authCheckComplete, setAuthCheckState] = React.useState(false);

  const checkAuthState = React.useCallback(async () => {
    const token = getAuthToken();
    try {
      const user = await AuthService.CheckAuthState();
      setAuthData(prevState => ({ ...prevState, user, token }));
    } catch (err) {
      const user = null;
      const token = null;
      removeToken();
      setAuthData(prevState => ({ ...prevState, user, token }));
    }
    setAuthCheckState(true);
  }, []);

  React.useEffect(() => {
    console.log('useEffect() -> checkAuthState');
    checkAuthState();
  }, [checkAuthState]);

  const onLogout = () => {
    const user = null;
    const token = null;
    removeToken();
    setAuthData(prevState => ({ ...prevState, user, token }));
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