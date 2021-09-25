//===========================================================================
//  
//===========================================================================
const GpioService = require('../../services/gpio');
const Errors = require('../../utils/errors');

const gpio_middleware = (req, res, next) => {
  const gpio = GpioService.instance();
  if (gpio !== null) {
    req.gpio = gpio;
    next();
  } else {
    const message = 'GPIO service instance has not been initialized!';
    next(new Errors.GenericError(message));
  }
};

const get_handler = (req, res, next) => {
  try {
    const payload = {};
    let pinNum = 0;
    for (pinNum = 0; pinNum < req.gpio.pinCount(); pinNum++) {
      payload[pinNum] = req.gpio.getPinState(pinNum);
    }
    res.json(payload);
  } catch (err) {
    console.log(err);
    const message = 'An internal server error occurred.';
    next(new Errors.GenericError(message));
  }
};

const post_handler = (req, res, next) => {
  try {
    const payload = req.body || {};
    for (let pinNum in payload) {
      const data = parseInt(payload[pinNum]);
      pinNum = parseInt(pinNum);
      if (isNaN(pinNum) || isNaN(data)) {
        const message = 'Failed to parse POST data';
        next(new Errors.GenericError(message));
        return;
      }
      req.gpio.setPinState(pinNum, data);
    }
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    const message = 'An internal server error occurred.';
    next(new Errors.GenericError(message));
  }
};

module.exports = {
  gpio_middleware,
  get_handler,
  post_handler,
};


//===========================================================================