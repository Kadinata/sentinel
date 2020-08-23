import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Container,
} from '@material-ui/core';

import { LoginCard } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(8) * 4 / 3,
    flex: 1,
    alignItems: 'flex-start',
    display: 'flex',
  },
}));

const LoginView = ({ ...props }) => {

  const classes = useStyles();

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <LoginCard onSubmit={() => ({ success: false })} onError={handleError} />
      </Container>
    </div>
  );
};

export default LoginView;