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
import Data from '../../../models/data';

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
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    minWidth: '56px',
  },
}));

const RowItem = ({ label, value, unit }) => {
  return (
    <TableRow>
      <TableCell>
        <Typography>{label}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{value}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{unit}</Typography>
      </TableCell>
    </TableRow>
  );
};

const Memory = (props) => {
  const classes = useStyles();
  const { mem_info } = Data;
  const total_mem = formatBytes(mem_info.total_mem);
  const free_mem = formatBytes(mem_info.free_mem);
  const used_mem = formatBytes(mem_info.total_mem - mem_info.free_mem);

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
          <PercentCircle value={mem_info.percent * 100} />
        </Grid>
        <Grid container item xs={9}
          direction="column"
          className={[classes.container, classes.infoBox]}>
          <Table size="small">
            <TableBody>
              <RowItem label={"Available"} value={free_mem.value} unit={free_mem.unit} />
              <RowItem label={"In Use"} value={used_mem.value} unit={used_mem.unit} />
              <RowItem label={"Total"} value={total_mem.value} unit={total_mem.unit} />
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </DisplayCard>
  );
};

export default Memory;