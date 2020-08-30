//===========================================================================
//  
//===========================================================================
const express = require('express');
const sysinfoRoutes = require('./sysinfo');
const authRoutes = require('./auth');
const testRoutes = require('./tests');

const router = express.Router();

const routes = [
  ['/auth', authRoutes],
  ['/sysinfo', sysinfoRoutes],
  ['/test', testRoutes],
];

routes.forEach(([path, handler]) => {
  router.use(path, (req, res, next) => handler(req, res, next));
});

router.use('*', (req, res, next) => {
  res.status(404).send('Not found!');
});

module.exports = router;
//===========================================================================