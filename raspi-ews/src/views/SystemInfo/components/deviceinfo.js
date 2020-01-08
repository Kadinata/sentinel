import React from 'react';

import { makeStyles } from '@material-ui/core';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
  avatar: {
    backgroundColor: 'transparent',
    color: 'black',
    height: 40,
    width: 40
  },
}));

const data = {
  Hostname: 'raspberrypi (192.168.1.4)',
  Kernel: 'Linux 4.19.58-v7+',
  Processor: 'ARMv7 Processor rev 4 (v7l)',
  Distribution: 'Raspbian GNU/Linux 10 (buster)',
};

const renderLine = (label, value, id, classes) => {
  return (
    <Grid container item id={id}>
      <Grid item xs={4}>
        <Typography align='left'>
          {label}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography align='left'>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

const DeviceInfo = (props) => {
  const classes = useStyles();

  const entries = Object.keys(data).map((key, index) => (renderLine(key, data[key], index, classes)));

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="left">
          Device Info
        </Typography>
      }
    >
      <Grid container>
        {entries}
      </Grid>
    </DisplayCard>
  );
};

export default DeviceInfo;