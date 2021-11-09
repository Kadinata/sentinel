//===========================================================================
//
//===========================================================================
'use-strict';
const db = require('./database');
const users = require('./users');

const init = async () => {
  try {
    await db.init();
    await users.init();
  } catch (err) {
    throw err;
  }
};

module.exports = { init };
//===========================================================================