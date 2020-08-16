const passport = require('passport');
const authService = require('../../services/auth');

const login = (req, res, next) => {
  const session = false;
  passport.authenticate('login', { session }, (err, user, info) => {

    if (err || !user) {
      const { message } = info;
      console.error(`Login Error: ${message}`);
      const statusCode = (message == 'User not found') ? 401 : 403;
      res.status(statusCode).json({ message });
      return;
    }

    req.login(user, { session }, (err) => {
      if (err) {
        res.send(err);
        return;
      }

      const token = authService.token.generate(user, 60 * 60);
      const auth = true;
      const message = 'Login successful';
      res.status(200).send({ auth, token, message });
    });

  })(req, res, next);
};

const register = (req, res, next) => {
  const session = false;
  passport.authenticate('register', { session }, (err, user, info) => {
    if (err) {
      console.error(`Register Error: ${err}`);
    }

    if (info !== undefined) {
      const { message } = info;
      console.error(`Register Error: ${message}`);
      res.status(403).json({ message });
      return;
    }

    req.login(user, async () => {
      const message = 'User created';
      res.status(200).json({ message });
    });

  })(req, res, next);
};

module.exports = {
  login,
  register,
};