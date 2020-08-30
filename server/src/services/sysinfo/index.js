//===========================================================================
//  
//===========================================================================
const cpu = require('./cpu');
const memory = require('./memory');
const os = require('./os');
const hdd = require('./hdd');
const network = require('./network');
const systime = require('./systime');
const mqttBroker = require('./mqtt_broker');
const cpuUsage = require('./cpu_usage');

const init = async () => {
  if (!cpuUsage.isRunning()) {
    cpuUsage.start(10000);
  }
  console.log('Sysinfo service initialized.');
};

const fetchAll = async () => {
  try {
    const hdd_info = await hdd();
    const cpu_info = await cpu();
    const os_info = await os();
    const netstats = await network();
    const mem_info = memory();
    const localtime = systime.getLocaltime();
    const uptime = systime.getUptime();
    const startTime = systime.getStartTime();
    const mqtt_broker = await mqttBroker.brokerStatus();
    const cpu_usage = cpuUsage.measurements;
    return { os_info, cpu_info, cpu_usage, hdd_info, mem_info, netstats, uptime, localtime, startTime, mqtt_broker };
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = { init, memory, os, cpu, hdd, network, systime, mqttBroker, cpuUsage, fetchAll };

//===========================================================================