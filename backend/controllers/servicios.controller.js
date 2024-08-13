var Product = require('../models/servicios');

// Obtener todos los servicios
exports.getAllServices = async (req, res) => {
  try {
    var services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener servicios por categoría
exports.getServicesByCategory = async (req, res) => {
  try {
    var services = await Service.find({ category: req.params.category });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo servicio
exports.createService = async (req, res) => {
  var { name, description, price, category } = req.body;
  var service = new Service({ name, description, price, category });

  try {
    var newService = await service.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un servicio
exports.updateService = async (req, res) => {
  try {
    var service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un servicio
exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
