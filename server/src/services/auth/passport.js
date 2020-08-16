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

const localOpts = {
  usernameField: 'username',
  passwordField: 'password',
  session: false,
};

const jwtOpts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret.secret,
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

    return done(null, newUser);

  } catch (err) {
    done(err);
  }
};

const loginHandler = async (username, password, done) => {

  try {
    const user = await utils.findUser(username);

    if (user === null) {
      const message = 'User not found';
      return done(null, null, { message });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch !== true) {
      const message = 'Incorrect password';
      return done(null, null, { message });
    }
    return done(null, user);

  } catch (err) {
    return done(err);
  }
};

const jwtHandler = async (jwtPayload, done) => {
  try {
    const user = await utils.findById(jwtPayload.id);
    return done(null, user || null);
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