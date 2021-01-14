const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

router.get('/', async (req,res)=>{
    try{
        const clienteUno = await Cliente.find();
        res.json(clienteUno);
    }catch(err){
        res.send("Error" + err)
    }
})
// router.post('/', async(req, res) =>{
//     const cliente = new Cliente({
//         nombre: req.body.nombre,
//         edad: req.body.edad,
//         tipo: req.body.tipo,
//         estatura: req.body.estatura,
//         peso: req.body.peso,
//         dieta: req.body.dieta,
//         correo: req.body.correo,
//         historial: req.body.historial 
//     })
//     try{
//         const clienteUno = await cliente.save();
//         res.json(clienteUno);
//     }catch(err){
//         res.send("Error " + err);
//     }
// })

router.post('/',async(req,res)=>{
    try{
    const cliente = new Cliente(req.body)
    await cliente.save();
    res.json({"respuesta":"okey", "mensaje":"Cliente guardado con exito"});
    }catch(err){
        res.send("Error " + err);
    }
})

router.get('/buscar/:id', async(req,res) =>{
    try{
        const clienteUno = await Cliente.findById(req.params.id)
        .select("_id nombre edad dieta")
       .exec()
       .then()
         res.json(clienteUno);
    }catch{
        res.send("Error " + err);
    }
   
})



module.exports = router;