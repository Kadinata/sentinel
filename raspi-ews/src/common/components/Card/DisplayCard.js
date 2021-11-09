import React from 'react';

import { makeStyles } from '@material-ui/core';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    background: theme.palette.primary.main,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1.5),
    },
  },
  content: {
    flex: '1 0 auto',
    padding: theme.spacing(1),
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2),
    },
  },
}));

const DisplayCard = ({ title, children, noHeader, ...props }) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {!noHeader && <CardHeader title={title} className={classes.header} />}
      {!noHeader && <Divider />}
      <CardContent className={classes.content}>
        {children}
      </CardContent>
    </Card>
  );
};

DisplayCard.defaultProps = {
  noHeader: false,
};

export default DisplayCard;