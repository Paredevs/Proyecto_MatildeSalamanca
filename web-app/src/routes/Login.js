import React from "react";
import "../styles/Login.css";
import routes from "./helpers/routes";
import UseAuth from "../auth/UseAuth";
import role from "./helpers/role";
// import { useState } from "react";
// import PropTypes from 'prop-types';

export default function Login() {
  // const { getUser} = UseAuth();
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   role: "",
  // });
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");  original
  // const [roleUser, setRole] = React.useState("a");

  const { signIn, setEmail, setPassword } = UseAuth();

  //const {setUser} = UseAuth();
  // const {user} = UseAuth();
  //const {logout} = UseAuth();

  //for testing purposes
  const handleSubmit = async (e) => {
    e.preventDefault();

    signIn()
      .then((usr) => {
        console.log(usr);
        console.log("user: " + usr.name);
        localStorage.setItem("name", usr.name);
        localStorage.setItem("email", usr.email);
        localStorage.setItem("role", usr.role);
        alert("Usuario logueado");

        switch (usr.role) {
          case role.admin:
            window.location.href = routes.admin.menu;
            break;
          case role.profesor:
            window.location.href = routes.profesor.menu;
            break;
          case role.secretaria:
            window.location.href = routes.secretaria;
            break;
          case role.apoderado:
            window.location.href = routes.apoderado;
            break;
          default:
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //for testing purposes

  //  async function loginUser(event) {  original code

  // //default
  //     event.preventDefault();
  //     const response = await fetch("http://localhost:5000/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     });

  //     const data = await response.json();

  //     console.log("test");

  //     const values = Object.values(data); //Obteniendo el rol del usuario
  //     console.log(values);

  //     const roleUser = values[2];
  //     console.log("El rol del usuario en la BD es: "+roleUser);
  //     //default

  //     if (data.user) {
  //       console.log(values);

  //       login(roleUser);
  //       alert("Usuario logeado");

  //       switch (roleUser) {
  //         case role.admin:
  //           window.location.href = routes.admin.menu;
  //           break;
  //         case role.profesor:
  //           window.location.href = routes.profesor.menu;
  //           break;
  //         case role.secretaria:
  //           window.location.href = routes.secretaria;
  //           break;
  //         case role.apoderado:
  //           window.location.href = routes.apoderado;
  //           break;
  //         default:
  //           break;
  //       }

  //     } else {
  //       alert("El usuario no existe, por favor revisa tu correo y contraseña");
  //     }
  //}

  return (
    <div className="Login">
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
          {/* <form onSubmit={loginUser}> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //onChange={(e) => setEmail(e.target.value)}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingrese su correo electronico"
                required
              />
              {/* <div id="emailHelp" class="form-text">
                Tu correo no se compartira con nadie.
              </div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                //  onChange={(e) => setPassword(e.target.value)}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Mantener sesion iniciada
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar sesion
            </button>
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
