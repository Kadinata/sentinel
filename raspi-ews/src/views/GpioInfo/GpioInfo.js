import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Loading, PageTitle, ErrorDisplay } from '../common';
import { useResourceRequest } from '../../common/hooks';

import GpioContent from './GpioContent';
import GpioStateProvider from './providers/GpioStateProvider';

const ENDPOINT_GPIO = 'api/v1/gpio';
const ENDPOINT_USABLE_PINS = 'api/v1/gpio/usable_pins';

const DATA_SCHEMA = {
  gpioState: ENDPOINT_GPIO,
  usablePins: ENDPOINT_USABLE_PINS,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    display: 'flex',
    flex: 1,
  },
}));

const GpioInfo = (props) => {
  const classes = useStyles();
  const { error, completed, data } = useResourceRequest(DATA_SCHEMA);
  const { ...value } = data;

  console.log("[Rendering]: GpioInfo", { error, completed, value });

  return (
    <Grid container direction="column" wrap="nowrap" alignItems="stretch" spacing={0} className={classes.root}>
      <PageTitle>{"GPIO Control & Status"}</PageTitle>

      <Loading show={!completed}>
        <GpioStateProvider value={value}>
          <ErrorDisplay error={error} >
            <GpioContent />
          </ErrorDisplay>
        </GpioStateProvider>
      </Loading>

    </Grid>
  );
};

export default GpioInfo;