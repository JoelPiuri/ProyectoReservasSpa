const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/servicios.controller');

router.get('/servicios', serviciosController.getAllServices);
router.get('/servicios/category/:category', serviciosController.getServicesByCategory);
router.post('/servicios', serviciosController.createService);
router.put('/servicios/:id', serviciosController.updateService);
router.delete('/servicios/:id', serviciosController.deleteService);

module.exports = router;
