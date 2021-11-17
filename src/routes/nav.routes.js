const express = require("express");
const route = express.Router();
const { nav , pedro } = require('../controller/index')
//Agregar las demas rutas

route.get('/',nav.getHome)
route.get('/saludo',pedro.saludame)


module.exports = route