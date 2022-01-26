const express = require('express');
const router = express.Router();
const colisCtrl = require('../controllers/colis');

router.get('/', colisCtrl.getAllColis);
router.get('/:id', colisCtrl.getOneColis);
router.get('/search/:number', colisCtrl.getOneColisByNumber);
router.post('/', colisCtrl.createColis);
router.put('/:id', colisCtrl.editColis);
router.delete('/:id', colisCtrl.deleteColis);

module.exports = router;