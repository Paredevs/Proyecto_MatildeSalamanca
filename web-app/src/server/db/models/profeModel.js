const mongoose = require("mongoose");

const Profesor= new mongoose.Schema({

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
    type: { 
      type: String, 
      required: [true,"Por favor, escriba una contraseña"], 
      unique: false
    }
    
  },{collection:'Profesores',versionKey: false}
  
)

const model = mongoose.model("Profesor", Profesor);

module.exports = model;
