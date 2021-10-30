import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

const GpioState = ({ oenable, high, locked, ...rest }) => {
  const classes = useStyles({ oenable, high });
  const mode = (!!oenable) ? 'OUT' : 'IN';
  const circle = '\u2B24';
  return (
    <React.Fragment>
      <Grid container item xs={4} alignContent="center" >
        <Typography className={classes.pinMode}>
          {mode}
        </Typography>
      </Grid>
      <Grid container item xs={3} alignContent="center" justify="center">
        <Typography className={classes.pinState}>
          {circle}
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

const PinStatus = ({ label, pinType, oenable, high, locked, ...props }) => {

  const classes = useStyles();
  const isGpio = !!(pinType === 'gpio');
  let labelClass = classes.label;
  switch (pinType) {
    case 'power':
      labelClass = classes.powerPinLabel;
      break;
    case 'ground':
      labelClass = classes.groundPinLabel;
      break;
    case 'misc':
      labelClass = classes.miscPinLabel;
      break;
    default:
      labelClass = classes.label;
  }

  return (
    <Grid container item xs={6} alignItems="stretch" justify="space-between" className={classes.pinInfoContainer}>
      <Grid container item xs={5} alignContent="center" >
        <Typography className={labelClass}>
          {label}
        </Typography>
      </Grid>
      {isGpio && (<GpioState oenable={oenable} high={high} locked={locked} />)}
    </Grid>
  );
};

export default PinStatus;