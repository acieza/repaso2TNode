const express = require('express');
const Usuario = require('../models/usuario');
const {validationResult} = require('express-validator');

const getUsuarios = async (req,res)=>{
    try{
        const usuario = await Usuario.find();
        res.json(usuario);
    }catch(err){
        res.send("Error" + err)
    }
}

const crearUsuarios = async(req,res)=>{

    const{email, password} = req.body;
  
    const errores = validationResult(req) ;
    if(!errores.isEmpty()){
       return res.status(500).json({
            ok:false,
            error: errores.mapped()
    });
}
    
  
    try{
        
        //Comprobar Email//

        const hayEmail = await Usuario.findOne({email});

        if( hayEmail ){
            return res.status(400).json({
                ok:false,
                msg:"El correo ya existe"
            });
        }

        //Guardar el Usuario//

        const usuario = new Usuario(req.body)

        await usuario.save();

        res.json({
            ok:true,
            usuario
        })
    }catch(err){
        res.status(500).json({
            ok:false,
            msg:("Error de Servidor")
        })
}

}

module.exports = {
    getUsuarios,
    crearUsuarios,
}