import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Container,
  Grid,
} from '@material-ui/core';

import LoginCard from './loginCard';
import { useLoginHandler } from './hooks';
import { AuthRedirect } from '../common';

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

const RedirectAfter = '/test';

const LoginView = (props) => {

  const classes = useStyles();

  const { handleSubmit, handleSuccess } = useLoginHandler(RedirectAfter);

  return (
    <AuthRedirect redirect={RedirectAfter}>
      <Grid container className={classes.root}>
        <Container maxWidth="sm">
          <LoginCard onSubmit={handleSubmit} onSuccess={handleSuccess} />
        </Container>
      </Grid>
    </AuthRedirect>
  );
};

export default LoginView;