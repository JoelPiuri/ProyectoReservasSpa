const express = require('express');
var bodyParser=require('body-parser');//
const cors = require('cors');  // Importa el paquete cors
const mongoose = require('mongoose');

const reservationRoutes = require('./routes/spa.routes.js'); 
var productRoutes = require('./routes/product.routes.js');
const serviceRoutes = require('./routes/servicios.routes.js');
const faqRoutes = require('./routes/faq.routes.js');

var app = express();

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Habilita CORS para todas las solicitudes
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// Usar rutas
app.use('/', reservationRoutes);
app.use('/', faqRoutes);
app.use('/', productRoutes);
app.use('/', serviceRoutes);

module.exports=app;
