const Profesor = require("./db/models/profeModel"); //Test para login
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

mongoose.connect('mongodb+srv://mongouser:mongouser@taller2bd2.cpnky.mongodb.net/Datos?retryWrites=true&w=majority');


app.post('/api/register', async (req, res) => {

  console.log(req.body);
  try{
    await Profesor.create({
      email: req.body.email,
      password: req.body.password,
    })
    res.json({status: 'ok'});
  }catch (err){
    console.log(err);
    res.json({status: 'error', message: "Error al crear profesor"});
  }
});

app.post('/api/login',  async (req, res) => {
  
    const user = await Profesor.findOne({
      email: req.body.email, 
      password: req.body.password,
    
    })

    if(user){

      const token = jwt.sign({
        email: req.body.email,

      },'secret123')

      return res.json({status: 'ok', user: token});
    } else{
      return res.json({status: 'ok', user: false});
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