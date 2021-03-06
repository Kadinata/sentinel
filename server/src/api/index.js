//===========================================================================
//  
//===========================================================================
const express = require('express');
const Errors = require('../utils/errors');
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

router.use('*', (req, res, next) => next(new Errors.NotFound('Not found!')));

module.exports = router;
//===========================================================================