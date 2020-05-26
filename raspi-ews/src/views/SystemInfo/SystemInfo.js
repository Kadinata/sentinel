import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import {
  CpuTemp,
  Uptime,
  Storage,
  DeviceInfo,
  Memory,
  NetworkUsage,
  MqttStatus,
  CpuStatus,
  SystemTime
} from './components';

import { Loading } from '../common';

const useStyles = (theme) => ({
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
});

class SystemInfoPage extends React.Component {

  renderContents() {
    const { data, classes } = this.props;

    if (!data) return null;

    const { os_info, cpu_info, cpu_usage, hdd_info, mem_info, netstats, uptime, localtime, mqtt_broker } = data;

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
            <MqttStatus brokerStatus={mqtt_broker.online} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
            <SystemTime time={localtime} />
          </Grid>
        </Grid>

        <Grid container item spacing={0} alignItems="stretch" justify="space-between">
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

        </Grid>

      </React.Fragment>
    );
  }

  render() {

    const { data, classes } = this.props;

    return (
      <Grid container direction="column" spacing={0} className={classes.root}>
        <Grid container item alignItems="stretch" justify="flex-start" className={classes.gridItem}>
          <Typography component="h4" variant="h4" align="left">
            System Information
          </Typography>
        </Grid>

        <Loading show={!data}>
          {this.renderContents()}
        </Loading>

      </Grid>
    );
  };
};

export default withStyles(useStyles)(SystemInfoPage);