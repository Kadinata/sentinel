import React from 'react';
import { Typography, Grid } from '@material-ui/core';
const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  gridItem: {
    padding: theme.spacing(2),
  },
});

class TestView extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Typography component="h4" variant="h4" align="left">
            Test Page
          </Typography>
        </Grid>
      </div>
    );
  }
}

export default TestView;