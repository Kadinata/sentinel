import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Typography,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    color: theme.palette.text.primary,
  },
}));

const Loading = ({ show, ...props }) => {

  const classes = useStyles();

  if (show) {
    return (
      <div className={classes.root}>
        <CircularProgress className={classes.progress} />
        <Typography>Loading</Typography>
      </div>
    );
  }

  return (!!props.children) ? props.children : null;
};

Loading.defaultProps = {
  show: true,
};

export default Loading;