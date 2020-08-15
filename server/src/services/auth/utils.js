const { User } = require('../../models');

const findUser = async (username) => {
  const user = await User.findOne({
    where: { username },
  });
  return user;
};

const findById = async (userId) => {
  const user = await User.findOne({
    where: { id: userId },
  });
  return user;
};

module.exports = {
  findUser,
  findById
};