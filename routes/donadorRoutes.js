const express = require('express');
const router = express.Router();
const donadorController = require('../controllers/donadorController');

router.get('/', donadorController.obtenerTodosLosDonadores);
router.post('/', donadorController.crearDonador);
router.get('/:id', donadorController.obtenerDonadorPorId);
router.put('/:id', donadorController.actualizarDonador);
router.delete('/:id', donadorController.eliminarDonador);

module.exports = router;
