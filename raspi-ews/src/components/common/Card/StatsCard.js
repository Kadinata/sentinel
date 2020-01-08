import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    background: 'rgba(0,0,26, 0.35)',
    color: '#E9E9E9',
    display: 'flex',
    height: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  avatar: {
    backgroundColor: 'transparent',
    color: '#E9E9E9',
    height: 56,
    width: 56
  },
  icon: {
    color: '#E9E9E9',
    height: 40,
    width: 40
  }
}));

const renderIcon = (icon, classes) => {
  if (icon === null) {
    return null;
  }

  return (
    <Grid item>
      <Avatar variant="rounded" className={classes.avatar}>
        {icon}
      </Avatar>
    </Grid>
  );
};

const StatsCard = ({ label, value, icon, ...props }) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Grid container spacing={2} justify="flex-start" alignItems="center">
          {renderIcon(icon, classes)}
          <Grid item>
            <Typography variant="subtitle1" color="#E9E9E9" align="left">
              {label}
            </Typography>
            <Typography component="h5" variant="h5" align="left">
              {value}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <div />
    </Card>
  );
};

StatsCard.defaultProps = {
  label: '',
  value: '',
  icon: null,
};

export default StatsCard;