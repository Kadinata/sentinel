import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import StatsCard from '../../components/common/Card/StatsCard';
import { CpuTemp, Uptime, Storage, DeviceInfo, Memory, NetworkUsage, MqttStatus, CpuStatus } from './components';

import Data from '../../models/data';

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  gridItem: {
    padding: theme.spacing(2),
  },
});

class SystemInfo extends React.Component {

  render() {

    const { classes } = this.props;
    const { os_info, cpu_info, hdd_info, mem_info, netstats } = Data;

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
              <Uptime uptime={os_info.uptime} />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
              <MqttStatus />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
              <StatsCard
                // background={"#225bc3"}
                background={"#e67e22"}
                icon={
                  <FontAwesomeIcon
                    className="fa-2x"
                    icon={faQuestionCircle}
                  />
                }
              />
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