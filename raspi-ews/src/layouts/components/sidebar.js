import React from 'react';
import { Drawer, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import SidebarLink from './sidebarlink';
import ResponsiveDrawer from './ResponsiveDrawer';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.background.default,
    },
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = ({ routes, open, onClose, ...props }) => {

  const classes = useStyles();

  return (
    <ResponsiveDrawer
      className={[classes.drawer]}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={!!open}
      onClose={onClose}
      variant="permanent"
    >
      <List component="nav">
        {routes.map(({ title, path, icon }, key) => {
          return (
            <SidebarLink
              title={title}
              icon={icon}
              to={path}
              key={key}
              onClick={onClose}
            />
          );
        })}
      </List>
    </ResponsiveDrawer>
  );
};

export default Sidebar;