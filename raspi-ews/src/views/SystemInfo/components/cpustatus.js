import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { DisplayCard } from '../../../components/common/Card';
import PercentDisplay from './percentDisplay';
import { useDataStreamContext } from '../SysInfoStreamProvider';

const percentUsage = (usages) => {
  let usageSum = 0;
  let totalSum = 0;
  usages.forEach(([usage, total]) => {
    usageSum += usage;
    totalSum += total;
  });
  return (totalSum > 0) ? (usageSum / totalSum) : 0;
};

const cardTitle = (
  <Typography component="h5" variant="h5" align="left">
    CPU Usage
  </Typography>
);

const CpuStatus = (props) => {

  const data = useDataStreamContext();
  const { cpu_info = {}, cpu_usage = {} } = data || {};
  const { load_1, load_5, load_15, usages } = { ...cpu_info, ...cpu_usage };
  const pct_usage = percentUsage(usages);

  const rowValues = [
    { label: "Load 1m", value: load_1.toFixed(2), unit: '' },
    { label: "Load 5m", value: load_5.toFixed(2), unit: '' },
    { label: "Load 15m", value: load_15.toFixed(2), unit: '' },
  ];

  return (
    <DisplayCard title={cardTitle}>
      <PercentDisplay percent={pct_usage * 100} rows={rowValues} />
    </DisplayCard>
  );
};

export default CpuStatus;