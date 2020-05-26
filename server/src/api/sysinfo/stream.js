//===========================================================================
//  
//===========================================================================
const sse = require('../../utils/sse_handler');
const DataSampler = require('../../utils/data_sampler');
const service = require('../../services/sysinfo');

const streamHandler = sse.Handler();

const timingSampler = new DataSampler(() => service.systime.getAll());
const resourceSampler = new DataSampler(async () => {
  try {
    const hdd_info = await service.hdd();
    const cpu_info = await service.cpu();
    const netstats = await service.network();
    const mem_info = service.memory();
    return { cpu_info, hdd_info, mem_info, netstats };
  } catch (err) {
    return Promise.reject(err);
  }
});

service.mqttBroker.statusListener.on('statusChange', (mqtt_broker) => {
  streamHandler.send({ mqtt_broker });
});

service.cpuUsage.on('data', (cpu_usage) => {
  streamHandler.send({ cpu_usage });
});

const startSamplers = () => {
  timingSampler.start(1000);
  resourceSampler.start(10000);
};

const stopSamplers = () => {
  timingSampler.stop();
  resourceSampler.stop();
};

timingSampler.on('data', data => streamHandler.send(data));
resourceSampler.on('data', data => streamHandler.send(data));
streamHandler.on('clientChange', (count) => {
  if (count > 0) {
    startSamplers();
  } else {
    stopSamplers();
  }
});

module.exports = (req, res, next) => streamHandler.handleRequest(req, res, next);

//===========================================================================