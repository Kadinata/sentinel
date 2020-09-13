import React from 'react';
import { makeStyles } from '@material-ui/core';

import Sidebar from './components/sidebar';
import Topbar from './components/topbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    color: '#E9E9E9',
    fontSize: 'calc(10px + 2vmin)',
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  spacer: theme.mixins.toolbar,
}));

const MainLayout = ({ children, noTopbar, routes, ...props }) => {

  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Sidebar routes={routes} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main className={classes.content}>
        {!noTopbar && <Topbar onDrawerOpen={() => setDrawerOpen(true)} />}
        {children}
      </main>
    </div>
  );
};


export default MainLayout;