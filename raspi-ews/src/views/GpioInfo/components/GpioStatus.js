import React from 'react';
import { DisplayCard } from '../../../common/components/Card';
import { PinStatusHeader } from './PinRowHeaders';
import { PinRow } from './PinRow';
import PinStatus from './PinStatus';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { useGpioStreamContext } from '../providers/GpioStreamProvider';

const isOutput = (gpioState, pinNum) => {
  if (!pinNum && (pinNum !== 0)) return false;
  const oenable = gpioState[pinNum] & (1 << 1);
  return oenable;
};

const isHigh = (gpioState, pinNum) => {
  if (!pinNum && (pinNum !== 0)) return false;
  const oenable = gpioState[pinNum] & (1 << 0);
  // console.log({ oenable, pinNum });
  return oenable;
};

const cardTitle = (
  <Typography component="h5" variant="h5" align="left">
    GPIO Status
  </Typography>
);

const HeaderRow = (
  <PinRow key={'header'}>
    <PinStatusHeader /> <PinStatusHeader />
  </PinRow>
);

const GpioStatus = ({ pinLayout, ...props }) => {

  console.log('[Rendering]: GpioStatus ');
  const gpioState = useGpioStreamContext();
  const rowEntry = [HeaderRow];

  let i = 0;
  for (i = 0; i < pinLayout.length; i = i + 2) {
    rowEntry.push((
      <PinRow key={i}>
        <PinStatus
          label={pinLayout[i].label}
          pinType={pinLayout[i].type}
          oenable={isOutput(gpioState, pinLayout[i].gpioNum)}
          high={isHigh(gpioState, pinLayout[i].gpioNum)}
        />
        <PinStatus label={
          pinLayout[i + 1].label}
          pinType={pinLayout[i + 1].type}
          oenable={isOutput(gpioState, pinLayout[i + 1].gpioNum)}
          high={isHigh(gpioState, pinLayout[i + 1].gpioNum)}
        />
      </PinRow>
    ));
  }

  return (
    <DisplayCard title={cardTitle}>
      <Grid container>
        {rowEntry}
      </Grid>
    </DisplayCard>
  );
};

export default GpioStatus;