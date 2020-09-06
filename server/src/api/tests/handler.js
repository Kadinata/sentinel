const Errors = require('../../utils/errors');

const protectedRoute = (req, res, next) => {
  res.send('This is a protected route');
};

const unprotectedRoute = (req, res, next) => {
  res.send('This is an unprotected route');
};

const errorRoute = (req, res, next) => {
  throw new Errors.BadRequest('This is an error handler');
}

module.exports = {
  protectedRoute,
  unprotectedRoute,
  errorRoute,
};