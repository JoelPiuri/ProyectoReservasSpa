
var express=require('express');
var router = express.Router();
var spaController = require('../controllers/spa.controller');

var multiparty = require('connect-multiparty');
const spa = require('../models/spa');

var multipartyMiddleware = multiparty({uploadDir:'./uploads'});

//pagina inicio
router.get('/inicio', spaController.inicio);