import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';

import Theme from './configs/Theme';

import Routes from './routes/Routes';
import AuthDataProvider from './auth/AuthProvider';
import NavProvider from './layouts/NavProvider';
import NavRoutes from './navRoutes';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    minHeight: '100vh',
    color: '#E9E9E9',
    fontSize: 'calc(10px + 2vmin)',
  },
  canvas: {
    display: 'flex',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #13547A, #80D0C7)',
    color: '#E9E9E9',
  },
}));

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={Theme}>
      <div className={classes.canvas}>
        <Router>
          <AuthDataProvider>
            <NavProvider routes={NavRoutes}>
              <Routes />
            </NavProvider>
          </AuthDataProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;