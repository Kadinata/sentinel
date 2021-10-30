import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';

export const PinRow = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Grid container item spacing={0} alignItems="stretch" justify="space-between" className={classes.pinRow}>
      {children}
    </Grid>
  );
};