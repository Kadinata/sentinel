import React from 'react';

import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import UserIcon from './UserIcon';

const useStyles = makeStyles((theme) => ({
  spacer: theme.mixins.spacer,
  appBar: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
  },
  toolbar_spacer: {
    flexGrow: 1,
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
          <Box className={classes.toolbar_spacer}/>
          <UserIcon />
        </Toolbar>
      </AppBar>
      <div className={classes.spacer} />
    </React.Fragment>
  );
};

export default Topbar;