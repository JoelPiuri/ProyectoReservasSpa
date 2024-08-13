const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  turno: {
    type: Number, 
    required: true,
    unique: true
  },
  codigo: {  
    type: String,
    required: true,
    unique: true
  },
});

module.exports = mongoose.model('Reservas', ReservationSchema);
