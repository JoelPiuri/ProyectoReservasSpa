var mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({
	name: { type: String, required: true },
  	description: { type: String, required: true },
  	price: { type: Number, required: true },
  	imageUrl: { type: String },
	category: {
	  type: String,
	  enum: ['Tratamiento facial', 'Tratamiento corporal'],
	  required: true
	}
  });
  
  var Service = mongoose.model('Service', serviceSchema);
  
  module.exports = Service;