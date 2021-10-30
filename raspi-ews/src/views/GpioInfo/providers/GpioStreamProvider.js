import React from 'react';
import { useResourceStream } from '../../../common/hooks';

const ENDPOINT_GPIO_STREAM = 'api/v1/gpio/stream';

export const GpioStreamContext = React.createContext({});

const GpioStreamProvider = ({ enable, initialData = {}, ...props }) => {

  console.log('[Rendering]: GpioStreamProvider ');

  const { data } = useResourceStream(ENDPOINT_GPIO_STREAM, enable, initialData);

  return (
    <GpioStreamContext.Provider value={data} {...props} />
  );
};

export const useGpioStreamContext = () => React.useContext(GpioStreamContext);

export default GpioStreamProvider;