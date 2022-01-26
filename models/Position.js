const Sequelize = require('sequelize');
const db = require('../config/config');

const Position = db.define('position', {
    lat: {
        type: Sequelize.STRING
    },
    lng: {
        type: Sequelize.STRING
    },
    userId: {
        type: Sequelize.INTEGER,
        unique: 'userId'
    }
});

module.exports = Position;