const libro = require('../models/spa');
var fs = require('fs')
var path = require('path')
var Libro = require('../models/spa')
var controller = {
    inicio: function (req, res) {
        return res.status(502).send({ message: "<h1>Hola 3</h1>" })
    }
}