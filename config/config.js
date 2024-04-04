const { Sequelize } = require('sequelize');
require('dotenv').config()

module.exports = new Sequelize('', '', '', {
    host: '',
    dialect: 'mysql'
});
