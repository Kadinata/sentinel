import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { DisplayCard } from '../../../common/components/Card';
import { Table, TableBody, TableRow, TableCell } from '../../../common/components/Table';
import { useSystemInfoContext } from '../SystemInfoProvider';

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


const DeviceInfo = (props) => {
  const { data = {} } = useSystemInfoContext();
  const { cpu_info = {}, os_info = {} } = data;

  const { hostname, host_ip, type, release, processor, distribution } = { ...cpu_info, ...os_info };

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