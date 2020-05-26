//===========================================================================
//  
//===========================================================================
'use-strict';
// const gpio = require('./gpio');
const sysinfo = require('./sysinfo');

/**
 * Initializes each service module.
 */
const init = async () => {
  try {
    await sysinfo.init();
    // await gpio.init();
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = { init, gpio, sysinfo };

//===========================================================================