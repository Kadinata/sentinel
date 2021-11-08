//===========================================================================
//  
//===========================================================================
const database = require('./database');

const init = async () => {
  const sql_command = (
    "CREATE TABLE IF NOT EXISTS users (\
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\
      username VARCHAR(500) NOT NULL,\
      password VARCHAR(500) NOT NULL,\
      created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL\
    )"
  );
  console.log("Creating User table");
  try {
    await database.run(sql_command);
    console.log('User table created');
  } catch (err) {
    console.log("Error during user table creation", err);
    throw err;
  }
};

const addUser = async ( username, password ) => {
  const sql_command = (
    "INSERT INTO users(username, password)\
    VALUES($username, $password)"
  );
  const sql_params = {
    $username: username, 
    $password: password,
  };
  console.log(`Creating user: ${username}`);
  try {
    await database.run(sql_command, sql_params);
    console.log("User created: ", username);
  } catch (err) {
    console.log("Error while creating user", err);
    throw err;
  }
};

const findUserById = async (userId) => {
  const sql_command = (
    "SELECT id id, username username, password password, created created\
    FROM users WHERE id = $id"
  );
  const sql_params = { $id: userId };
  try {
    const user = await database.get(sql_command, sql_params);
    return user;
  } catch (err) {
    console.log("Error while finding user by ID", err);
    throw err;
  }
};

const findUserByUserName = async (username) => {
  const sql_command = (
    "SELECT id id, username username, password password, created created\
    FROM users WHERE username = $username"
  );
  const sql_params = { $username: username };
  try {
    const user = await database.get(sql_command, sql_params);
    console.log('User found', user);
    return user;
  } catch (err) {
    console.log("Error while finding user by Username", err);
    throw err;
  }
};

const updateUserPassword = async (userId, password) => {
  const sql_command = "UPDATE users SET password = $password WHERE id = $id";
  const sql_params = {
    $id: userId,
    $password: password,
  };
  console.log(`Updating user password.`);
  try {
    await database.run(sql_command, sql_params);
    console.log("User password updated");
  } catch (err) {
    console.log("Error while updating user password", err);
    throw err;
  }
};

module.exports = {
  init,
  addUser,
  findUserById,
  findUserByUserName,
  updateUserPassword,
};
//===========================================================================