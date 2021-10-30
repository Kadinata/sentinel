import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { ErrorBar } from '../../common/components/Alert';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    }
  },
}));

const ErrorDisplay = ({ error, ...props }) => {
  const classes = useStyles();
  const { message } = error || {};
  if (message) {
    console.log('error: ', error);
    return (
      <Grid container item alignItems="stretch" justify="flex-start" className={classes.gridItem}>
        <ErrorBar variant="filled" show>
          {message}
        </ErrorBar>
      </Grid>
    );
  }

  return (!!props.children) ? props.children : null;
};

export default ErrorDisplay;