const express = require('express');
const router = express.Router();
const positionsCtrl = require('../controllers/positions');

router.get('/', positionsCtrl.getAllPositions);
router.get('/:id', positionsCtrl.getOnePositions);
router.get('/search/:userId', positionsCtrl.getOnePositionsByUser);
router.post('/', positionsCtrl.createPositions);
router.put('/:userId', positionsCtrl.editPostitions);
router.delete('/:id', positionsCtrl.deletePositions);

module.exports = router;