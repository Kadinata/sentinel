import React from 'react';
import { GpioControl, GpioStatus } from './components';
import GpioControlStateProvider from './providers/GpioControlStateProvider';
import PinLayout from './config/PinLayout';
import GpioStreamProvider from './providers/GpioStreamProvider';
import { usePageDataContext } from '../common/PageDisplayManager';
import { GpioContentLayout } from './components/GpioContentLayout';

const GpioContent = (props) => {
  const { gpioState } = usePageDataContext();
  console.log('[Rendering]: GpioContent ');

  return (
    <React.Fragment>
      <GpioControlStateProvider >
        <GpioStreamProvider enable initialData={gpioState}>
          <GpioContentLayout
            statusDisplay={<GpioStatus pinLayout={PinLayout} />}
            controlDisplay={<GpioControl pinLayout={PinLayout} />}
          />
        </GpioStreamProvider>
      </GpioControlStateProvider>
    </React.Fragment>
  );
};

export default GpioContent;