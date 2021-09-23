import React from 'react';
// import { useSystemInfo } from './hooks';

export const SystemInfoContext = React.createContext({});

const SystemInfoProvider = ({data, ...props}) => {
  // const value = useSystemInfo();
  return (<SystemInfoContext.Provider value={{data}} {...props} />);
};

export const useSystemInfoContext = () => React.useContext(SystemInfoContext);

export const withSystemInfoProvider = (Content) => () => {
  console.debug('Rendering: withSystemInfoProvider');
  return (
    <SystemInfoProvider>
      <Content />
    </SystemInfoProvider>
  );
};

export default SystemInfoProvider;