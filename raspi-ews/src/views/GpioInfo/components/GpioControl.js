import React from 'react';
import { DisplayCard } from '../../../common/components/Card';
import { SubmitButton } from '../../../common/components/Button';
import { PinControlHeader } from './PinRowHeaders';
import { PinRow } from './PinRow';
import { useGpioController } from '../hooks';
import PinControl from './PinControl';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { useGpioStateContext } from '../providers/GpioStateProvider';

const cardTitle = (
  <Typography component="h5" variant="h5" align="left">
    GPIO Control
  </Typography>
);

const GpioControl = ({ pinLayout, ...props }) => {

  const { handleChange, handleSubmit } = useGpioController();
  const { usablePins = [] } = useGpioStateContext();
  const halfCount = usablePins.length / 2;

  console.log('[Rendering] GpioControl');
  console.log({ usablePins });

  const rowEntry = [
    (
      <PinRow key={'header'}>
        <PinControlHeader /> <PinControlHeader />
      </PinRow>
    ),
  ];

  for (let i = 0; i < halfCount; i++) {
    rowEntry.push((
      <PinRow key={i}>
        <PinControl
          label={`GPIO ${usablePins[i]}`}
          onChange={handleChange}
          pinNum={usablePins[i]}
        />
        <PinControl
          label={`GPIO ${usablePins[i + halfCount]}`}
          onChange={handleChange}
          pinNum={usablePins[i + halfCount]}
        />
      </PinRow>
    ));
  }

  return (
    <DisplayCard title={cardTitle}>
      <Grid container>
        {rowEntry}
      </Grid>
      <Grid container>
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Send
        </SubmitButton>
      </Grid>
    </DisplayCard>
  );

};

export default GpioControl;