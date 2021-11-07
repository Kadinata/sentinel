import React from 'react';
import { SubmitButton } from '../../../common/components/Button';
import { PinControlHeader } from './PinRowHeaders';
import { useGpioControlSubmit } from '../providers/GpioControlStateProvider';
import PinControl from './PinControl';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Hidden,
} from '@material-ui/core';
import { usePageDataContext } from '../../common/PageDisplayManager';

const useStyles = makeStyles((theme) => ({
  submitButton: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
}));

const GpioSubmitButton = () => {
  const classes = useStyles();
  const handleSubmit = useGpioControlSubmit();
  return (
    <SubmitButton
      type="submit"
      variant="contained"
      color="primary"
      onClick={handleSubmit}
      className={classes.submitButton}
    >
      Apply
    </SubmitButton>
  );
};

const GpioControl = ({ pinLayout, ...props }) => {

  const { usablePins = [] } = usePageDataContext();
  const halfCount = usablePins.length / 2;

  console.log('[Rendering] GpioControl');

  const leftColPins = usablePins.filter((pinNum, index) => (index < halfCount));
  const rightColPins = usablePins.filter((pinNum, index) => (index >= halfCount));

  const leftColumn = leftColPins.map((pinNum) => (
    <PinControl pinNum={pinNum} label={`GPIO ${pinNum}`} key={pinNum} />
  ));

  const rightColumn = rightColPins.map((pinNum) => (
    <PinControl pinNum={pinNum} label={`GPIO ${pinNum}`} key={pinNum} />
  ));

  return (
    <React.Fragment>
      <Grid container>
        <Grid container item sm={6} xs={12}>
          <PinControlHeader key={'header'} />
          {leftColumn}
        </Grid>
        <Grid container item sm={6} xs={12}>
          <Hidden xsDown>
            <PinControlHeader key={'header'} />
          </Hidden>
          {rightColumn}
        </Grid>
      </Grid>
      <GpioSubmitButton />
    </React.Fragment>
  );
};

export default GpioControl;