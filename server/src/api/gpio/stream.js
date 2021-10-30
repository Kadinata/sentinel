//===========================================================================
//  
//===========================================================================
const sse = require('../../utils/sse_handler');
const GpioService = require('../../services/gpio');

const streamHandler = sse.Handler();
let gpioStream = null;

const startStream = () => {
  if (gpioStream !== null) return;
  const gpio = GpioService.instance();
  if (!gpio) return;
  gpioStream = gpio.on('data', (gpio_state) => {
    streamHandler.send(gpio_state);
  });
};

module.exports = (req, res, next) => {
  startStream();
  streamHandler.handleRequest(req, res, next);
}

//===========================================================================