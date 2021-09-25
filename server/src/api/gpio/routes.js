//===========================================================================
//  
//===========================================================================
const express = require('express');
const handlers = require('./handler');
const router = express.Router();

const post_handlers = [
  ['/', handlers.post_handler],
];

const get_handlers = [
  ['/', handlers.get_handler],
];

router.use(handlers.gpio_middleware);

post_handlers.forEach(([path, handler]) => {
  router.route(path).post((req, res, next) => handler(req, res, next));
});

get_handlers.forEach(([path, handler]) => {
  router.route(path).get((req, res, next) => handler(req, res, next));
});

module.exports = router;

//===========================================================================