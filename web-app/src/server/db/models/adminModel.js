const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const administradorSchema =  new Schema({

    name: { 
        type: String, 
        required: [true,"Por favor, escriba un nombre"], 
        unique: false
    },
    email: { 
        type: String, 
        required: [true,"Por favor, escriba un email"], 
        unique: [true,"El email ya existe"],
    },
    password: { 
        type: String, 
        required: [true,"Por favor, escriba una contraseña"], 
        unique: false,
    },
    role: { 
        type: String, 
        required: [true,"Por favor, seleccione un rol"], 
        unique: false,
    },
    carrera: {
        type: String, 
        required: false, 
        unique: false
    },
    
},{collection:'Administradores',versionKey: false}
)

module.exports = mongoose.model('Administrador', administradorSchema);