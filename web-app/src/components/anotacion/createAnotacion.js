import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   nombre_alumno: "",
   comentario: "",
   tipo: "",
   materia: "",
   fecha: "", 
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {

    e.preventDefault();
    
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
    
    await fetch("http://localhost:5000/anotacion/add", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
    })
    .catch(error => {
        window.alert(error);
        return;
    });
    
    setForm({  nombre_alumno: "", comentario: "", tipo: "", materia: "", fecha: ""  }); //Deja los campos vacios
    navigate("/Create");
 
}
 
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Crear nueva anotacion</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Nombre alumno</label>
         <input
           type="text"
           className="form-control"
           id="nombre_alumno"
           value={form.nombre_alumno}
           onChange={(e) => updateForm({ nombre_alumno: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Materia</label>
         <input
           type="text"
           className="form-control"
           id="materia"
           value={form.materia}
           onChange={(e) => updateForm({ materia: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="comentario">Comentario</label>
         <input
           type="text"
           className="form-control"
           id="comentario"
           value={form.comentario}
           onChange={(e) => updateForm({ comentario: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="anotacion_positiva"
             value="Positiva"
             checked={form.tipo === "Positiva"}
             onChange={(e) => updateForm({ tipo: e.target.value })}
           />
           <label htmlFor="positionPositiva" className="form-check-label">Positiva</label>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="anotacion_negativa"
             value="Negativa"
             checked={form.tipo === "Negativa"}
             onChange={(e) => updateForm({ tipo: e.target.value })}
           />
           <label htmlFor="positionNegativa" className="form-check-label">Negativa</label>
         </div>
         </div>
       </div>
       <div className="form-group">
         <label htmlFor="name">Fecha</label>
         <input
           type="text"
           className="form-control"
           id="fecha"
           value={form.fecha}
           onChange={(e) => updateForm({ fecha: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Crear anotacion"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}