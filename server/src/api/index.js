//===========================================================================
//  
//===========================================================================
const express = require('express');
const Errors = require('../utils/errors');
const sysinfoRoutes = require('./sysinfo');
const gpioRoutes = require('./gpio');
const authRoutes = require('./auth');

const router = express.Router();

const routes = [
  ['/auth', authRoutes],
  ['/gpio', gpioRoutes],
  ['/sysinfo', sysinfoRoutes],
];

routes.forEach(([path, handler]) => {
  router.use(path, (req, res, next) => handler(req, res, next));
});

router.use('*', (req, res, next) => next(new Errors.NotFound('Not found!')));

module.exports = router;
//===========================================================================