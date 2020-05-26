import React from 'react';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';
import { PercentCircle } from '../../../components/common/ProgressCircle';
import { Table, TableBody, TableCell, TableRow } from '../../../components/common/Table';
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

const cardTitle = (
  <Typography component="h5" variant="h5" align="left">
    Storage
  </Typography>
);

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
            <RowItem label={"Available"} value={free.value.toFixed(2)} unit={free.unit} />
            <RowItem label={"Used"} value={used.value.toFixed(2)} unit={used.unit} />
            <RowItem label={"Total"} value={total.value.toFixed(2)} unit={total.unit} />
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );

}

const Storage = ({ data, ...props }) => {

  const classes = useStyles();
  const storages = data.map((partition, key) => StorageDisplay({ partition, classes, key }))

  return (
    <DisplayCard title={cardTitle} >
      <Grid container>
        {storages}
      </Grid>
    </DisplayCard>
  );
};

Storage.defaultProps = {
  data: [],
};

export default Storage;