const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'tomskibt', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
