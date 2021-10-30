import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Loading, PageTitle, ErrorDisplay } from '../common';

import GpioContent from './GpioContent';
import { useGpioState } from './hooks';
import GpioStateProvider from './providers/GpioStateProvider';

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
  const { error, isLoading, ...value } = useGpioState();

  console.log("[Rendering]: GpioInfo", { error, isLoading });

  return (
    <Grid container direction="column" wrap="nowrap" alignItems="stretch" spacing={0} className={classes.root}>
      <PageTitle>{"GPIO Control & Status"}</PageTitle>

      <Loading show={!!isLoading}>
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