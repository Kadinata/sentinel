import React from 'react';
import { makeStyles } from '@material-ui/core';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';
import { PercentCircle } from '../../../components/common/ProgressCircle';
import { Table, TableBody, TableRow, TableCell } from '../../../components/common/Table';
import { formatBytes } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  infoBox: {
    paddingLeft: theme.spacing(2),
  },
  progressBar: {
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

const RowItem = ({ label, value, unit }) => {
  return (
    <TableRow>
      <TableCell>
        <Typography>{label}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography display="inline">{value}</Typography>
        <Typography display="inline">{`  ${unit}`}</Typography>
      </TableCell>
    </TableRow>
  );
};

const Memory = ({ data, ...props }) => {
  const classes = useStyles();
  const { total_mem, free_mem, percent } = data;

  const total = formatBytes(total_mem);
  const free = formatBytes(free_mem);
  const used = formatBytes(total_mem - free_mem);

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="left">
          Memory
        </Typography>
      }
    >
      <Grid container alignItems="center">
        <Grid container item xs={3}
          alignItems="center"
          className={[classes.progressBar]}>
          <PercentCircle value={percent * 100} />
        </Grid>
        <Grid container item xs={9}
          direction="column"
          className={[classes.container, classes.infoBox]}>
          <Table size="small">
            <TableBody>
              <RowItem label={"Available"} value={free.value.toFixed(2)} unit={free.unit} />
              <RowItem label={"In Use"} value={used.value.toFixed(2)} unit={used.unit} />
              <RowItem label={"Total"} value={total.value.toFixed(2)} unit={total.unit} />
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </DisplayCard>
  );
};

Memory.defaultProps = {
  data: {},
};

export default Memory;