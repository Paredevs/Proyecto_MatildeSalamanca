const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const apoderadoSchema =  new Schema({

    Nombre: { 
        type: String, 
        required: [true,"Por favor, escriba un nombre"], 
        unique: false
    },
    Email: { 
        type: String, 
        required: [true,"Por favor, escriba un email"], 
        unique: [true,"El email ya existe"],
    },
    Password: { 
        type: String, 
        required: [true,"Por favor, escriba una contraseña"], 
        unique: false,
    },
    Nombre_Alumno: {
        type: String,
        required: [true,"Por favor, escriba el nombre de su hijo"], 
        unique: false
    },
},{collection:'Apoderados',versionKey: false}
)

module.exports = mongoose.model('Apoderado', apoderadoSchema);