import React from 'react';

import { makeStyles } from '@material-ui/core';

import {
  Typography,
  TextField,
  CardMedia,
} from '@material-ui/core';

import { DisplayCard } from '../../common/components/Card';
import { SubmitButton } from '../../common/components/Button';
import {
  ErrorBar,
  SuccessBar,
} from '../../common/components/Alert';

import {
  useLoginForm,
  useBtnState
} from './hooks';

import States from './LoginStates';

const useStyles = makeStyles(theme => ({
  media: {
    height: 320,
    objectFit: 'scale-down',
  },
  submitButton: {
    marginTop: theme.spacing(1),
  },
}));

const initialState = {
  username: "",
  password: "",
};

const LoginCard = ({ onSubmit, onError, onSuccess, ...props }) => {

  const classes = useStyles();

  const {
    values,
    errors,
    state,
    handleChange,
    handleSubmit,
  } = useLoginForm({
    initialState,
    onSubmit: (values) => onSubmit(values)
  });

  const btnState = useBtnState({ ...values, state });

  React.useEffect(() => {
    switch (state) {
      case States.error:
        return onError(errors);
      case States.success:
        return onSuccess();
      default:
        return;
    }
  }, [state, errors, onSuccess, onError]);

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="center">
          Sentinel System
        </Typography>
      }
    >

      <CardMedia
        className={classes.media}
        component="img"
        image="https://www.raspberrypi.org/app/uploads/2011/10/Raspi-PGB001.png"
        title="Raspberry Pi"
      />

      <ErrorBar variant="filled" show={(state === States.error)}>
        {errors.message}
      </ErrorBar>

      <SuccessBar variant="filled" show={(state === States.success)}>
        Login successful.
      </SuccessBar>

      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="username"
          label="username"
          id="username"
          disabled={(state === States.success)}
          value={values.username}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="password"
          type="password"
          id="password"
          disabled={(state === States.success)}
          value={values.password}
          onChange={handleChange}
        />
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={btnState.disabled}
          loading={btnState.loading}
          success={btnState.success}
          className={classes.submitButton}
        >
          Login
        </SubmitButton>
      </form>
    </DisplayCard>
  );
};

LoginCard.defaultProps = {
  onSubmit: () => { },
  onError: () => { },
  onSuccess: () => { },
};

export default LoginCard;