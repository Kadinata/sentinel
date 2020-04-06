import React, { useEffect, useState } from 'react';
import './App.css';
import Themes from './configs/Themes';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';

import SystemInfo from './views/SystemInfo/SystemInfo';
import TestView from './views/Test/Test';
import MainLayout from './layouts/main';
import Routes from './routes';
import Data from './models/data';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    minHeight: '100vh',
    fontSize: 'calc(10px + 2vmin)',
    color: Themes.Colors.FOREGROUND,
    background: 'linear-gradient(to bottom right, #13547A, #80D0C7)',
  },
}));

function App() {

  const classes = useStyles();

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `/api/v1/sysinfo`;
        const result = await (await fetch(endpoint)).json();
        setData(result);
      } catch {
        setData(Data);
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <MainLayout className={[classes.header]} routes={Routes}>
          <Switch>
            <Route path="/systems">
              <SystemInfo data={data} />
            </Route>
            <Route path="/test">
              <TestView />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
