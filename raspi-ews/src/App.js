import React from 'react';
import './App.css';
import Themes from './configs/Themes';

import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import SystemInfo from './views/SystemInfo/SystemInfo';

const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: '100vh',
    fontSize: 'calc(10px + 2vmin)',
    color: Themes.Colors.FOREGROUND,
    background: 'linear-gradient(to bottom right, #13547A, #80D0C7)',
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid
        container
        className={classes.header}
        direction="column"
        alignItems="stretch"
        justify="flex-start">
        <SystemInfo />
      </Grid>
    </div>
  );
}

export default App;
