import React from 'react';

export const GpioStateContext = React.createContext({});

const GpioStateProvider = ({ value, ...props }) => {
  return (<GpioStateContext.Provider value={value} {...props} />);
};

export const useGpioStateContext = () => React.useContext(GpioStateContext);

export default GpioStateProvider;