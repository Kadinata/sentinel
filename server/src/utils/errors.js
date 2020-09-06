class GenericError extends Error {

  constructor(message, statusCode = 500) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }

  get status() {
    if (this instanceof BadRequest) {
      return 400;
    }
    if (this instanceof Unauthorized) {
      return 401;
    }
    if (this instanceof Forbidden) {
      return 403;
    }
    if (this instanceof NotFound) {
      return 404;
    }
    return this.statusCode;
  }
}

class BadRequest extends GenericError { }
class NotFound extends GenericError { }
class Unauthorized extends GenericError { }
class Forbidden extends GenericError { }

module.exports = {
  GenericError,
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
}
