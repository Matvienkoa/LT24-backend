const Sequelize = require('sequelize');
const db = require('../config/config');

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: 'email'
    },
    password: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    }
});

module.exports = User;