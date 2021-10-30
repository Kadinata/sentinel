import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const PageContent = ({ title, ...props }) => {
  return (
    <Grid container direction="column" wrap="nowrap" alignItems="stretch" spacing={0} >
      <Grid container item alignItems="stretch" justify="flex-start" >
        <Typography component="h4" variant="h4" align="left">
          System Information
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageContent;