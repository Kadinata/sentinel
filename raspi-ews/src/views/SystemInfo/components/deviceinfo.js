import React from 'react';

import { makeStyles } from '@material-ui/core';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';
import { Table, TableBody, TableRow, TableCell } from '../../../components/common/Table';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
  avatar: {
    height: 40,
    width: 40
  },
}));

const RowItem = ({ label, value, classes }) => {
  return (
    <TableRow>
      <TableCell>
        <Typography align="left">{label}</Typography>
      </TableCell>
      <TableCell>
        <Typography align="left">{value}</Typography>
      </TableCell>
    </TableRow>
  );
}

const cardTitle = (
  <Typography component="h5" variant="h5" align="left">
    Device Info
  </Typography>
);


const DeviceInfo = ({ data, ...props }) => {
  const classes = useStyles();
  const { hostname, host_ip, type, release, processor, distribution } = data;

  console.log(`Rendering device info ${new Date()}`);

  return (
    <DisplayCard title={cardTitle}>
      <Grid container>
        <Table>
          <TableBody>
            <RowItem label="Hostname" value={`${hostname} (${host_ip})`} />
            <RowItem label="Kernel" value={`${type} ${release}`} />
            <RowItem label="Processor" value={processor} />
            <RowItem label="Distribution" value={distribution} />
          </TableBody>
        </Table>
      </Grid>
    </DisplayCard>
  );
};

export default DeviceInfo;