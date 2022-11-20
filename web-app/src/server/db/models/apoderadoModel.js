const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const apoderadoSchema =  new Schema({

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
        required: [true,"Por favor, escriba un rol"], 
        unique: false
      },
    nombre_Alumno: {
        type: String,
        required: [false,"Por favor, escriba el nombre de su hijo"], 
        unique: false
    },
},{collection:'Apoderados',versionKey: false}
)

module.exports = mongoose.model('Apoderado', apoderadoSchema);