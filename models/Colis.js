const Sequelize = require('sequelize');
const db = require('../config/config');

const Colis = db.define('colis', {
    number: {
        type: Sequelize.STRING,
        unique: 'number'
    },
    userId: {
        type: Sequelize.INTEGER
    }
});

module.exports = Colis;