const express = require("express");
const route = express.Router();
const { nav , pedro } = require('../controller/index')
//Agregar las demas rutas

route.get('/',nav.getHome)
route.get('/crear',nav.createUser)
route.get('/register',nav.getRegister)


module.exports = route