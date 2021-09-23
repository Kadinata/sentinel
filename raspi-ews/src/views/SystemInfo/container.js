import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { ErrorDisplay, ContentDisplay } from './SystemInfo';
import { Loading } from '../common';
import SysInfoStreamProvider from './SysInfoStreamProvider';
import SystemInfoProvider from './SystemInfoProvider';
import { useSystemInfo } from './hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    display: 'flex',
    flex: 1,
  },
  gridItem: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    }
  }
}));

const PageTitle = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Grid container item alignItems="stretch" justify="flex-start" className={classes.gridItem}>
      <Typography component="h4" variant="h4" align="left">
        {children}
      </Typography>
    </Grid>
  );
};

const SystemInfo = ({ ...props }) => {

  const classes = useStyles();
  const { data, error, isLoading } = useSystemInfo();

  return (
    <Grid container direction="column" wrap="nowrap" alignItems="stretch" spacing={0} className={classes.root}>

      <PageTitle>System Information</PageTitle>

      <Loading show={!!isLoading}>
        <Grid container item spacing={0} alignItems="stretch" justify="space-between">
          <ErrorDisplay error={error} />
          <SystemInfoProvider data={data}>
            <SysInfoStreamProvider start={true} initialData={data}>
              <ContentDisplay />
            </SysInfoStreamProvider>
          </SystemInfoProvider>
        </Grid>
      </Loading>

    </Grid>
  );
};

export default SystemInfo;