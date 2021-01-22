const express = require('express');
const router = express();

const {login} = require('../controller/login');
const {check} = require('express-validator');
const {validarCampo} = require('../middleware/validarCampo')

router.post('/',[
    check('email',' El campo email es requerido').not().isEmpty(),
    check('password',' El campo password es requerido').not().isEmpty(),
   validarCampo,
],login);

module.exports = router