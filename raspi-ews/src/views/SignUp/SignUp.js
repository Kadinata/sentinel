import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Grid,
  Container,
} from '@material-ui/core';

import SignupCard from './signupCard';
import { useSignupHandler } from './hooks';
import { AuthRedirect } from '../common';

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

const SignupView = (props) => {
  const classes = useStyles();

  const { handleSubmit, handleSuccess } = useSignupHandler('/login');

  return (
    <AuthRedirect redirect='/test'>
      <Grid container className={classes.root}>
        <Container maxWidth="sm">
          <SignupCard onSubmit={handleSubmit} onSuccess={handleSuccess} />
        </Container>
      </Grid>
    </AuthRedirect>
  );
};

export default SignupView;