const express = require('express');
const router = express.Router();
var corporalTreatmentsController = require('../controllers/servicios.controller');

router.get('/servicios', corporalTreatmentsController.getAllCorporalTreatments);
router.get('/servicios', corporalTreatmentsControlle.getAllServices);
router.get('/servicios/category/:category', corporalTreatmentsControlle.getServicesByCategory);
router.post('/servicios', corporalTreatmentsControlle.createService);
router.put('/servicios/:id', corporalTreatmentsControlle.updateService);
router.delete('/servicios/:id', corporalTreatmentsControlle.deleteService);
module.exports = router;
