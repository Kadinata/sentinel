import React from 'react';
import { makeStyles } from '@material-ui/core';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { DisplayCard } from '../../../components/common/Card';
import { Table, TableRow, TableBody, TableCell } from '../../../components/common/Table';
import { formatBytes } from '../../../utils';

import Data from '../../../models/data';

const useStyles = makeStyles((theme) => ({

}));

const RowItem = ({ label, netstats }) => {

  const { bytes, error, dropped } = netstats;
  const volume = formatBytes(bytes);

  return (
    <TableRow>
      <TableCell>
        <Typography>{label}</Typography>
      </TableCell>
      <TableCell>
        <Typography>
          {`${volume.value.toFixed(2)} ${volume.unit}`}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography>{"Err/Drop"}</Typography>
      </TableCell>
      <TableCell>
        <Typography>
          {`${error}/${dropped}`}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

const NetworkDisplay = ({ net_if, classes }) => {

  const { rx, tx } = net_if;

  return (
    <React.Fragment>
      <TableRow>
        <TableCell colSpan="4">
          <Typography>{`${net_if.interface} (${net_if.ipaddr})`}</Typography>
        </TableCell>
      </TableRow>
      <RowItem label={"Sent"} netstats={tx} />
      <RowItem label={"Received"} netstats={rx} />
    </React.Fragment>
  );
};

const NetworkUsage = (props) => {
  const classes = useStyles();

  const { netstats } = Data;
  const network_interfaces = netstats.map((net_if, key) => (<NetworkDisplay net_if={net_if} key={key} />));

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="left">
          Network Usage
        </Typography>
      }
    >
      <Grid container>
        <Table size="small">
          <TableBody>
            {network_interfaces}
          </TableBody>
        </Table>
      </Grid>
    </DisplayCard>
  );
};

export default NetworkUsage;