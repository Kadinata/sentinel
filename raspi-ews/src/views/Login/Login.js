import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Container,
} from '@material-ui/core';

import LoginCard from './loginCard';
import { useLoginHandler } from './hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(8) * 4 / 3,
    flex: 1,
    alignItems: 'flex-start',
    display: 'flex',
  },
}));

const Redirect = '/test';

const LoginView = (props) => {

  const classes = useStyles();

  const { handleSubmit, handleError, handleSuccess } = useLoginHandler(Redirect);
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <LoginCard onSubmit={handleSubmit} onError={handleError} onSuccess={handleSuccess} />
      </Container>
    </div>
  );
};

export default LoginView;