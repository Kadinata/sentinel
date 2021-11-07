import React from 'react';
import { Box } from '@material-ui/core';

export const TabPanel = ({ children, value, index, ...props }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {(value === index) && children}
    </Box>
  );
};