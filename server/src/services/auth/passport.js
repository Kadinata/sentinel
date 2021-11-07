//===========================================================================
//  
//===========================================================================
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const jwtSecret = require('../../config/jwtConfig');
const auth = require('./auth');

const extractCookie = (req) => {
  if (req && req.cookies) {
    return req.cookies['jwt'];
  }
  return null;
};

const localOpts = {
  usernameField: 'username',
  passwordField: 'password',
  session: false,
};

const jwtOpts = {
  jwtFromRequest: extractCookie,
  secretOrKey: jwtSecret.secret,
};

const registerHandler = async (username, password, done) => {
  try {
    const user = await auth.createUser(username, password);
    if (user === null) {
      const message = 'Username already taken';
      return done(null, false, {message});
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const loginHandler = async (username, password, done) => {

  try {
    const user = await auth.authenticateUser(username, password);
    if (user === null) {
      const message = 'Incorrect username and/or password';
      return done(null, false, { message });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const jwtHandler = async (jwtPayload, done) => {
  try {
    const user = await auth.findUserById(jwtPayload.id);
    done(null, (user || false));
  } catch (err) {
    done(err);
  }
};

module.exports = passport => {

  passport.use(
    'register',
    new LocalStrategy(localOpts, (uname, passwd, done) => registerHandler(uname, passwd, done))
  );

  passport.use(
    'login',
    new LocalStrategy(localOpts, (uname, passwd, done) => loginHandler(uname, passwd, done))
  );

  passport.use(
    'jwt',
    new JWTStrategy(jwtOpts, (payload, done) => jwtHandler(payload, done))
  );
};

//===========================================================================