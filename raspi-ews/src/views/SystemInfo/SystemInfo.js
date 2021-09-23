import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { ErrorBar } from '../../components/common/Alert';

import {
  CpuTemp,
  Uptime,
  Storage,
  DeviceInfo,
  Memory,
  NetworkUsage,
  StartTime,
  CpuStatus,
  SystemTime
} from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    display: 'flex',
    flex: 1,
  },
  gridItem: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    }
  },
}));

const ErrorDisplay = ({ error, ...props }) => {
  const classes = useStyles();
  if (!error) return null;
  console.log('error: ', error);
  const { message } = error;
  return (
    <Grid container item alignItems="stretch" justify="flex-start" className={classes.gridItem}>
      {/* <Typography>Error: Data failed to load</Typography> */}
      <ErrorBar variant="filled" show>
        {message}
      </ErrorBar>
    </Grid>
  );
};

const ContentDisplay = ({ ...props }) => {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Grid container item spacing={0} alignItems="stretch" justify="space-between">
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
          <CpuTemp />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
          <Uptime />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
          {/* <MqttStatus brokerStatus={mqtt_broker.online} /> */}
          <StartTime />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
          <SystemTime />
        </Grid>
      </Grid>

      <Grid container item spacing={0} alignItems="stretch" justify="space-between" lg={4} sm={12} xs={12}>
        <Grid item lg={12} md={6} xs={12} className={classes.gridItem}>
          <DeviceInfo />
        </Grid>
        <Grid item lg={12} md={6} xs={12} className={classes.gridItem}>
          <CpuStatus />
        </Grid>
      </Grid>

      <Grid item lg md={6} sm={12} xs={12} className={classes.gridItem}>
        <Storage />
      </Grid>

      <Grid container item spacing={0} alignItems="stretch" justify="space-between" lg md={6} sm={12} xs={12}>
        <Grid item lg={12} md={12} xs={12} className={classes.gridItem}>
          <Memory />
        </Grid>
        <Grid item lg={12} md={12} xs={12} className={classes.gridItem}>
          <NetworkUsage />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { ErrorDisplay, ContentDisplay };