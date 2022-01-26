const models = require('../models/index');

// Create Positions
exports.createPositions = (req, res) => {
    // Create Colis
    models.Position.create({
        lat: req.body.lat,
        lng: req.body.lng,
        userId: req.body.userId
    })
    .then(() => res.status(201).json(req.body))
    .catch(error => res.status(400).json({ error }));  
};

// Edit Positions
exports.editPostitions = async (req, res) => {
    // Find the Positions with ID
    const positions = await models.Position.findOne({
        where: { userId: req.params.userId }
    })
    await positions.update({
        lat: req.body.lat,
        lng: req.body.lng,
        userId: req.body.userId
    })
    .then(() => res.status(200).json(req.body))
    .catch(error => res.status(400).json({ error })); 
};

// Delete Positions
exports.deletePositions = (req, res) => {
    models.Position.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Position supprimée' }))
        .catch(error => res.status(400).json({ error }));
};

// Get One Positions by ID
exports.getOnePositions = (req, res) => {
    models.Position.findOne({
        where: { id: req.params.id }
    })
    .then(positions => res.status(200).json(positions))
    .catch(error => res.status(404).json({ error }));
};

// Get One Positions by User
exports.getOnePositionsByUser = (req, res) => {
    models.Position.findOne({
        where: { userId: req.params.userId }
    })
    .then(positions => res.status(200).json({"lat": parseFloat(positions.lat), "lng": parseFloat(positions.lng)}))
    .catch(error => res.status(404).json({ error }));
};

// Get All Positions
exports.getAllPositions = (req, res) => {
    models.Position.findAll({
        order: [['createdAt', 'ASC']],
    })
        .then((positions) => {res.send(positions)})
        .catch(error => res.status(400).json({ error }));
};