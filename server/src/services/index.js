//===========================================================================
//  
//===========================================================================
'use-strict';
const gpio = require('./gpio');
const sysinfo = require('./sysinfo');
const auth = require('./auth');
const db = require('./database/database');
const users = require('./database/users');

/**
 * Initializes each service module.
 */
const init = async () => {
  try {
    await sysinfo.init();
    await gpio.init();
    await db.init();
    await users.init();
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

module.exports = { init, gpio, auth, sysinfo };

//===========================================================================