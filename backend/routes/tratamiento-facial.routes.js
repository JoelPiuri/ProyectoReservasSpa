const express = require('express');
const router = express.Router();
var facialTreatmentsController = require('../controllers/servicios.controller');

router.get('/servicios', facialTreatmentsController.getAllFacialTreatments);
router.get('/servicios', facialTreatmentsControllere.getAllServices);
router.get('/servicios/category/:category', facialTreatmentsControllere.getServicesByCategory);
router.post('/servicios', facialTreatmentsControllere.createService);
router.put('/servicios/:id', facialTreatmentsControllere.updateService);
router.delete('/servicios/:id', facialTreatmentsControllere.deleteService);

module.exports = router;
