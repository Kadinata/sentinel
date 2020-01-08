import React from 'react';

import { makeStyles } from '@material-ui/core';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    background: 'rgba(0,0,26, 0.35)',
    color: '#E9E9E9',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  header: {
    background: 'rgba(33, 33, 64, 0.7)',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  content: {
    flex: '1 0 auto',
  },
}));

const DisplayCard = ({ title, children, ...props }) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={title} className={classes.header} />
      <Divider />
      <CardContent className={classes.content}>
        <Grid container>
          {children}
        </Grid>
      </CardContent>
      <div />
    </Card>
  );
};

export default DisplayCard;