import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  useLocation,
  matchPath,
} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  itemIcon: {
    justifyContent: 'center',
    color: 'inherit',
  },
  itemText: {
    paddingLeft: theme.spacing(1),
  },
  listItem: {
    color: theme.palette.text.disabled,
  },
  listItemActive: {
    color: theme.palette.primary.contrastText,
    backgroundColor: 'rgba(255,255,255,0.05)',
    boxShadow: 'inset 0.1875rem 0 0',
  },
}));

const useSelectionDetect = (path) => {
  const { pathname } = useLocation();
  if (!path) return false;
  return (matchPath(pathname, { path }) !== null);
};

const SidebarLink = ({ icon, title, to, onClick, ...props }) => {

  const classes = useStyles();
  const selected = useSelectionDetect(to);
  const listItemClass = selected ? classes.listItemActive : classes.listItem;

  return (
    <ListItem button component="a" href={to} onClick={onClick} className={listItemClass}>
      <ListItemIcon className={classes.itemIcon} size="20">
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} className={classes.itemText} />
    </ListItem>
  );
};

export default SidebarLink;