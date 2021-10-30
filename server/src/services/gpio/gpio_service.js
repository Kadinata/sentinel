//===========================================================================
//  
//===========================================================================
'use-strict';
const GpioBank = require('./gpio_bank');
const GpioError = require('./gpio_error');
const RateLimitedEmitter = require('../../utils/rate_limited_emitter');

const STREAM_RATE_LIMIT = 100;

class GpioService extends RateLimitedEmitter {

  constructor(rate_limit = STREAM_RATE_LIMIT) {
    super(rate_limit)
    this._gpio_bank = new GpioBank();
    this._gpio_bank.pins().forEach((pin, pinNum) => {
      if (pin === null) return;
      pin.watch((err, value) => this._send_pin_state(pinNum, err));
    });
  };

  setPinStates(pinStates = {}) {
    const new_pin_states = {};
    for (let num in pinStates) {
      const state = parseInt(pinStates[num]);
      const pinNum = parseInt(num);
      if (isNaN(pinNum) || isNaN(state)) {
        const message = 'Provided pin number or state is not a number.';
        console.log(message);
        throw new GpioError(message);
      }
      this._gpio_bank.setPinState(pinNum, state);
      new_pin_states[pinNum] = this._gpio_bank.getPinState(pinNum);
    }
    this.emit('data', new_pin_states);
  }

  getPinStates() {
    const pin_states = {};
    let pinNum = 0;
    for (pinNum = 0; pinNum < this._gpio_bank.pinCount(); pinNum++) {
      pin_states[pinNum] = this._gpio_bank.getPinState(pinNum);
    }
    return pin_states;
  }

  getUsablePins() {
    return this._gpio_bank.getUsablePins();
  }

  cleanup() {
    this._gpio_bank.cleanup();
  }

  _send_pin_state(pinNum, err) {
    if (err) {
      console.log('Pin watch error:', pinNum, err);
      return;
    }
    const pin = this._gpio_bank.pin(pinNum);
    let value = pin.readSync() ? GpioBank.FLAG_PIN_HIGH : 0x00;
    value |= pin.direction() === 'out' ? GpioBank.FLAG_PIN_OENABLE : 0x00;
    console.log({ pinNum, value, err });
    this.next({ [pinNum]: value });
  }
}

module.exports = GpioService;

//===========================================================================