const express = require('express');
const router = express.Router();
const spaController = require('../controllers/spa.controller.js');

// Ruta para verificar disponibilidad
router.post('/verificar-disponibilidad', spaController.verificarDisponibilidad);

// Ruta para crear una nueva reservación
router.post('/reserve', spaController.crearReservacion);

//Ruta para la busqueda de una reservación
router.get('/buscar/:turno', spaController.buscarReservacion);

//Ruta para modificar la reservación
router.put('/modificar/:turno', spaController.modificarReservacion);

//Ruta para eliminar reservación
router.delete('/eliminar/:turno', spaController.eliminarReservacion);

module.exports = router;
