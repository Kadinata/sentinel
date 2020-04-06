import React from 'react';
import { Drawer, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';

import SidebarLink from './sidebarlink';



const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
    background: 'rgba(0,0,26, 0.35)',
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = ({ routes, ...props }) => {

  const classes = useStyles();

  return (
    <Drawer
      className={[classes.drawer]}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
    >
      <div className={classes.toolbar} />
      <List component="nav">
        {routes.map(({ title, path, icon }, key) => {
          return (
            <SidebarLink
              title={title}
              icon={icon}
              to={path}
              key={key}
            />
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;