const express = require("express");
const recordRoutes = express.Router(); // Lo usamos para definir nuestras rutas, El enrutador tomará el control de las solicitudes que comiencen con la ruta /anotacion
const dbo = require("../db/conn");  // Esto nos ayudara a conectarnos a la base de datos
const ObjectId = require("mongodb").ObjectId;  // This help convert the id from string to ObjectId for the _id.
let collection = "anotacion"; //Nombre de la coleccion que se usara


// Esta seccion ayudarara a enlistar todas las anotaciones
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection(collection)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
        res.json(result);
    });
});

// Esta seccion ayudara a retornar una anotacion por su id
recordRoutes.route("/anotacion/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection(collection).findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// Esta seccion crea una sola anotacion
recordRoutes.route("/anotacion/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    nombre_alumno: req.body.nombre_alumno,
    comentario: req.body.comentario,
    tipo: req.body.tipo,
    materia: req.body.materia,
    fecha: req.body.fecha,
  };
  db_connect.collection(collection).insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document add");
    response.json(res);
  });
});

// Esta seccion ayudara a actualizar una anotacion por su id
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect.collection(collection).updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// Esta seccion ayudara a eliminar una anotacion
recordRoutes.route("/:id").delete((req, response) => {

  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection(collection).deleteOne(myquery, function (err, obj) {
    if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
   });

});

module.exports = recordRoutes;
