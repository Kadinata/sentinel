import React from 'react';
import { makeStyles } from '@material-ui/core';
import { StyledSwitch } from '../../../common/components/Switch';
import {
  Grid,
  Typography,
  Checkbox,
} from '@material-ui/core';

const _ID_USED = "used";
const _ID_OUTPUT = "output";
const _ID_HIGH = "high";

const useStyles = makeStyles((theme) => ({
  pinInfoContainer: {
    fontFamily: "monospace",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  label: {
    fontFamily: "inherit",
  },
}));

const initialState = {
  [_ID_USED]: false,
  [_ID_OUTPUT]: false,
  [_ID_HIGH]: false,
};

const usePinControlState = ({ pin, onChange }) => {

  const [controlState, setControlState] = React.useState(initialState);

  const handleChange = ({ target }) => {
    const { id, checked } = target;
    if ((id === _ID_USED) && (checked === false)) {
      const newState = {
        [_ID_USED]: false,
        [_ID_OUTPUT]: false,
        [_ID_HIGH]: false,
        pin,
      };
      onChange(newState);
      setControlState(newState);
    } else {
      onChange({ ...controlState, [id]: !!checked, pin });
      setControlState((prevState) => ({ ...prevState, [id]: !!checked }));
    }
  };

  return { controlState, handleChange };
};

const PinControl = ({ label, onChange, pinNum, ...props }) => {

  const classes = useStyles();

  const { controlState, handleChange, } = usePinControlState({
    pin: pinNum,
    onChange: (newState) => onChange(newState),
  });

  return (
    <Grid container item xs={6} alignItems="stretch" justify="space-between" className={classes.pinInfoContainer}>
      <Grid container item xs={2} alignContent="center" justify="flex-start" >
        <Checkbox
          size="small"
          color="default"
          id={_ID_USED}
          checked={controlState[_ID_USED]}
          onChange={handleChange}
        />
      </Grid>
      <Grid container item xs={4} alignContent="center" >
        <Typography className={classes.label}>
          {label}
        </Typography>
      </Grid>
      <Grid container item xs={3} alignContent="center" justify="center">
        <StyledSwitch
          size="small"
          id={_ID_OUTPUT}
          checked={controlState[_ID_OUTPUT]}
          disabled={!controlState[_ID_USED]}
          onChange={handleChange}
        />
      </Grid>
      <Grid container item xs={3} alignContent="center" justify="center">
        <StyledSwitch
          size="small"
          id={_ID_HIGH}
          checked={controlState[_ID_HIGH]}
          disabled={!controlState[_ID_USED]}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

PinControl.defaultProps = {
  pinNum: -1,
  onChange: () => { },
};

export default PinControl;