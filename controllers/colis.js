const models = require('../models/index');

// Create Colis
exports.createColis = (req, res) => {
    // Empty Inputs
    if (req.body.number === "") {
        return res.status(400).json({ message: "Merci de renseigner le Numéro du Colis"});
    }
    // Create Colis
    models.Colis.create({
        number: req.body.number,
        userId: req.body.userId
    })
    .then(() => res.status(201).json(req.body))
    .catch(error => res.status(400).json({ error }));  
};

// Edit Colis
exports.editColis = async (req, res) => {
    // Empty Inputs
    if (req.body.number === "") {
        return res.status(400).json({ message: "Merci de renseigner le Numéro du Colis"});
    }
    // Find the Colis with ID
    const colis = await models.Colis.findOne({
        where: { id: req.params.id }
    })
    await colis.update({
        number: req.body.number,
        userId: req.body.userId
    })
    .then(() => res.status(200).json({ message: 'Colis modifié' }))
    .catch(error => res.status(400).json({ error })); 
};

// Delete Colis
exports.deleteColis = (req, res) => {
    models.Colis.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Colis supprimé' }))
        .catch(error => res.status(400).json({ error }));
};

// Get One Colis
exports.getOneColis = (req, res) => {
    models.Colis.findOne({
        where: { id: req.params.id }})
    .then(colis => res.status(200).json(colis))
    .catch(error => res.status(404).json({ error }));
};

// Get One Colis
exports.getOneColisByNumber = (req, res) => {
    models.Colis.findOne({
        where: { number: req.params.number }})
    .then((colis) => {
        if(colis) {
            res.status(200).json(colis)
        } else {
            return res.status(400).json({ message: "Le numéro du colis n'existe pas, veuillez saisir un numéro valide"});
        }
    })   
    .catch(error => res.status(404).json({ error }));
};

// Get All Colis
exports.getAllColis = (req, res) => {
    models.Colis.findAll({
        order: [['createdAt', 'DESC']],
    })
        .then((colis) => {res.send(colis)})
        .catch(error => res.status(400).json({ error }));
};