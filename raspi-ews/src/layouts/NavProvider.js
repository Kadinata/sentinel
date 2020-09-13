import React from 'react';

export const NavContext = React.createContext(null);

const NavProvider = ({ routes, ...props }) => {
  const [navRoutes, setNavRoutes] = React.useState(routes || []);
  return (<NavContext.Provider value={{ routes: navRoutes }} {...props} />);
};

export const useNavContext = () => React.useContext(NavContext);

export default NavProvider;