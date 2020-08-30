const passport = require('passport');

const protectedRoute = (req, res, next) => {
  res.status(200).send('This is a protected route');
};

const unprotectedRoute = (req, res, next) => {
  res.status(200).send('This is an unprotected route');
};

module.exports = {
  protectedRoute,
  unprotectedRoute,
};