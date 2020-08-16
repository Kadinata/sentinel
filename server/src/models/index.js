/*/
const Sequelize = require('sequelize');
const UserModel = require('./user');

const sequelize = new Sequelize();

const User = UserModel(sequelize);

module.exports = {
  User,
};
//*/

const User = require('./mockuser');

module.exports = {
  User,
};