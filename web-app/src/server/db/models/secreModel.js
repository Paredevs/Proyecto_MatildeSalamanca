const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const secretariaSchema =  new Schema({

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
        required: [true,"Por favor, escriba una carrera"], 
        unique: false,
    },
    carrera: {
        type: String,
        required: [false,"Por favor, escriba un rol"],
        unique: false,
    }
},{collection:'Secretarias',versionKey: false}
)

module.exports = mongoose.model('Secretaria', secretariaSchema);