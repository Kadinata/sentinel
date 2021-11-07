//===========================================================================
//  
//===========================================================================
const bcrypt = require('bcrypt');
const { User } = require('../../models');
const utils = require('./utils');

const SALT_ROUNDS = 10;

const sanitize = (user) => {
  if (!user) return null;
  const { password, ...userdata } = user;
  return userdata;
};

const createUser = async (username, password) => {
  const user = await utils.findUser(username);
  if (user !== null) return null;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const newUser = await User.create({
    username: username,
    password: hashedPassword,
  });

  return sanitize(newUser);
};

const authenticateUser = async (username, password) => {
  const user = await utils.findUser(username);
  if (user === null) return null;

  const passwordMatched = await bcrypt.compare(password, user.password);
  return passwordMatched ? sanitize(user) : null;
};

const updateUserPassword = async (userId, currentPassword, newPassword) => {

  if (!currentPassword || !newPassword) {
    const message = 'Invalid parameters';
    return { user: null, error: { message } };
  }
  
  const user = await utils.findById(userId);
  if (user === null) {
    const message = 'User not found';
    return { user: null, error: { message } };
  }

  const passwordMatched = await bcrypt.compare(currentPassword, user.password);
  if (!passwordMatched) {
    const message = 'Incorrect password';
    return { user: null, error: { message } };
  };

  if (currentPassword == newPassword) {
    const message = 'New password must not be the same as the current password';
    return { user: null, error: { message } };
  }

  const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
  const updatedUser = User.update(userId, { password: hashedPassword });

  if (updatedUser === null) {
    const message = 'Password update failed';
    return { user: null, error: { message } };
  };
  return { user: sanitize(updatedUser), error: null };
};

const findUserById = async (userId) => {
  const user = await utils.findById(userId);
  return sanitize(user);
};

module.exports = {
  createUser,
  authenticateUser,
  updateUserPassword,
  findUserById,
};
//===========================================================================
