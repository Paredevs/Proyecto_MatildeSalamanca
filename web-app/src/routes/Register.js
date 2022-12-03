
import React from "react";
import role from "./helpers/role";
import "../styles/Login.css";
// import PropTypes from 'prop-types';




export default function Login() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [roleUser, setRole] = React.useState(role.admin);

  async function registerUser(event) {

    event.preventDefault();
    console.log("name", name);
    console.log("email:",email);
    console.log("role:",roleUser);
    let uid = '' ;
      switch (roleUser) {
       case role.admin: uid=role.admin; break;
       case role.profesor: uid=role.profesor ;break;
       case role.secretaria: uid =role.secretaria;break;
       case role.apoderado: uid=role.apoderado;break; 
        
       default: break;
      }

      
  console.log(uid)
     const response = await fetch('http://localhost:5000/api/'+uid+'/register', {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         name: name,
         email: email,
         password: password,
         role: roleUser,
         carrera: null,
       }),
     });
     const data = await response.json()
     alert("Usuario registrado con éxito");
     console.log(data);
     document.getElementById("register-form").reset();  //Reinciando el formulario

    
   }

  
   function verificar(){//verifica lo que se selecciona en el form select
    
   if(document.getElementById('TipoUsuario').value==='apoderado'){//apoderado
    document.getElementsByClassName('login')[0].style.height='500px';
    document.getElementsByClassName('preguntasalumnos')[0].style.display = 'block';
   }else if(document.getElementById('TipoUsuario').value !=='apoderado'){

    document.getElementsByClassName('preguntasalumnos')[0].style.display = 'none';
   }

   if(document.getElementById('TipoUsuario').value==='profesor'){//profesor
    document.getElementsByClassName('login')[0].style.height='500px';//AGRANDA EL LOGIN
    document.getElementsByClassName('preguntasprofesor')[0].style.display = 'block';
   }else if(document.getElementById('TipoUsuario').value !=='profesor'){

    document.getElementsByClassName('preguntasprofesor')[0].style.display = 'none';
   }
    
   if(document.getElementById('TipoUsuario').value==='secretaria'){//secretaria
    document.getElementsByClassName('login')[0].style.height='500px';//AGRANDA EL LOGIN
    document.getElementsByClassName('preguntassecretaria')[0].style.display = 'block';
   }else if(document.getElementById('TipoUsuario').value !=='secretaria'){
   
    document.getElementsByClassName('preguntassecretaria')[0].style.display = 'none';
   }

   if(document.getElementById('TipoUsuario').value==='admin'){//admin
    document.getElementsByClassName('login')[0].style.height='500px';//AGRANDA EL LOGIN
    document.getElementsByClassName('preguntasadmin')[0].style.display = 'block';
   }else if(document.getElementById('TipoUsuario').value !=='admin'){
    
    document.getElementsByClassName('preguntasadmin')[0].style.display = 'none';
   }
    
  }



  return (
    <div className="Login">
      Register screen
      {/* <div  style={{ backgroundImage: `url(${background})` }}> </div> Forma de agregar fondo */}
      {/* <Main /> */}
      {/* <img src={logo} className="grande" alt="" />  */}
      {/* <nav className="navbar">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 "><img class="pequeña" src={logo} alt="" /><p>Colegio Matilde Salamanca</p></span>
          </div>
        </nav> */}
      <div className="login">
        <div className="login-box">
          <form id="register-form" onSubmit={registerUser}>
            <div className="mb-3">
             <label htmlFor="exampleInputName1" className="form-label">
                Nombre completo</label>
              <input
                type="name"
                className="form-control"
                id="exampleInputName"
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
                placeholder="Nombre completo"
                required
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo electronico</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                placeholder="Correo electronico"
                required
              />
               {/* <div id="emailHelp" class="form-text">
                Tu correo no se compartira con nadie.
              </div>  */}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
                
              />
            </div>
 



            <label htmlFor="exampleInputEmail1" className="form-label">
                Tipo de usuario
              </label>
            <select defaultValue={role.admin} id="TipoUsuario" className="form-select" required onChange={e => {
              setRole(e.target.value)
              verificar(e.target.value)
               }}>
              <option value={role.admin}>Administrador</option>
              <option value={role.secretaria}>Secretaria</option>
              <option value={role.profesor}>Profesor</option>
              <option value={role.apoderado}>Apoderado</option>
              
              </select>
              <div className="preguntasalumnos">{/*preguntas para alumnos*/} <br></br>
              <div className="m4">
                <label>
                  Nombre completo alumno
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="nombrealumno"
                  placeholder="Nombre alumno"
                  required
                />  
              </div>
              <div className="m4">
                <label>
                  Curso
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="cursoalumno"
                  placeholder="Curso"
                  required
                />
              </div>
              <div className="m4">
                <label>
                  Fecha de nacimiento
                </label>
                <input type="date" id="start" name="trip-start"
                  value="2018-07-22"
                  min="2010-01-01" max="2022-12-31">
                  </input>
                {/*<input
                  type="text"
                  name="name"
                  className="form-control"
                  id="fechanacimientoalumno"
                  placeholder="Fecha de nacimiento"
                  required
                />/*/}
              </div>
            </div>


            <div className="preguntasprofesor">{/*preguntas profesor*/}<br></br>
              <div className="m4">
                <label>
                  Telefono
                </label>
                <input
                  type="text"
                  name="nameprofesor"
                  className="form-control"
                  id="telefonoprofesor"
                  placeholder="Telefono"
                  required
                />  
              </div>
              <div className="m4">
                <label>
                  Especialidad
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="especialidadprofesor"
                  placeholder="Especialidad"
                  required
                />
              </div>
              <div className="m4">
                <label>
                  Fecha de nacimiento
                </label>
                <input type="date" id="start" name="trip-start"
                  value="2018-07-22"
                  min="2010-01-01" max="2022-12-31">
                  </input>
              </div>
            </div>



            <div className="preguntassecretaria">{/*preguntas secretaria*/}<br></br>
              <div className="m4">
                <label>
                  Telefono
                </label>
                <input
                  type="text"
                  name="namesecretaria"
                  className="form-control"
                  id="telefonosecretaria"
                  placeholder="Telefono"
                  required
                />  
              </div>
              <div className="m4">
                <label>
                  Fecha de nacimiento
                </label>
                <input type="date" id="start" name="trip-start"
                  value="2018-07-22"
                  min="2010-01-01" max="2022-12-31">
                  </input>
              </div>
            </div>

            <div className="preguntasadmin">{/*preguntas admin*/}<br></br>
              <div className="m4">
                <label>
                  Telefono
                </label>
                <input
                  type="text"
                  name="nameadmin"
                  className="form-control"
                  id="telefonaadmin"
                  placeholder="Telefono"
                  required
                />  
              </div>
              <div className="m4">
                <label>
                  Fecha de nacimiento
                </label>
                <input type="date" id="start" name="trip-start"
                  value="2018-07-22"
                  min="2010-01-01" max="2022-12-31">
                  </input>
              </div>

              <div className="m4">
                <label>
                  Direccion
                </label>
                <input
                  type="text"
                  name="direccion"
                  className="form-control"
                  id="direccion"
                  placeholder="Direccion"
                  required
                />  
              </div>
            </div>
            
    
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
            {/* cuestionario de datos alumno*/}
            
            
           </form>
         
          
          
        </div>
      </div>
      {/* <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> *
           <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> }
          <p>Colegio Matilde Salamanca</p>
        </header> */}
      {/* */}
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
      {/* <footer>
            <div class="footer_left"><p>Escuela Matilde Salamanca</p></div>
            <div class="footer_left"><p>Telefono: 9-7793-5574</p></div>
            <div class="footer_left"><p><a href="https://www.google.cl/maps/place/Matilde+Salamanca+498,+Salamanca,+Coquimbo/@-31.7818781,-70.9688848,17z/data=!3m1!4b1!4m5!3m4!1s0x9688cf99e3273923:0x135d988eb8f65621!8m2!3d-31.7818781!4d-70.9666961" target="_blank" rel="noopener noreferrer">Calle Matilde Salamanca Nro.498, Salamanca, Chile</a></p></div>
          </footer>  */}
    </div>
  );
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }
