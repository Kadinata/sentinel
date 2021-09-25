const passport = require('passport');
const Errors = require('../utils/errors');

const authProtected = (req, res, next) => {
  const session = false;
  passport.authenticate('jwt', { session }, (err, user) => {

    if (!!user) {
      return req.login(user, { session }, () => next());
    }

    let message = '';

    if (err) {
      console.error(`JWT auth error: ${err}`);
      message = 'An authentication error occurred.';
    } else {
      console.error(`JWT auth not authenticated`, user);
      message = 'User not authenticated.';
    }

    return next(new Errors.Unauthorized(message));
  })(req, res, next);
};

module.exports = authProtected;