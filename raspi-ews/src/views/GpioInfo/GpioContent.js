import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GpioControl, GpioStatus } from './components';
import { Grid } from '@material-ui/core';
import PinLayout from './config/PinLayout';
import GpioStreamProvider from './providers/GpioStreamProvider';
import { useGpioStateContext } from './providers/GpioStateProvider';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2),
    }
  },
}));

const GpioContent = (props) => {
  const classes = useStyles();
  const { gpioState } = useGpioStateContext();

  console.log('[Rendering]: GpioContent ');

  return (
    <React.Fragment>
      <Grid container item spacing={0} alignItems="stretch" justify="space-between">
        <Grid item lg={6} sm={12} xs={12} className={classes.gridItem}>
          <GpioControl pinLayout={PinLayout} />
        </Grid>
        <Grid item lg={6} sm={12} xs={12} className={classes.gridItem}>
          <GpioStreamProvider enable initialData={gpioState}>
            <GpioStatus pinLayout={PinLayout} />
          </GpioStreamProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default GpioContent;