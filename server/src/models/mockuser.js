const users = {};
let idCounter = 1000;

const create = ({ username, password }) => {
  idCounter += 1;
  const id = idCounter;
  users[`${id}`] = { id, username, password };
  return users[`${id}`];
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
  findOne,
};