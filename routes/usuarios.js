const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const {getUsuarios, crearUsuarios} = require('../controller/usuarios');
const { check } = require('express-validator');

router.get('/',[],getUsuarios);

router.post('/',[
    check('nombre',' El campo nombre es requerido').not().isEmpty(),
    check('email',' El campo email es requerido').not().isEmpty(),
    check('password',' El campo password es requerido').not().isEmpty(),
],crearUsuarios);

module.exports = router