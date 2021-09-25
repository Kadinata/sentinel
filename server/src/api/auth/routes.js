const express = require('express');
const handlers = require('./handler');
const authProtected = require('../../middleware/auth_protected');
const router = express.Router();

const post_handlers = [
  ['/register', handlers.register],
  ['/login', handlers.login],
];

const get_handlers = [
  ['/user', handlers.userAuth],
];

post_handlers.forEach(([path, handler]) => {
  router.route(path).post((req, res, next) => handler(req, res, next));
});

router.use(authProtected);

get_handlers.forEach(([path, handler]) => {
  router.route(path).get((req, res, next) => handler(req, res, next));
});

module.exports = router;