//===========================================================================
//  
//===========================================================================
const express = require('express');
const handlers = require('./handler');
const streamHandler = require('./stream');
const Endpoint = require('../endpoint_handler');
const router = express.Router();

const is_protected = true;

const endpoint_handlers = [
  new Endpoint('/', Endpoint.METHOD_POST, handlers.post_handler, is_protected),
  new Endpoint('/', Endpoint.METHOD_GET, handlers.get_gpio_pin_states, is_protected),
  new Endpoint('/usable_pins', Endpoint.METHOD_GET, handlers.get_usable_gpio_pins, is_protected),
  new Endpoint('/stream', Endpoint.METHOD_GET, streamHandler, is_protected),
];

router.use(handlers.gpio_middleware);
module.exports = Endpoint.bindEndpoints(router, ...endpoint_handlers);
//===========================================================================