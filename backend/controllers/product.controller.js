var Product = require('../models/products');

// Agregar un producto
exports.createProduct = async (req, res) => {
	
	try {
	  var product = new Product(req.body);
	  await product.save();
	  res.status(201).json(product);
	} catch (error) {
	  res.status(400).json({ error: error.message });
	}
};
  
  // Obtener todos los productos
  exports.getAllProducts = async (req, res) => {
	try {
	  var products = await Product.find();
	  res.status(200).json(products);
	} catch (error) {
	  res.status(500).json({ error: error.message });
	}
  };
  
  // Obtener un producto por ID
  exports.getProductById = async (req, res) => {
	try {
	  var product = await Product.findById(req.params.id);
	  if (!product) return res.status(404).json({ message: 'Product not found' });
	  res.status(200).json(product);
	} catch (error) {
	  res.status(500).json({ error: error.message });
	}
  };
  
  // Actualizar un producto
  exports.updateProduct = async (req, res) => {
	try {
	  var product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
	  if (!product) return res.status(404).json({ message: 'Product not found' });
	  res.status(200).json(product);
	} catch (error) {
	  res.status(400).json({ error: error.message });
	}
  };
  
  // Eliminar un producto
  exports.deleteProduct = async (req, res) => {
	try {
	  var product = await Product.findByIdAndDelete(req.params.id);
	  if (!product) return res.status(404).json({ message: 'Product not found' });
	  res.status(200).json({ message: 'Product deleted' });
	} catch (error) {
	  res.status(500).json({ error: error.message });
	}
  };