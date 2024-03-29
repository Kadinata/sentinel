import React from 'react';
import { DisplayCard } from '../../../common/components/Card';
import { TabPanel } from '../../../common/components/Tabs/TabPanel';
import { useStyles } from '../../common/styles';
import {
  Tab,
  Tabs,
  Box,
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const CardTitle = ({ text, ...props }) => (
  <Typography component="h5" variant="h5" align="left" {...props}>
    {text}
  </Typography>
);

const controlTitle = (<CardTitle text={"GPIO Control"} />);
const statusTitle = (<CardTitle text={"GPIO Status"} />);

const GpioTabLayout = ({ statusDisplay, controlDisplay, ...props }) => {

  const classes = useStyles();

  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleChange = (event, newActiveIndex) => {
    setActiveIndex(newActiveIndex);
  };

  return (
    <Grid container className={classes.widgetContainer}>
      <DisplayCard noHeader>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={activeIndex}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="secondary"
          >
            <Tab label="GPIO Status" {...a11yProps(0)} />
            <Tab label="GPIO Control" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={activeIndex} index={0}>
          {statusDisplay}
        </TabPanel>
        <TabPanel value={activeIndex} index={1}>
          {controlDisplay}
        </TabPanel>
      </DisplayCard>
    </Grid>
  );

};

const GpioGridLayout = ({ statusDisplay, controlDisplay, ...props }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container item lg={6} sm={12} xs={12} className={classes.widgetContainer}>
        <DisplayCard title={controlTitle}>
          {controlDisplay}
        </DisplayCard>
      </Grid>
      <Grid container item lg={6} sm={12} xs={12} className={classes.widgetContainer}>
        <DisplayCard title={statusTitle}>
          {statusDisplay}
        </DisplayCard>
      </Grid>
    </React.Fragment>
  )
};

export const GpioContentLayout = ({ statusDisplay, controlDisplay, ...props }) => {
  return (
    <React.Fragment>
      <Grid container item spacing={0} alignItems="stretch" justify="space-between">
        <Hidden mdUp>
          <GpioTabLayout
            statusDisplay={statusDisplay}
            controlDisplay={controlDisplay}
            {...props}
          />
        </Hidden>
        <Hidden smDown>
          <GpioGridLayout
            statusDisplay={statusDisplay}
            controlDisplay={controlDisplay}
            {...props}
          />
        </Hidden>
      </Grid>
    </React.Fragment>
  );
};