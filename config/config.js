const { Sequelize } = require('sequelize');
require('dotenv').config()

<<<<<<< HEAD
module.exports = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
=======
module.exports = new Sequelize('', '', '', {
    host: '',
>>>>>>> 4ccbf32d556d56a6159dbaedb5d49ba7fdb62ba4
    dialect: 'mysql'
});
