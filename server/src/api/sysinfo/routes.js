//===========================================================================
//  
//===========================================================================
const express = require('express');
const handler = require('./handler');
const streamHandler = require('./stream');
const router = express.Router();

const get_handlers = [
  ['/', handler.fetchAll],
  ['/os', handler.os],
  ['/cpu', handler.cpu],
  ['/memory', handler.memory],
  ['/netstat', handler.netstat],
  ['/storage', handler.storage],
  ['/time', handler.systime],
  ['/uptime', handler.uptime],
  ['/starttime', handler.startTime],
  ['/localtime', handler.localtime],
  ['/mqtt-broker', handler.mqttBroker],
  ['/cpu-usage', handler.cpuUsage],
  ['/stream', streamHandler],
];

get_handlers.forEach(([path, req_handler]) => {
  router.route(path).get((req, res, next) => req_handler(req, res, next));
});

module.exports = router;
//===========================================================================