import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Container,
  Grid,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { AuthRedirect } from '../common';
import LoginCard from './loginCard';
import { useLoginHandler } from './hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(8) * 4 / 3,
    flex: 1,
    alignItems: 'flex-start',
    display: 'flex',
    color: 'inherit',
  },
}));

const DELAY_AFTER_LOGIN_MS = 850;
const RedirectAfter = '/';

const LoginView = (props) => {

  const classes = useStyles();
  const [loginSucceeded, setLoginSucceeded] = React.useState(false);
  const { handleSubmit } = useLoginHandler();

  const handleSuccess = () => {
    setTimeout(() => setLoginSucceeded(true), DELAY_AFTER_LOGIN_MS);
  };

  if (loginSucceeded) {
    return (<Redirect to={RedirectAfter} />);
  }

  return (
    <AuthRedirect noRetry redirect={RedirectAfter}>
      <Grid container className={classes.root}>
        <Container maxWidth="sm">
          <LoginCard onSubmit={handleSubmit} onSuccess={handleSuccess} />
        </Container>
      </Grid>
    </AuthRedirect>
  );
};

export default LoginView;