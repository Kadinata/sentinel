import React from 'react';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';
import { PercentCircle } from '../../../components/common/ProgressCircle';
import { TableCell, Table, TableBody, TableRow } from '../../../components/common/Table';

const RowItem = ({ label, value, classes }) => {
  return (
    <TableRow>
      <TableCell>
        <Typography align='left'>{label}</Typography>
      </TableCell>
      <TableCell>
        <Typography align='left'>{value}</Typography>
      </TableCell>
    </TableRow>
  );
};

const CpuStatus = (props) => {
  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="left">
          CPU Usage
        </Typography>
      }
    >
      <Grid container alignItems="center">
        <Grid container item xs={3} alignItems="center">
          <PercentCircle value={16.7} />
        </Grid>
        <Grid container item xs={9}>
          <Table size="small">
            <TableBody>
              <RowItem label={"Load 1m"} value={0.20} />
              <RowItem label={"Load 5m"} value={0.14} />
              <RowItem label={"Load 15m"} value={0.06} />
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </DisplayCard>
  );
};

export default CpuStatus;