//===========================================================================
//  
//===========================================================================
const express = require('express');
const handlers = require('./handler');
const Endpoint = require('../endpoint_handler');
const router = express.Router();

const endpoint_handlers = [
  new Endpoint('/register', Endpoint.METHOD_POST, handlers.register, false),
  new Endpoint('/login', Endpoint.METHOD_POST, handlers.login, false),
  new Endpoint('/user', Endpoint.METHOD_GET, handlers.userAuth, true),
  new Endpoint('/update_password', Endpoint.METHOD_POST, handlers.updatePassword, true),
];

module.exports = Endpoint.bindEndpoints(router, ...endpoint_handlers);
//===========================================================================