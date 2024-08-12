const express = require('express');
const cors = require('cors');  // Importa el paquete cors
const mongoose = require('mongoose');
const reservationRoutes = require('./routes/spa.routes.js'); 

const app = express();

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Habilita CORS para todas las solicitudes
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Spa', {
  // otras opciones de mongoose si es necesario
})
.then(() => console.log('Conectado a la base de datos Spa'))
.catch(err => console.error('Error al conectar a la base de datos', err));

app.use(express.json());

// Usar rutas
app.use('/api/reservations', reservationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
