import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tabPanel: {
    paddingTop: theme.spacing(2),
  },
}));

export const TabPanel = ({ children, value, index, ...props }) => {
  const classes = useStyles();
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={classes.tabPanel}
      {...props}
    >
      {(value === index) && children}
    </Box>
  );
};