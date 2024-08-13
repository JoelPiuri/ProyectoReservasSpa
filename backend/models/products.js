var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  category: { 
    type: String, 
    enum: ['aceites', 'cremas', 'exfoliantes', 'mascarillas', 'tonicos'],
    required: true 
  }
});

module.exports = mongoose.model('Product', productSchema);
