import React from 'react';

import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  spacer: theme.mixins.spacer,
  appBar: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
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