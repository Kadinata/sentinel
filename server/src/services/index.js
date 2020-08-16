//===========================================================================
//  
//===========================================================================
'use-strict';
const gpio = require('./gpio');
const sysinfo = require('./sysinfo');
const auth = require('./auth');

/**
 * Initializes each service module.
 */
const init = async () => {
  try {
    await sysinfo.init();
    await gpio.init();
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = { init, gpio, auth, sysinfo };

//===========================================================================