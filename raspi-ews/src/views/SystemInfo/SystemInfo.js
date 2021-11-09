import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../common/styles';
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

const ContentDisplay = (props) => {
  const classes = useStyles();

  return (
    <Grid container item spacing={0} alignItems="stretch" justify="space-between">
      <Grid container item spacing={0} alignItems="stretch" justify="space-between">
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.widgetContainer}>
          <CpuTemp />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.widgetContainer}>
          <Uptime />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.widgetContainer}>
          <StartTime />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.widgetContainer}>
          <SystemTime />
        </Grid>
      </Grid>

      <Grid container item spacing={0} alignItems="stretch" justify="space-between" lg={4} sm={12} xs={12}>
        <Grid item lg={12} md={6} xs={12} className={classes.widgetContainer}>
          <DeviceInfo />
        </Grid>
        <Grid item lg={12} md={6} xs={12} className={classes.widgetContainer}>
          <CpuStatus />
        </Grid>
      </Grid>

      <Grid item lg md={6} sm={12} xs={12} className={classes.widgetContainer}>
        <Storage />
      </Grid>

      <Grid container item spacing={0} alignItems="stretch" justify="space-between" lg md={6} sm={12} xs={12}>
        <Grid item lg={12} md={12} xs={12} className={classes.widgetContainer}>
          <Memory />
        </Grid>
        <Grid item lg={12} md={12} xs={12} className={classes.widgetContainer}>
          <NetworkUsage />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentDisplay;