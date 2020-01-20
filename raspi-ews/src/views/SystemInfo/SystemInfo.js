import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import StatsCard from '../../components/common/Card/StatsCard';
import { CpuTemp, Uptime, Storage, DeviceInfo, Memory, NetworkUsage, MqttStatus, CpuStatus } from './components';

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
              <CpuTemp temperature={39.2} />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12} className={classes.gridItem}>
              <Uptime uptime={180122 - (2 * 86400) - 7200} />
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
                <DeviceInfo />
              </Grid>
              <Grid item lg={12} md={6} xs={12} className={classes.gridItem}>
                <CpuStatus />
              </Grid>
            </Grid>

            <Grid item md sm={12} xs={12} className={classes.gridItem}>
              <Storage />
            </Grid>

            <Grid container item spacing={0} alignItems="stretch" justify="space-between" lg={4} sm={12} xs={12}>
              <Grid item lg={12} md={6} xs={12} className={classes.gridItem}>
                <Memory />
              </Grid>
              <Grid item lg={12} md={6} xs={12} className={classes.gridItem}>
                <NetworkUsage />
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </div>
    );
  };
};

export default withStyles(useStyles)(SystemInfo);