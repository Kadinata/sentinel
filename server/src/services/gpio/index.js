//===========================================================================
//  
//===========================================================================
const GpioService = require('./gpio_service');
const exitHandler = require('../../utils/exit_handler');

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


exitHandler.register(() => {
  console.log('Cleaning up GPIO.');
  cleanup();
});


module.exports = { init, instance, cleanup };

//===========================================================================