import React, { useState } from "react";
import { useNavigate } from "react-router";
import routes from "../helpers/routes";
import logout from "../helpers/logout";
 
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
    navigate(routes.profesor.menu); //Redirecciona a la pagina de anotaciones
 
}
 
 
 // This following section will display the form that takes the input from the user.
 return (
  <div className="listadeanotaciones">
      
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />

     
        <input type="checkbox" id="check"></input>
        <label htmlFor="check">
          <i className="fas fa-arrow-right" id="btn"></i>
          <i className="fas fa-arrow-left" id="cancel"></i>
        </label>
        {/*aqui iban los botones antes: ingresar notas etc */}
        <div className="sidebar">
          <header>
            Perfil Profesor
            <img className="Picture_logo"
              src="https://cdn2.estamosrodando.com/biografias/14/7/198-steve-carell-358703.jpg"
              alt="usuario"
            ></img>
            {/*<svg xmlns="http://www.w3.org/2000/svg" width="240" height="160" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>*/}
          </header>
          <ul>
            <li>
              <b>
                {localStorage.getItem("name")} {localStorage.getItem("lastname")}
                Nombre de Usuario<br></br>Curso<br></br>
              </b>
            </li>
            <li>
              <a href="/#">
                <i className="fa fa-key"></i>Cambiar Clave
              </a>
            </li>
            <li>
              <a href="/#" >
                <i className="fa fa-wrench"></i>Opciones
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" onClick={logout}>
                <i className="fa fa-window-close"></i>Cerrar Sesion
              </a>
            </li>
          </ul>
        </div>
        <footer>
          <div className="text-center">
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                />
                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
              </svg>{" "}
              Escuela Matilde Salamanca
            </p>
          </div>
          <div className="text-center">
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>{" "}
              9 7793 5574
            </p>
          </div>
          <div className="text-center">
            <p>
              {" "}
              <a
                href="https://www.google.cl/maps/place/Matilde+Salamanca+498,+Salamanca,+Coquimbo/@-31.7818781,-70.9688848,17z/data=!3m1!4b1!4m5!3m4!1s0x9688cf99e3273923:0x135d988eb8f65621!8m2!3d-31.7818781!4d-70.9666961"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-map"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                  />
                </svg>{" "}
                Calle Matilde Salamanca Nro.498, Salamanca, Chile
              </a>
            </p>
          </div>
        </footer>
        <section>
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
        </section>
     
      </div>


  
   
 );
}