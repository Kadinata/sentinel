import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import SidebarLink from './sidebarlink';
import ResponsiveDrawer from './ResponsiveDrawer';
import { useNavContext } from '../NavProvider';

const useStyles = makeStyles((theme) => ({
  drawer: {
    ...theme.mixins.sidebar,
    flexShrink: 0,
  },
  drawerPaper: {
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.background.default,
    },
    width: theme.mixins.sidebar.width,
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = ({ open, onClose, ...props }) => {

  const { routes } = useNavContext();

  const classes = useStyles();

  return (
    <ResponsiveDrawer
      className={classes.drawer}
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

Sidebar.defaultProps = {
  routes: [],
};

export default Sidebar;