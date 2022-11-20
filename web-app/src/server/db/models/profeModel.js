const mongoose = require("mongoose");

const Profesor= new mongoose.Schema({

    name: {
      type: String,
      required: [true, "Por favor, escriba un nombre"],
      unique: false,
    },  
    email: { 
      type: String, 
      required: [true,"Por favor, escriba un email"], 
      unique: [true,"El email ya existe"],
    },
    password: { 
      type: String, 
      required: [true,"Por favor, escriba una contraseña"], 
      unique: false
    },
    role: { 
      type: String, 
      required: [true,"Por favor, escriba un rol"], 
      unique: false
    }
    
  },{collection:'Profesores',versionKey: false}
  
)

const model = mongoose.model("Profesor", Profesor);

module.exports = model;
