import React from 'react';

import { makeStyles } from '@material-ui/core';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';
import { Table, TableBody, TableRow, TableCell } from '../../../components/common/Table';
import Data from '../../../models/data';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
  avatar: {
    backgroundColor: 'transparent',
    color: 'black',
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

const DeviceInfo = (props) => {
  const classes = useStyles();

  const { cpu_info, os_info } = Data;

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="left">
          Device Info
        </Typography>
      }
    >
      <Grid container>
        <Table>
          <TableBody>
            <RowItem label="Hostname" value={`${os_info.hostname} (${os_info.host_ip})`} />
            <RowItem label="Kernel" value={`${os_info.type} ${os_info.release}`} />
            <RowItem label="Processor" value={cpu_info.processor} />
            <RowItem label="Distribution" value={os_info.distribution} />
          </TableBody>
        </Table>
      </Grid>
    </DisplayCard>
  );
};

export default DeviceInfo;