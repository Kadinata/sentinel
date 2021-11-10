import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Grid,
  Container,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
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
}));

const DELAY_AFTER_SIGN_UP_MS = 850;
const REDIRECT_AFTER_SIGNUP = '/login';
const REDIRECT_IF_LOGGED_IN = '/';

const SignupView = (props) => {

  const classes = useStyles();
  const [signupSucceeded, setSignupSucceeded] = React.useState(false);
  const { handleSubmit } = useSignupHandler();

  const handleSuccess = () => {
    setTimeout(() => setSignupSucceeded(true), DELAY_AFTER_SIGN_UP_MS);
  };

  if (signupSucceeded) {
    return (<Redirect to={REDIRECT_AFTER_SIGNUP} />);
  }

  return (
    <AuthRedirect noRetry redirect={REDIRECT_IF_LOGGED_IN}>
      <Grid container className={classes.root}>
        <Container maxWidth="sm">
          <SignupCard onSubmit={handleSubmit} onSuccess={handleSuccess} />
        </Container>
      </Grid>
    </AuthRedirect>
  );
};

export default SignupView;