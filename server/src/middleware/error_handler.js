const { GenericError } = require('../utils/errors');

const ErrorHandler = (err, req, res, next) => {
  const status = 'error';
  const { message } = err;
  const statusCode = (err instanceof GenericError) ? err.status : 500;
  return res.status(statusCode).json({ status, message });
};

module.exports = ErrorHandler;