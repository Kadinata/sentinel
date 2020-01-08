import React from 'react';

import {
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';

const Storage = (props) => {

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="left">
          Storage
        </Typography>
      }
    >
    </DisplayCard>
  );
};

export default Storage;