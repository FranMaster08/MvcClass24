const express = require("express");
const route = express.Router();
//Agregar las demas rutas
route.use('/',require('./nav.routes'))
route.use('/users',require('./user.routes'))
module.exports = route