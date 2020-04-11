import React from 'react';

import { makeStyles } from '@material-ui/core';

import {
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';

const LoginCard = ({ ...props }) => {

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="center">
          Login
        </Typography>
      }
    >

      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Login
          </Button>
      </form>
    </DisplayCard>
  );

};

export default LoginCard;