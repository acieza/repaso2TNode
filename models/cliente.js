const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({

    nombre:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:true
    },
    tipo:{
        type:String,
        enum: ['ectomorfo','mesomorfo','endomorfo'],
        required: true

    },
    estatura:{
        type:Number,
        required:true
    },
    peso:{
        type:Number,
        required:true
    },
    dieta:{
        type:Boolean,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    historial:{
        type:String,
        required:true
    }


})

clienteSchema.method('toJSON', function(){
    const{__v, _id, ...object} = this.toObject();
    object.identificador = _id;
    return object;
})

module.exports = mongoose.model('Cliente', clienteSchema);