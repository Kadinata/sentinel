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
    display: 'flex',
    height: '100%',
    alignItems: 'stretch',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  avatar: {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    height: 56,
    width: 56
  },
  icon: {
    height: 40,
    width: 40
  },
  iconContainer: {
    background: theme.palette.primary.main,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
}));

const renderIcon = ({ icon, background }, classes) => {
  if (icon === null) {
    return null;
  }

  background = background || classes.iconContainer.background;

  return (
    <CardContent className={[classes.content, classes.iconContainer]} style={{ background }}>
      <Avatar variant="rounded" className={classes.avatar}>
        {icon}
      </Avatar>
    </CardContent>
  );
};

const StatsCard = ({ label, value, ...props }) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {renderIcon(props, classes)}

      <CardContent className={classes.content}>
        <Grid container spacing={2} justify="flex-start" alignItems="center">
          <Grid item>
            <Typography variant="subtitle1" align="left">
              {label}
            </Typography>
            <Typography component="h5" variant="h5" align="left">
              {value}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

StatsCard.defaultProps = {
  label: '',
  value: '',
  icon: null,
};

export default StatsCard;