const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const {getUsuarios, crearUsuarios} = require('../controller/usuarios');
const { check } = require('express-validator');
const { validarCampo } = require('../middleware/validarCampo');
const { validarJWT } = require('../middleware/validarJWT');

router.get('/', validarJWT , getUsuarios);

router.post('/',[
    check('nombre',' El campo nombre es requerido').not().isEmpty(),
    check('email',' El campo email es requerido').not().isEmpty(),
    check('password',' El campo password es requerido').not().isEmpty(),
    validarCampo,
],crearUsuarios);

module.exports = router