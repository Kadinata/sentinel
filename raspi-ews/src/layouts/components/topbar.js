import React from 'react';

import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  spacer: theme.mixins.spacer,
  appBar: {
    color: '#E9E9E9',
    backgroundColor: 'rgba(33, 33, 64, 0.7)',
  },
}));

const Topbar = (props) => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar />
      </AppBar>
      <div className={classes.spacer} />
    </React.Fragment>
  );
};

export default Topbar;