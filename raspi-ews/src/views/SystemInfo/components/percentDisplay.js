import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { PercentCircle } from '../../../common/components/ProgressCircle';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  infoBox: {
    display: 'flex',
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  progressBar: {
    display: 'flex',
    minWidth: '56px',
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
  rowLabel: {
    flexGrow: 1,
  },
  titleText: {
    flexGrow: 1,
    fontWeight: theme.typography.fontWeightBold,
    borderBottom: '1px solid',
    marginBottom: '0.2rem',
  },
}));

const RowItem = ({ label, value, unit, key }) => {
  const classes = useStyles();
  return (
    <Grid container item key={key}>
      <Typography align="left" className={classes.rowLabel}>{label}</Typography>
      <Typography align="right">{`${value} ${unit}`}</Typography>
    </Grid>
  );
};

const InfoTable = ({ rows, title }) => {

  const classes = useStyles();

  const tableRows = rows.map((data, key) => RowItem({ ...data, key }));

  const titleRow = (title) && (
    <Typography align='left' className={classes.titleText}>
      {title}
    </Typography>
  );

  return (
    <Grid container item >
      {titleRow}
      {tableRows}
    </Grid>
  );
};

const PercentDisplay = ({ percent, title, rows, key, ...props }) => {

  const classes = useStyles();

  return (
    <Grid container item {...props}>
      <Grid container item alignItems="center" key={key}>
        <Grid container item xs={3}
          alignItems="center"
          className={classes.progressBar}>
          <PercentCircle value={percent} />
        </Grid>
        <Grid container item xs={9}
          direction="column"
          className={classes.infoBox}>
          <InfoTable rows={rows} title={title} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PercentDisplay;