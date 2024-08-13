const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faq.controller.js');

// Ruta para obtener FAQs
router.get('/obtenerFAQ', faqController.getFaqs);

// Ruta para crear FAQs
router.post('/crearFAQ', faqController.createFaq);

module.exports = router;
