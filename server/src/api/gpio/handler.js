//===========================================================================
//  
//===========================================================================
const GpioService = require('../../services/gpio');
const Errors = require('../../utils/errors');
const handlers = require('../utils');

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

const get_gpio_pin_states = (req, res, next) => {
  return handlers.basicGetHandler(
    () => req.gpio.getPinStates()
  )(req, res, next);
};

const get_usable_gpio_pins = (req, res, next) => {
  return handlers.basicGetHandler(
    () => req.gpio.getUsablePins()
  )(req, res, next);
};

const post_handler = (req, res, next) => {
  return handlers.basicPostHandler(
    (payload) => req.gpio.setPinStates(payload)
  )(req, res, next);
};

module.exports = {
  gpio_middleware,
  get_gpio_pin_states,
  get_usable_gpio_pins,
  post_handler,
};


//===========================================================================