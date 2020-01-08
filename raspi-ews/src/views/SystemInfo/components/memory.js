import React from 'react';
import { makeStyles } from '@material-ui/core';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { DisplayCard } from '../../../components/common/Card';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(1),
  },
  progressBar: {
    padding: theme.spacing(1),
    minWidth: '56px',
  },
}));

const Memory = (props) => {
  const classes = useStyles();

  return (
    <DisplayCard
      title={
        <Typography component="h5" variant="h5" align="left">
          Memory
        </Typography>
      }
    >
      <Grid container alignItems="stretch" justify="flex-start">
        <Grid item xs={3} className={classes.progressBar}>
          <CircularProgressbar
            value={66}
            text={`66%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: 'butt',
              pathColor: '#f8c04e',
              textColor: '#f8c04e',
              trailColor: '#e0e0e0',
            })}
          />
        </Grid>
        <Grid item xs={9}>

        </Grid>
      </Grid>
    </DisplayCard>
  );
};

export default Memory;