//===========================================================================
//  
//===========================================================================
const express = require('express');
const sysinfoRoutes = require('./sysinfo');
const sseTestRoutes = require('./sse_test');
const authRoutes = require('./auth');

const router = express.Router();

const routes = [
  ['/auth', authRoutes],
  ['/sysinfo', sysinfoRoutes],
  //['/sse-test', sseTestRoutes],
];

routes.forEach(([path, handler]) => {
  router.use(path, (req, res, next) => handler(req, res, next));
});

router.use('*', (req, res, next) => {
  res.status(404).send('Not found!');
});

module.exports = router;
//===========================================================================