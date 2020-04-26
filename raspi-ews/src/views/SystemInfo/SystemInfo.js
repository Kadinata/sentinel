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

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  gridItem: {
    padding: theme.spacing(2),
  },
});

class SystemInfo extends React.Component {

  render() {

    const { data, classes } = this.props;

    if (!data) {
      return (<div />);
    }

    const { os_info, cpu_info, hdd_info, mem_info, netstats, uptime, localtime, mqtt_broker } = data;

    return (
      <div className={classes.root}>
        <Grid container direction="column" spacing={0}>
          <Grid container item alignItems="stretch" justify="flex-start">
            <Grid container item className={classes.gridItem}>
              <Typography component="h4" variant="h4" align="left">
                System Information
              </Typography>
            </Grid>
          </Grid>

          <Grid container item spacing={0} alignItems="stretch" justify="space-between">
            <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
              <CpuTemp temperature={cpu_info.cpu_temp} />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
              <Uptime uptime={uptime} />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
              <MqttStatus brokerStatus={mqtt_broker.online}/>
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
                <CpuStatus data={cpu_info} />
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
        </Grid>
      </div>
    );
  };
};

export default withStyles(useStyles)(SystemInfo);