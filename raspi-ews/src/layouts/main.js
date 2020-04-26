import React from 'react';
import { makeStyles } from '@material-ui/core';

import Sidebar from './components/sidebar';
import Topbar from './components/topbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: 'inherit',
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

const MainLayout = ({ children, className, noTopbar, routes, ...props }) => {

  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className={className}>
      <Sidebar routes={routes} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main className={classes.content}>
        {!noTopbar && <Topbar onDrawerOpen={() => setDrawerOpen(true)} />}
        {children}
      </main>
    </div>
  );
};

MainLayout.defaultProps = {
  routes: [],
};

export default MainLayout;