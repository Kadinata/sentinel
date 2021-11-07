import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

export const PinStatusHeader = (props) => {
  const classes = useStyles();
  return (
    <Grid container item alignItems="stretch" justify="space-between" className={classes.pinInfoContainer}>
      <Grid container item xs={5} alignContent="center" >
        <Typography className={classes.headerLabel}>
          Pin
        </Typography>
      </Grid>
      <Grid container item xs={4} alignContent="center" >
        <Typography className={classes.headerLabel}>
          Mode
        </Typography>
      </Grid>
      <Grid container item xs={3} alignContent="center" justify="center" >
        <Typography className={classes.headerLabel} align="right">
          Status
        </Typography>
      </Grid>
    </Grid>
  );
};

export const PinControlHeader = (props) => {
  const classes = useStyles();
  return (
    <Grid container item alignItems="stretch" justify="space-between" className={classes.pinInfoContainer}>
      <Grid container item xs={2} alignContent="center" justify="center" />
      <Grid container item xs={4} alignContent="center" >
        <Typography className={classes.headerLabel}>
          Pin
        </Typography>
      </Grid>
      <Grid container item xs={3} alignContent="center" justify="center" >
        <Typography className={classes.headerLabel} align="center">
          Output
        </Typography>
      </Grid>
      <Grid container item xs={3} alignContent="center" justify="center" >
        <Typography className={classes.headerLabel} align="right">
          State
        </Typography>
      </Grid>
    </Grid>
  );
};
