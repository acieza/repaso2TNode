const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const multer = require('multer');
// const upload = multer({dest:'public/img'});
// const fs = require('fs');

const url = 'mongodb://localhost:27017/myBlog';

const app = express();

mongoose.connect(url, {useNewUrlParser: true})
const conexion = mongoose.connection;

conexion.on('open', ()=>{
    console.log('Conectado a la Base de Datos..');
})

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const blogRouter = require('./routes/blog');
app.use('/', blogRouter);

const ClienteRouter = require('./routes/clientes');
app.use('/clientes', ClienteRouter);

const SubirRouter = require('./routes/subir');
app.use('/subir', SubirRouter)

app.listen(3000, ()=>{
    console.log('SERVER ON');
})