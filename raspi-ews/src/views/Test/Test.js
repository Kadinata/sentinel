import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { Loading } from '../common';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    display: 'flex',
    flex: 1,
  },
  gridItem: {
    padding: theme.spacing(2),
  },
}));

const DataDisplay = ({ data, ...props }) => {
  if (!data) return null;

  return (
    <Typography>
      {JSON.stringify(data, null, 2)}
    </Typography>
  );
};

const ErrorDisplay = ({ error, ...props }) => {

  if (!error) return null;

  return (
    <div>
      <Typography>
        {JSON.stringify(error, null, 2)}
      </Typography>
    </div>
  );
};

const TestView = ({ data, error, loading, ...props }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Typography component="h4" variant="h4" align="left">
          Test Page
        </Typography>

        <Loading show={!!loading}>
          <ErrorDisplay error={error} />
          <DataDisplay data={data} />
        </Loading>
      </Grid>
    </div>
  );
};

export default TestView;