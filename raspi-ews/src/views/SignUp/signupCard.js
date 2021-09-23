import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  CardMedia,
} from '@material-ui/core';

import { DisplayCard } from '../../components/common/Card';
import { SubmitButton } from '../../components/common/Button';
import {
  ErrorBar,
  SuccessBar,
} from '../../components/common/Alert';

import { useSignupForm, useBtnState } from './hooks';
import States from './FormStates';

const useStyles = makeStyles((theme) => ({
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
  confirmpw: "",
};

const SignupCard = ({ onSubmit, onError, onSuccess, ...props }) => {
  const classes = useStyles();

  const {
    values,
    errors,
    state,
    handleChange,
    handleSubmit,
  } = useSignupForm({
    initialState,
    onSubmit: (values) => onSubmit(values)
  });

  const btnState = useBtnState({ values, state });

  React.useEffect(() => {
    switch (state) {
      case States.error:
        return onError(errors);
      case States.success:
        return onSuccess();
      default:
        return;
    }
  }, [state, errors, onError, onSuccess]);

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

      <ErrorBar variant="filled" show={((state === States.error) && (!!errors.general))}>
        {errors.general}
      </ErrorBar>

      <SuccessBar variant="filled" show={(state === States.success)}>
        User Created.
      </SuccessBar>

      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="username"
          label="Username"
          id="username"
          disabled={(state === States.success)}
          error={!!errors.username}
          helperText={errors.username}
          value={values.username}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          disabled={(state === States.success)}
          error={!!errors.password}
          helperText={errors.password}
          value={values.password}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmpw"
          type="password"
          label="Re-type password"
          id="confirmpw"
          disabled={(state === States.success)}
          error={!!errors.confirmpw}
          helperText={errors.confirmpw}
          value={values.confirmpw}
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
          Create Account
        </SubmitButton>
      </form>
    </DisplayCard>
  );
};

SignupCard.defaultProps = {
  onSubmit: () => ({ success: false, message: initialState }),
  onSuccess: () => { },
  onError: () => { },
};

export default SignupCard;