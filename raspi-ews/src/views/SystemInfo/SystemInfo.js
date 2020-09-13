import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { ErrorBar } from '../../components/common/Alert';

import {
  CpuTemp,
  Uptime,
  Storage,
  DeviceInfo,
  Memory,
  NetworkUsage,
  MqttStatus,
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

const ContentDisplay = ({ data, ...props }) => {
  const classes = useStyles();
  if (!data) return null;

  const { os_info, cpu_info, cpu_usage, hdd_info, mem_info, netstats, uptime, localtime, startTime, mqtt_broker } = data;

  return (
    <React.Fragment>

      <Grid container item spacing={0} alignItems="stretch" justify="space-between">
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
          <CpuTemp temperature={cpu_info.cpu_temp} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
          <Uptime uptime={uptime} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
          {/* <MqttStatus brokerStatus={mqtt_broker.online} /> */}
          <StartTime startTime={startTime} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
          <SystemTime time={localtime} />
        </Grid>
      </Grid>

      <Grid container item spacing={0} alignItems="stretch" justify="space-between" lg={4} sm={12} xs={12}>
        <Grid item lg={12} md={6} xs={12} className={classes.gridItem}>
          <DeviceInfo data={{ ...cpu_info, ...os_info }} />
        </Grid>
        <Grid item lg={12} md={6} xs={12} className={classes.gridItem}>
          <CpuStatus data={{ ...cpu_info, ...cpu_usage }} />
        </Grid>
      </Grid>

      <Grid item lg md={6} sm={12} xs={12} className={classes.gridItem}>
        <Storage data={hdd_info} />
      </Grid>

      <Grid container item spacing={0} alignItems="stretch" justify="space-between" lg md={6} sm={12} xs={12}>
        <Grid item lg={12} md={12} xs={12} className={classes.gridItem}>
          <Memory data={mem_info} />
        </Grid>
        <Grid item lg={12} md={12} xs={12} className={classes.gridItem}>
          <NetworkUsage data={netstats} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { ErrorDisplay, ContentDisplay };