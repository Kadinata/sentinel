import React from 'react';
import { StyledSwitch } from '../../../common/components/Switch';
import {
  Grid,
  Typography,
  Checkbox,
} from '@material-ui/core';
import { useGpioControlState } from '../providers/GpioControlStateProvider';
import { useStyles } from './styles';

const _ID_USED = "used";
const _ID_OUTPUT = "output";
const _ID_HIGH = "high";

const initialState = {
  [_ID_USED]: false,
  [_ID_OUTPUT]: false,
  [_ID_HIGH]: false,
};

const usePinControlState = ({ pin, onChange }) => {

  const handleChange = React.useCallback(({ target }) => {
    const { id, checked } = target;
    if ((id === _ID_USED) && (checked === false)) {
      const newState = {
        [_ID_USED]: false,
        [_ID_OUTPUT]: false,
        [_ID_HIGH]: false,
        pin,
      };
      onChange(newState);
    } else {
      onChange({ [id]: !!checked, pin });
    }
  }, [onChange, pin]);

  return { handleChange };
};

const PinControl = ({ label, pinNum, ...props }) => {

  const classes = useStyles();
  const { handleChange: onChange, pinControlstate: controlState } = useGpioControlState(pinNum);

  const { handleChange } = usePinControlState({
    pin: pinNum,
    onChange: (newState) => onChange({ ...initialState, ...controlState, ...newState }),
  });

  return (
    <Grid container item alignItems="stretch" justify="space-between" className={classes.pinInfoContainer}>
      <Grid container item xs={2} alignContent="center" justify="flex-start" >
        <Checkbox
          size="small"
          color="default"
          id={_ID_USED}
          checked={!!controlState[_ID_USED]}
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
          checked={!!controlState[_ID_OUTPUT]}
          disabled={!controlState[_ID_USED]}
          onChange={handleChange}
        />
      </Grid>
      <Grid container item xs={3} alignContent="center" justify="center">
        <StyledSwitch
          size="small"
          id={_ID_HIGH}
          checked={!!controlState[_ID_HIGH]}
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