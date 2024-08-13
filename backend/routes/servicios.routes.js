const express = require('express');
const router = express.Router();
var servicesController = require('../controllers/servicios.controller.js');

router.get('/services', servicesController.getAllServices);
router.get('/services/category/:category', servicesController.getServicesByCategory);
router.post('/services', servicesController.createService);
router.put('/services/:id', servicesController.updateService);
router.delete('/services/:id', servicesController.deleteService);

module.exports = router;
