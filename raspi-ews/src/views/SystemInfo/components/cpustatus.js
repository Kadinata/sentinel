import React from 'react';

import { makeStyles } from '@material-ui/core';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';
import { PercentCircle } from '../../../components/common/ProgressCircle';
import { TableCell, Table, TableBody, TableRow } from '../../../components/common/Table';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  infoBox: {
    paddingLeft: theme.spacing(2),
  },
  percentCircle: {
    display: 'flex',
    minWidth: '56px',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
}));

const percentUsage = (usages) => {
  let usageSum = 0;
  let totalSum = 0;
  usages.forEach(([usage, total]) => {
    usageSum += usage;
    totalSum += total;
  });
  return (totalSum > 0) ? (usageSum / totalSum) : 0;
};

const RowItem = ({ label, value, classes }) => {
  return (
    <TableRow>
      <TableCell>
        <Typography align='left'>{label}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography>{value}</Typography>
      </TableCell>
    </TableRow>
  );
};

const cardTitle = (
  <Typography component="h5" variant="h5" align="left">
    CPU Usage
  </Typography>
);

const CpuStatus = ({ data, ...props }) => {

  const classes = useStyles();
  const { load_1, load_5, load_15, usages } = data;
  const pct_usage = percentUsage(usages);

  return (
    <DisplayCard title={cardTitle}>
      <Grid container alignItems="center">
        <Grid container item xs={3}
          alignItems="center"
          className={[classes.progressBar]}>
          <PercentCircle value={pct_usage * 100} />
        </Grid>
        <Grid container item xs={9}
          direction="column"
          className={[classes.container, classes.infoBox]}>
          <Table size="small">
            <TableBody>
              <RowItem label={"Load 1m"} value={(load_1).toFixed(2)} />
              <RowItem label={"Load 5m"} value={(load_5).toFixed(2)} />
              <RowItem label={"Load 15m"} value={(load_15).toFixed(2)} />
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </DisplayCard>
  );
};

export default CpuStatus;