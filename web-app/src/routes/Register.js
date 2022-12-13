
import React from "react";
import role from "./helpers/role";
import "../styles/Register.css";
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

       }),
     });
     const data = await response.json()
     alert("Usuario registrado con éxito");
     console.log(data);
     document.getElementById("register-form").reset();  //Reinciando el formulario

    
   }

  
   function verificar(){//verifica lo que se selecciona en el form select

  

    
   if(document.getElementById('TipoUsuario').value==='apoderado'){//apoderado
    document.getElementsByClassName('register-page')[0].style.height='600px';
    // document.getElementsByClassName('footer')[0].style.background-color:'rgba(255, 255, 255, .75)';
    document.getElementsByClassName('preguntasalumnos')[0].style.display = 'block';
 
   }else if(document.getElementById('TipoUsuario').value !=='apoderado'){
    document.getElementsByClassName('preguntasalumnos')[0].style.display = 'none';

   }

   if(document.getElementById('TipoUsuario').value==='profesor'){//profesor
    document.getElementsByClassName('register-page')[0].style.height='600px';//AGRANDA EL LOGIN
    document.getElementsByClassName('preguntasprofesor')[0].style.display = 'block';
   }else if(document.getElementById('TipoUsuario').value !=='profesor'){

    document.getElementsByClassName('preguntasprofesor')[0].style.display = 'none';
   }
    
   if(document.getElementById('TipoUsuario').value==='secretaria'){//secretaria
    document.getElementsByClassName('register-page')[0].style.height='500px';//AGRANDA EL LOGIN
    document.getElementsByClassName('preguntassecretaria')[0].style.display = 'block';
   }else if(document.getElementById('TipoUsuario').value !=='secretaria'){
   
    document.getElementsByClassName('preguntassecretaria')[0].style.display = 'none';
   }

   if(document.getElementById('TipoUsuario').value==='admin'){//admin
    document.getElementsByClassName('register-page')[0].style.height='600px';//AGRANDA EL LOGIN
    document.getElementsByClassName('preguntasadmin')[0].style.display = 'block';
   }else if(document.getElementById('TipoUsuario').value !=='admin'){
    
    document.getElementsByClassName('preguntasadmin')[0].style.display = 'none';
   }
    
  }



  return (
    <div className="Register">
      {/* <div  style={{ backgroundImage: `url(${background})` }}> </div> Forma de agregar fondo */}
      {/* <Main /> */}
      {/* <img src={logo} className="grande" alt="" />  */}
      {/* <nav className="navbar">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 "><img class="pequeña" src={logo} alt="" /><p>Colegio Matilde Salamanca</p></span>
          </div>
        </nav> */}
      
        <div className="register-page">
        <div className="register-box">
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
               //   required
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
             //     required
                />
              </div>
              <div className="m4">
                <label>
                  Fecha de nacimiento
                </label>
                <input type="date" name="fecha" />
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
             //     required
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
          //        required
                />
              </div>
              <div className="m4">
                <label>
                  Fecha de nacimiento
                </label>
                <input type="date" name="fecha2" />
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
        //          required
                />  
              </div>
              <div className="m4">
                <label>
                  Fecha de nacimiento
                </label>
                <input type="date" name="fecha3" />
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
         //         required
                />  
              </div>
              <div className="m4">
                <label>
                  Fecha de nacimiento
                </label>
                <input type="date" name="fecha4" />
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
        //          required
                />  
              </div>
            </div>
            
    
            <button type="submit" className="btn btn-primary">
              Registrar
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
