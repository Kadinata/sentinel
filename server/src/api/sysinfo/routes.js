//===========================================================================
//  
//===========================================================================
const express = require('express');
const handlers = require('./handler');
const streamHandler = require('./stream');
const Endpoint = require('../endpoint_handler');
const router = express.Router();

const is_protected = false;

const endpoint_handlers = [
  new Endpoint('/', Endpoint.METHOD_GET, handlers.fetchAll, is_protected),
  new Endpoint('/os', Endpoint.METHOD_GET, handlers.os, is_protected),
  new Endpoint('/cpu', Endpoint.METHOD_GET, handlers.cpu, is_protected),
  new Endpoint('/memory', Endpoint.METHOD_GET, handlers.memory, is_protected),
  new Endpoint('/netstat', Endpoint.METHOD_GET, handlers.netstat, is_protected),
  new Endpoint('/storage', Endpoint.METHOD_GET, handlers.storage, is_protected),
  new Endpoint('/time', Endpoint.METHOD_GET, handlers.systime, is_protected),
  new Endpoint('/uptime', Endpoint.METHOD_GET, handlers.uptime, is_protected),
  new Endpoint('/starttime', Endpoint.METHOD_GET, handlers.startTime, is_protected),
  new Endpoint('/localtime', Endpoint.METHOD_GET, handlers.localtime, is_protected),
  new Endpoint('/mqtt-broker', Endpoint.METHOD_GET, handlers.mqttBroker, is_protected),
  new Endpoint('/cpu-usage', Endpoint.METHOD_GET, handlers.cpuUsage, is_protected),
  new Endpoint('/stream', Endpoint.METHOD_GET, streamHandler, is_protected),
];

module.exports = Endpoint.bindEndpoints(router, ...endpoint_handlers);
//===========================================================================