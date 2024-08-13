var mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({
	name: { type: String, required: true },
  	description: { type: String, required: true },
  	price: { type: Number, required: true },
  	imageUrl: { type: String },
	duration: { 
		type: Number, 
		required: true,
		min: [1, 'La duración debe ser al menos 1 minuto'] // Validación de mínimo
	 },
	category: {
	  type: String,
	  enum: ['Tratamiento facial', 'Tratamiento corporal'],
	  required: true
	}
  });
  
  var Service = mongoose.model('Service', serviceSchema);
  
  module.exports = Service;