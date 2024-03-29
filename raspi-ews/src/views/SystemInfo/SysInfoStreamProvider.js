import React from 'react';
import { useSysInfoStream } from './hooks';

export const SysInfoTimeStreamContext = React.createContext({});
export const SysInfoDataStreamContext = React.createContext({});

const SysInfoStreamProvider = ({ start, initialData = {}, ...props }) => {

  const { timeData, data } = useSysInfoStream({ start, initialData });

  return (
    <SysInfoTimeStreamContext.Provider value={timeData}>
      <SysInfoDataStreamContext.Provider value={data} {...props} />
    </SysInfoTimeStreamContext.Provider>
  );
};

export const useTimeStreamContext = () => {
  const context = React.useContext(SysInfoTimeStreamContext);
  if (context === undefined) {
    throw new Error('useTimeStreamContext must be used within an SysInfoStreamProvider.');
  }
  return context;
}

export const useDataStreamContext = () => {
  const context = React.useContext(SysInfoDataStreamContext);
  if (context === undefined) {
    throw new Error('useDataStreamContext must be used within an SysInfoStreamProvider.');
  }
  return context;
}

export default SysInfoStreamProvider;