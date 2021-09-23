import React from 'react';
import { useSysInfoStream } from './hooks';

export const SysInfoTimeStreamContext = React.createContext({});
export const SysInfoDataStreamContext = React.createContext({});

const SysInfoStreamProvider = ({ start, initialData = {}, ...props }) => {

  const {timeData, data} = useSysInfoStream({start, initialData});

  return (
    <SysInfoTimeStreamContext.Provider value={timeData}>
      <SysInfoDataStreamContext.Provider value={data} {...props} />
    </SysInfoTimeStreamContext.Provider>
  );
};

export const useTimeStreamContext = () => React.useContext(SysInfoTimeStreamContext);
export const useDataStreamContext = () => React.useContext(SysInfoDataStreamContext);

export default SysInfoStreamProvider;