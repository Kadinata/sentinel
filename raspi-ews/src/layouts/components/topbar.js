import React from 'react';

import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  spacer: theme.mixins.spacer,
  appBar: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: "none",
    },
  },
}));

const Topbar = ({ onDrawerOpen, ...props }) => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onDrawerOpen}
            className={classes.menuButton}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.spacer} />
    </React.Fragment>
  );
};

export default Topbar;