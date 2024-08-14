const express = require('express');
const router = express.Router();
const spaController = require('../controllers/spa.controller.js');

// Ruta para verificar disponibilidad
router.post('/verificar-disponibilidad', spaController.verificarDisponibilidad);

// Ruta para crear una nueva reservación
router.post('/reserve', spaController.crearReservacion);

//Ruta para la busqueda de una reservación
router.get('/buscar/:codigo', spaController.buscarReservacion);

//Ruta para modificar la reservación
router.put('/modificar/:codigo', spaController.modificarReservacion);

//Ruta para eliminar reservación
router.delete('/eliminar/:codigo', spaController.eliminarReservacion);

module.exports = router;
