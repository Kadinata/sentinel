const express = require('express');
const handlers = require('./handler');
const router = express.Router();

const post_handlers = [
  ['/register', handlers.register],
  ['/login', handlers.login],
];

post_handlers.forEach(([path, handler]) => {
  router.route(path).post((req, res, next) => handler(req, res, next));
});

module.exports = router;