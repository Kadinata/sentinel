//===========================================================================
//  
//===========================================================================
const service = require('../../services/sysinfo');

const baseHandler = (datasource) => async (req, res, next) => {
  try {
    const data = await datasource();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.send('Server Error!');
  }
};

const os = baseHandler(service.os);
const cpu = baseHandler(service.cpu);
const memory = baseHandler(service.memory);
const netstat = baseHandler(service.network);
const storage = baseHandler(service.hdd);
const systime = baseHandler(service.systime.getAll);
const uptime = baseHandler(service.systime.getUptime);
const localtime = baseHandler(service.systime.getLocaltime);
const mqttBroker = baseHandler(service.mqttBroker.brokerStatus);
const cpuUsage = baseHandler(() => service.cpuUsage.measurements);
const fetchAll = baseHandler(service.fetchAll);

module.exports = {
  os,
  cpu,
  memory,
  netstat,
  storage,
  systime,
  uptime,
  localtime,
  mqttBroker,
  cpuUsage,
  fetchAll
};

//===========================================================================