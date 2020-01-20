import React from 'react';

import {
  Grid,
  Divider,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';
import { PercentCircle } from '../../../components/common/ProgressCircle';
import { Table, TableBody, TableCell, TableRow } from '../../../components/common/Table';
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

const StorageDisplay = ({ partition, classes, key }) => {

  const { mount, type, percent } = partition;
  const total = formatBytes(partition.total * 1000000);
  const used = formatBytes(partition.used * 1000000);
  const free = formatBytes(partition.avail * 1000000);

  return (
    <Grid container item alignItems="center" key={key}>
      <Grid container item xs={3}
        alignItems="center"
        className={[classes.progressBar]}>
        <PercentCircle value={percent} />
      </Grid>
      <Grid container item xs={9}
        direction="column"
        className={[classes.container, classes.infoBox]}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography align='left'>
                  {`${mount} (${type})`}
                </Typography>
              </TableCell>
            </TableRow>
            <RowItem label={"Available"} value={free.value} unit={free.unit} />
            <RowItem label={"Used"} value={used.value} unit={used.unit} />
            <RowItem label={"Total"} value={total.value} unit={total.unit} />
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );

}

const Storage = (props) => {

  const classes = useStyles();
  const { hdd_info } = Data;
  const storages = hdd_info.map((partition, key) => StorageDisplay({ partition, classes, key }))

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="left">
          Storage
        </Typography>
      }
    >
      <Grid container>
        {storages}
      </Grid>
    </DisplayCard>
  );
};

export default Storage;