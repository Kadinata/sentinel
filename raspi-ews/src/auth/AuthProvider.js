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

  React.useEffect(() => {
    const checkAuthState = async () => {
      try {
        const user = await AuthService.CheckAuthState();
        setAuthData({ user });
      } catch (err) {
        const user = null;
        setAuthData({ user });
      }
    };
    checkAuthState();
  }, []);

  const onLogout = () => setAuthData({ user: null });
  const onLogin = (newData) => setAuthData((prevData) => ({ ...prevData, ...newData }));

  const authDataValue = { ...authData, onLogin, onLogout };
  return (<AuthContext.Provider value={authDataValue} {...props} />);
};

export const useAuthDataContext = () => React.useContext(AuthContext);

export default AuthDataProvider;