import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ContentDisplay from './SystemInfo';
import { PageTitle } from '../common';
import SysInfoStreamProvider from './SysInfoStreamProvider';
import { useResourceRequest } from '../../common/hooks';
import { PageDisplayManager } from '../common/PageDisplayManager';

const ENDPOINT_SYSINFO = 'api/v1/sysinfo';

const DATA_SCHEMA = {
  sysinfo_data: ENDPOINT_SYSINFO,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    display: 'flex',
    flex: 1,
  },
}));

const SystemInfo = (props) => {

  const classes = useStyles();
  const { data, error, completed } = useResourceRequest(DATA_SCHEMA);
  const { sysinfo_data } = data;

  return (
    <Grid container direction="column" wrap="nowrap" alignItems="stretch" spacing={0} className={classes.root}>

      <PageTitle>System Information</PageTitle>

      <PageDisplayManager loading={!completed} error={error} data={sysinfo_data}>
        <SysInfoStreamProvider start={true} initialData={sysinfo_data}>
          <ContentDisplay />
        </SysInfoStreamProvider>
      </PageDisplayManager>

    </Grid>
  );
};

export default SystemInfo;