import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    }
  }
}));

const PageTitle = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Grid container item alignItems="stretch" justify="flex-start" className={classes.gridItem}>
      <Typography component="h4" variant="h4" align="left">
        {children}
      </Typography>
    </Grid>
  );
};

export default PageTitle;