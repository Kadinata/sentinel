const passport = require('passport');

const authProtected = (req, res, next) => {
  const session = false;
  passport.authenticate('jwt', { session }, (err, user) => {

    if (!!user) return next();

    let message = '';

    if (err) {
      console.error(`JWT auth error: ${err}`);
      message = 'An error occurred.';
    } else {
      console.error(`JWT auth not authenticated`);
      message = 'User not authenticated.';
    }

    res.status(401).json({ message });
  })(req, res, next);
};

module.exports = authProtected;