const jwt = require('jsonwebtoken');
const jwtSecret = require('../../config/jwtConfig');

const generate = (user, expiresIn) => {
  const {id, username} = user;
  return jwt.sign({ id, username }, jwtSecret.secret, { expiresIn });
};

module.exports = { generate };