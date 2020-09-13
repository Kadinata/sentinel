import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Hidden, Drawer, IconButton } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
  },
}));

const ResponsiveDrawer = ({ children, ...props }) => {

  const classes = useStyles();

  return (
    <nav>
      <Hidden mdUp implementation="js">
        <Drawer
          {...props}
          variant="temporary"
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={props.onClose}
            >
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
          </div>
          {children}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="js">
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          {...props}
        >
          <div className={classes.drawerHeader} />
          {children}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default ResponsiveDrawer;