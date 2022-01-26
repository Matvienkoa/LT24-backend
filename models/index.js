const User = require('../models/User');
const Colis = require('../models/Colis');
const Position = require('../models/Position');

User.hasMany(Colis);
User.hasMany(Position);
Colis.belongsTo(User);
Position.belongsTo(User);

module.exports = {
    User,
    Colis,
    Position
};