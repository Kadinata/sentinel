const users = {};
let idCounter = 1000;

const create = ({ username, password }) => {
  idCounter += 1;
  const id = idCounter;
  users[`${id}`] = { id, username, password };
  return users[`${id}`];
};

const update = (userId, { password, ...rest }) => {
  const userData = findOne({ where: { id: userId } });
  if (userData === null) return null;
  users[`${userId}`] = {...userData, password};
  return users[`${userId}`];
};

const findOne = ({ where: { id, username } }) => {
  if (!!id) {
    return (users[`${id}`] || null);
  } else if (!!username) {
    const userId = Object.keys(users).filter(uid => {
      const uname = users[uid]['username'];
      return (uname == username);
    });
    if (userId.length > 0) {
      return users[userId[0]];
    }
  }
  return null;
};

module.exports = {
  create,
  update,
  findOne,
};