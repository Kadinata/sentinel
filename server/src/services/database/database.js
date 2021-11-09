//===========================================================================
//  
//===========================================================================
const sqlite3 = require('sqlite3').verbose();
const exitHandler = require('../../utils/exit_handler');
const path = require('path');

const _PATH_TO_DB_FILE = path.join(__dirname, '../../../db/database.db');
const _ERR_MSG_DB_NOT_INITIALIZED = 'Database instance not initialized';

let db = null;

const init = () => {
  return new Promise((resolve, reject) => {
    if (db !== null) return resolve();
    db = new sqlite3.Database(_PATH_TO_DB_FILE, (err) => {
      if (err) {
        console.log(err.message);
        return reject(err);
      }
      console.log('Connected to Database.');
      return resolve();
    });
  });
};

const run = (statement, params) => {
  return new Promise((resolve, reject) => {
    if (db === null) return reject(new Error(_ERR_MSG_DB_NOT_INITIALIZED));
    db.serialize(() => {
      db.run(statement, params, (err) => (err ? reject(err) : resolve()));
    });
  });
};

const get = (statement, params) => {
  return new Promise((resolve, reject) => {
    if (db === null) return reject(new Error(_ERR_MSG_DB_NOT_INITIALIZED));
    db.serialize(() => {
      db.get(statement, params, (err, row) => (err ? reject(err) : resolve(row || null)));
    });
  });
};

const getInstance = () => db;

const close = () => {
  if (db === null) return;
  db.close((err) => {
    if (err) return console.log(err.message);
    console.log('Database connection has been closed.');
  });
};

exitHandler.register(() => {
  console.log('Closing database connection.');
  close();
});

module.exports = {
  init,
  run,
  get,
  getInstance,
};
//===========================================================================