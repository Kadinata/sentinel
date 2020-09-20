import React from 'react';
import AuthService from './Auth';
import { getAuthData } from './utils';

export const AuthContext = React.createContext(null);

const getInitialData = () => {
  const user = getAuthData();
  return { user };
};

const AuthDataProvider = (props) => {

  const [authData, setAuthData] = React.useState(getInitialData());

  const checkAuthState = React.useCallback(async () => {
    try {
      const user = await AuthService.CheckAuthState();
      setAuthData({ user });
    } catch (err) {
      const user = null;
      setAuthData({ user });
    }
  }, []);

  React.useEffect(() => { checkAuthState() }, []);

  const onLogout = () => setAuthData({ user: null });
  // const onLogin = (newData) => setAuthData((prevData) => ({ ...prevData, ...newData }));
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

  const authDataValue = { ...authData, onLogin, handleLogin, onLogout };
  return (<AuthContext.Provider value={authDataValue} {...props} />);
};

export const useAuthDataContext = () => React.useContext(AuthContext);

export default AuthDataProvider;