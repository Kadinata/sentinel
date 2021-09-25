//===========================================================================
//  
//===========================================================================
'use-strict';
const { Gpio } = require('onoff');

const PIN_COUNT = 28;
const DEBOUNCE_TIMEPOUT = 10;

const FLAG_PIN_LOCKED = (0x1 << 2);
const FLAG_PIN_OENABLE = (0x1 << 1);
const FLAG_PIN_HIGH = (0x1 << 0);

const LOCKED_PINS = [14, 15];

class GpioService {

  constructor() {
    this._pins = [];
    this._initialized = false;
    this._disposed = false;
  };

  init() {
    if (this._initialized) return;
    this._initialized = true;
    let pinNum = 0;
    const direction = 'in';
    const options = {
      debounceTimeout: DEBOUNCE_TIMEPOUT,
      reconfigureDirection: false,
    };
    for (pinNum = 0; pinNum < PIN_COUNT; pinNum++) {
      if (LOCKED_PINS.includes(pinNum)) {
        this._pins.push(null);
      } else {
        this._pins.push(new Gpio(pinNum, direction, options));
      }
    }
  }

  pin(num) {
    if (!this._initialized) return null;
    if ((num < 0) || (num >= this._pins.length)) return null;
    return this._pins[num] || null;
  }

  pinCount() {
    return this._pins.length;
  }

  isLocked(pinNum) {
    return LOCKED_PINS.includes(pinNum);
  }

  setPinState(pinNum, state) {
    const pin = this.pin(pinNum);
    const direction = (state & FLAG_PIN_OENABLE) ? 'out' : 'in';
    const level = (state & FLAG_PIN_HIGH) ? 1 : 0;
    if (pin === null) return;
    pin.setDirection(direction);
    if (direction === 'in') return;
    pin.writeSync(level);
  }

  getPinState(pinNum) {
    const pin = this.pin(pinNum);
    let result = 0x0;
    if (this.isLocked(pinNum)) return FLAG_PIN_LOCKED;
    if (pin === null) return 0x0;
    if (pin.direction() === 'out') {
      result = result | FLAG_PIN_OENABLE;
    }
    if (pin.readSync() === 1) {
      result = result | FLAG_PIN_HIGH;
    }
    return result;
  }

  cleanup() {
    if (!this._initialized || this._disposed) return;
    this._disposed = true;
    this._pins.forEach((pin) => {
      if (pin === null) return;
      if (pin.direction() === 'out') {
        pin.writeSync(0);
        pin.setDirection('in');
      }
      pin.unexport();
    });
  }
}

module.exports = GpioService;

//===========================================================================