//===========================================================================
//  
//===========================================================================
const express = require('express');
const sysinfoRoutes = require('../sysinfo');

const router = express.Router();

router.use('/sysinfo', (req, res, next) => {
  next();
}, sysinfoRoutes);

router.use('*', (req, res, next) => {
  res.status(404).send('Not found!');
});

module.exports = router;