import React from 'react';

import {
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';
import PercentDisplay from './percentDisplay';
import { formatBytes } from '../../../utils';

const cardTitle = (
  <Typography component="h5" variant="h5" align="left">
    Memory
  </Typography>
);

const Memory = ({ data }) => {
  const { total_mem, free_mem, percent } = data;

  const total = formatBytes(total_mem);
  const free = formatBytes(free_mem);
  const used = formatBytes(total_mem - free_mem);

  const rowValues = [
    { label: "Available", value: free.value.toFixed(2), unit: free.unit },
    { label: "In Use", value: used.value.toFixed(2), unit: used.unit },
    { label: "Total", value: total.value.toFixed(2), unit: total.unit },
  ];

  return (
    <DisplayCard title={cardTitle} >
      <PercentDisplay percent={percent * 100} rows={rowValues} />
    </DisplayCard>
  );
};

Memory.defaultProps = {
  data: {},
};

export default Memory;