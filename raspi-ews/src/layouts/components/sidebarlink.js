import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  itemIcon: {
    color: '#E9E9E9',
  },
  itemText: {
    color: '#E9E9E9',
  },
}));

const SidebarLink = ({ icon, title, to, ...props }) => {

  const classes = useStyles();

  return (
    <ListItem button component="a" href={to}>
      <ListItemIcon className={classes.itemIcon}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} className={classes.itemText} />
    </ListItem>
  );
};

export default SidebarLink;