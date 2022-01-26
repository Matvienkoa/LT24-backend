const models = require('../models/index');

// Get Profile
exports.getOneUser = (req, res) => {
    models.User.findOne({ 
        include: [{
            model: models.Colis
        }],
        order: [[models.Colis, 'createdAt', 'DESC']],
        where: { id: req.params.id } })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }));
};