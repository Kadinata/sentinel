import React from 'react';
import { makeStyles } from '@material-ui/core';

import {
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';

const useStyles = makeStyles((theme) => ({

}));

const NetworkUsage = (props) => {
  const classes = useStyles();

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="left">
          Network Usage
        </Typography>
      }
    >

    </DisplayCard>
  );
};

export default NetworkUsage;