//===========================================================================
//  
//===========================================================================
const service = require('../../services/sysinfo');
const { basicGetHandler } = require('../utils');

const os = basicGetHandler(service.os);
const cpu = basicGetHandler(service.cpu);
const memory = basicGetHandler(service.memory);
const netstat = basicGetHandler(service.network);
const storage = basicGetHandler(service.hdd);
const systime = basicGetHandler(service.systime.getAll);
const uptime = basicGetHandler(service.systime.getUptime);
const startTime = basicGetHandler(service.systime.getStartTime);
const localtime = basicGetHandler(service.systime.getLocaltime);
const mqttBroker = basicGetHandler(service.mqttBroker.brokerStatus);
const cpuUsage = basicGetHandler(() => service.cpuUsage.measurements);
const fetchAll = basicGetHandler(service.fetchAll);

module.exports = {
  os,
  cpu,
  memory,
  netstat,
  storage,
  systime,
  uptime,
  localtime,
  startTime,
  mqttBroker,
  cpuUsage,
  fetchAll
};

//===========================================================================