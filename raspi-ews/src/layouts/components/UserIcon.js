import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { useAuthDataContext } from '../../auth/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  menu: {
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.background.default,
    },
  },
  menuIcon: {
    minWidth: "36px",
  },
}));

const useUserIconMenu = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget || null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, handleClick, handleClose };
};

const iconLogout = (<FontAwesomeIcon icon={faSignOutAlt} className="fa-fw" />);

const MenuEntry = React.forwardRef(({ icon, text, onClick, ...props }, ref) => {
  const classes = useStyles();
  return (
    <MenuItem onClick={onClick} {...props} ref={ref}>
      {icon && (<ListItemIcon className={classes.menuIcon}>
        {icon}
      </ListItemIcon>)}
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );
});

const UserIcon = () => {

  const classes = useStyles();
  const { user, token, authCheckComplete, onLogout } = useAuthDataContext();
  const { anchorEl, handleClick, handleClose } = useUserIconMenu();

  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  if ((!user || !token) && authCheckComplete) {
    return null;
  }

  return (
    <div>
      <IconButton
        color="inherit"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faUserCircle} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={classes.menu}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuEntry icon={iconLogout} text={"Logout"} onClick={handleLogout} />
      </Menu>
    </div>
  )
};

export default UserIcon;