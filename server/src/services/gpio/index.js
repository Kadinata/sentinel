//===========================================================================
//  
//===========================================================================
const GpioService = require('./gpio_service');
const process = require('process');

let serviceInstance = null;

const init = async () => {
  if (serviceInstance) return null;
  serviceInstance = new GpioService();
  console.log('GPIO service initialized.');
  return serviceInstance;
};

const instance = () => serviceInstance;

const cleanup = () => {
  if (!serviceInstance) return;
  serviceInstance.cleanup();
  serviceInstance = null;
};

const _exitHandler = (code) => {
  console.log('Process exit event with code: ', code);
  console.log('Cleaning up GPIO.');
  cleanup();
  process.exit();
};

process.on('exit', (code) => _exitHandler(code));
process.on('restart', () => console.log('restarting...'));
process.on('SIGINT', (code) => _exitHandler(code));

module.exports = { init, instance, cleanup };

//===========================================================================