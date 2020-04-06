import React from 'react';
import { makeStyles } from '@material-ui/core';

import Sidebar from './components/sidebar';
import Topbar from './components/topbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  spacer: theme.mixins.toolbar,
}));

const MainLayout = ({ children, className, noTopbar, routes, ...props }) => {

  const classes = useStyles();

  return (
    <div className={className}>
      <Sidebar routes={routes} />
      <main className={classes.content}>
        {!noTopbar && <Topbar />}
        {children}
      </main>
    </div>
  );
};

MainLayout.defaultProps = {
  routes: [],
};

export default MainLayout;