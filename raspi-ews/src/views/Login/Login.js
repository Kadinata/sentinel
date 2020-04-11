import React from 'react';
import { withStyles } from '@material-ui/core';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import { LoginCard } from './components';

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  gridItem: {
    padding: theme.spacing(2),
  },
});

class LoginView extends React.Component {

  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="column">
          <Grid container item alignItems="stretch" justify="flex-start" lg={4} sm={12} xs={12}>
            <Grid container item className={classes.gridItem}>
              <LoginCard />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default withStyles(useStyles)(LoginView);