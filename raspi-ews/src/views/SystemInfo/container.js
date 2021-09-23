import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { ErrorDisplay, ContentDisplay } from './SystemInfo';
import { Loading } from '../common';
import {
  withSystemInfoProvider,
  useSystemInfoContext,
} from './SystemInfoProvider';
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

  const countRenderRef = React.useRef(1);

  const classes = useStyles();
  const { data, error, isLoading } = useSystemInfo();
  

  React.useEffect(function afterRender() {
    countRenderRef.current++;
    console.debug('Rendering: SystemInfo', countRenderRef.current, {data, isLoading});
  });
  
  return (
    <Grid container direction="column" wrap="nowrap" alignItems="stretch" spacing={0} className={classes.root}>

      <PageTitle>System Information</PageTitle>

      <Loading show={!!isLoading}>
        <Grid container item spacing={0} alignItems="stretch" justify="space-between">
          <ErrorDisplay error={error} />
          <SystemInfoProvider data={data}>
            <ContentDisplay />
          </SystemInfoProvider>
        </Grid>
      </Loading>

    </Grid>
  );
};

export default SystemInfo;