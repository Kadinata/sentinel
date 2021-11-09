//===========================================================================
//  
//===========================================================================
'use-strict';
const gpio = require('./gpio');
const sysinfo = require('./sysinfo');
const auth = require('./auth');
const db = require('./database');

/**
 * Initializes each service module.
 */
const init = async () => {
  try {
    await sysinfo.init();
    await gpio.init();
    await db.init();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = { init, gpio, auth, sysinfo };

//===========================================================================