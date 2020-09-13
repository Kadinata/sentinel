import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Container,
} from '@material-ui/core';

import { SignupCard } from './components';
import useSignupHandler from './useSignupHandler';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(8) * 4 / 3,
    flex: 1,
    alignItems: 'flex-start',
    display: 'flex',
  },
  gridItem: {
    padding: theme.spacing(2),
  },
}));

const Redirect = '/login'

const SignupView = (props) => {
  const classes = useStyles();

  const { handleSubmit, handleError, handleSuccess } = useSignupHandler(Redirect);

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <SignupCard onSubmit={handleSubmit} onError={handleError} onSuccess={handleSuccess} />
      </Container>
    </div>
  );
};

export default SignupView;