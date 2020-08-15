const jwt = require('jsonwebtoken');
const jwtSecret = require('../../config/jwtConfig');

const generate = (user, expiresIn) => {
  return jwt.sign({ user }, jwtSecret.secret, { expiresIn });
};

module.exports = { generate };