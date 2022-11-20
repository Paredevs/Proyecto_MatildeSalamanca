
const Profesor = require("./db/models/profeModel"); //Test para login
const Administrador = require("./db/models/adminModel"); //Para administrador
const Secretaria = require("./db/models/secreModel"); //Para secretaria
const Apoderado = require("./db/models/apoderadoModel"); //Para apoderado
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;





app.use(cors());
app.use(express.json());
app.use(require("./routes/anotacion"));
// get driver connection
const dbo = require("./db/conn");


//Test

const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");


mongoose.connect('mongodb+srv://admin:salamanca@salamancadb.vgffqvc.mongodb.net/EscuelaDB?retryWrites=true&w=majority');


app.post('/api/admin/register', async (req, res) => {   //Registrar administrador

  console.log(req.body);
  try{
    await Administrador.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      carrera: req.body.carrera
    })
    
    res.json({status: 'Administrador creado'});
  }catch (err){
    console.log(err);
    res.json({status: 'error', message: "Error al crear el administrador"});
  }
});
app.post('/api/secretaria/register', async (req, res) => {   //Registrar secretarie

  console.log(req.body);
  try{
    await Secretaria.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      carrera: req.body.carrera
    })
    
    res.json({status: 'secretaria creado'});
  }catch (err){
    console.log(err);
    res.json({status: 'error', message: "Error al crear el secretaria"});
  }
});

app.post('/api/profesor/register', async (req, res) => {  // Registrar profesor

  console.log(req.body);
  try{
    await Profesor.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    })
    res.json({status: 'Profesor creado'});
  }catch (err){
    console.log(err);
    res.json({status: 'error', message: "Error al crear profesor"});
  }
});

app.post('/api/apoderado/register', async (req, res) => {  // Registrar apoderado

  console.log(req.body);
  try{
    await Apoderado.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    })
    res.json({status: 'Apoderado creado'});
  }catch (err){
    console.log(err);
    res.json({status: 'error', message: "Error al crear apoderado"});
  }
});



//Seccion de login

app.post('/api/login',  async (req, res) => {
  
    
  
     let user = await Administrador.findOne({
       email: req.body.email, 
       password: req.body.password,
      // role: req.body.role,   comprueba si el rol es el mismo

     })
     
     let user1 = await Profesor.findOne({
      email: req.body.email, 
      password: req.body.password,
     // role: req.body.role,   comprueba si el rol es el mismo

    })
    
    let user2 = await Secretaria.findOne({
      email: req.body.email, 
      password: req.body.password,
     // role: req.body.role,   comprueba si el rol es el mismo

    })
    let user3 = await Apoderado.findOne({
      email: req.body.email, 
      password: req.body.password,
     // role: req.body.role,   comprueba si el rol es el mismo

    })

    //  const user = await Profesor.findOne({
    //    email: req.body.email, 
    //    password: req.body.password,
    //   // role: req.body.role,   comprueba si el rol es el mismo

    //  })
    console.log(user)
    console.log(user1+"este es Profesor")
    console.log(user2+"este es scretaria")
    console.log(user3+"este es scretaria")
    
   if(user1 != null){
       user=user1
   }
   if(user2 != null){
    user=user2
   }

   if(user3 != null){
    user=user3
   }

    if(user){

      const token = jwt.sign({
        email: req.body.email,
        role: req.body.role,

      },'secret123')

      
      console.log("usuario:"+user);

      return res.json({status: 'ok', user: token,name: user.name, email:user.email, role: user.role});
      
      
    } else{
      
      return res.json({status: 'ok', user: false, message: "Login fallido"});
    }
})





app.get('/hello' , (req, res) => {
  res.send("Hello World");
});
//Test


app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});