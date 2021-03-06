import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  itemIcon: {
    color: theme.palette.text.primary,
  },
  itemText: {
  },
}));

const SidebarLink = ({ icon, title, to, onClick, ...props }) => {

  const classes = useStyles();

  return (
    <ListItem button component="a" href={to} onClick={onClick}>
      <ListItemIcon className={classes.itemIcon}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} className={classes.itemText} />
    </ListItem>
  );
};

export default SidebarLink;