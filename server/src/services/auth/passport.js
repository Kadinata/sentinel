//===========================================================================
//  
//===========================================================================
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const { User } = require('../../models');
const jwtSecret = require('../../config/jwtConfig');
const utils = require('./utils');

const SALT_ROUNDS = 10;

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

const sanitize = (user) => {
  if (!user) return null;
  const { password, ...userdata } = user;
  return userdata;
};

const registerHandler = async (username, password, done) => {
  try {
    const user = await utils.findUser(username);

    if (user != null) {
      const message = 'Username already taken';
      return done(null, null, { message });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await User.create({
      username: username,
      password: hashedPassword,
    });

    return done(null, sanitize(newUser));

  } catch (err) {
    return done(err);
  }
};

const loginHandler = async (username, password, done) => {

  try {
    const user = await utils.findUser(username);

    if (user === null) {
      const message = 'Incorrect username and/or password';
      return done(null, null, { message });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch !== true) {
      const message = 'Incorrect username and/or password';
      return done(null, null, { message });
    }
    return done(null, sanitize(user));

  } catch (err) {
    return done(err);
  }
};

const jwtHandler = async (jwtPayload, done) => {
  try {
    const user = await utils.findById(jwtPayload.id);
    done(null, sanitize(user));
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