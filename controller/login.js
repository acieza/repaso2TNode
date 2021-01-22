const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const {generarJWT} =  require('../helpers/jwt');


const login = async (req,res) => {
    const {email,password} = req.body;

    try{
         //Comprobar Email//

         const usuarioLogin = await Usuario.findOne({email});

         if( !usuarioLogin ){
             return res.status(400).json({
                 ok:false,
                 msg:("Correo o Contraseña Incorrecta")
             });
         }

         //Verificar contraseña//

         const validarPassword = bcrypt.compareSync(password,usuarioLogin.password);

         if(!validarPassword){
             return res.status(500).json({
                 ok:false,
                 msg:("Correo o Contraseña Incorrecta")
             });
         }


         //Generar TOKEN//

         const token = await generarJWT(usuarioLogin._id);


         res.json({
             ok:true,
             usuarioLogin,
             msg:("Usuario Validado correctamente"),
             token
         })
    }catch(error){
        res.status(500).json({
            ok:false,
            msg:("Error de Servicio técnico")
    });
 }
}


module.exports = {
    login
}
