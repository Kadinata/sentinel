//===========================================================================
//  
//===========================================================================
const express = require('express');
const handlers = require('./handler');
const streamHandler = require('./stream');
const router = express.Router();

const post_handlers = [
  ['/', handlers.post_handler],
];

const get_handlers = [
  ['/', handlers.get_gpio_pin_states],
  ['/usable_pins', handlers.get_usable_gpio_pins],
  ['/stream', streamHandler],
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