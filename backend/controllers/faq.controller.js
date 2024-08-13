const FAQ = require('../models/faq.js'); // Asegúrate de tener un modelo FAQ

// Obtener todas las FAQs desde la base de datos
exports.getFaqs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json(faqs);
    } catch (error) {
        console.error('Error al obtener FAQs:', error);
        res.status(500).json({ error: 'Error al obtener FAQs' });
    }
};

// Crear una nueva FAQ
exports.createFaq = async (req, res) => {
    const { question, answer } = req.body;

    try {
        const newFaq = new FAQ({ question, answer });
        await newFaq.save();
        res.status(201).json({ message: 'FAQ creada exitosamente', faq: newFaq });
    } catch (error) {
        console.error('Error al crear FAQ:', error);
        res.status(500).json({ error: 'Error al crear FAQ' });
    }
};
