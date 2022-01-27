const { Sequelize } = require('sequelize');
require('dotenv').config()

module.exports = new Sequelize('geoloc', 'root', 'Rdwxtdb53', {
    host: 'localhost',
    dialect: 'mysql'
});