import React from "react";
import "../styles/Login.css";
import routes from "./helpers/routes";
import UseAuth from "../auth/UseAuth";
import role from "./helpers/role";
import { useState } from "react";
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
      <footer>
        <div className="text-center">
          <p className="text-footer">
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
            </svg>
            Escuela Matilde Salamanca
          </p>
        </div>
        <div className="text-center">
          <p className="text-footer">
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
            </svg>
            9 7793 5574
          </p>
        </div>
        <div className="text-center">
          <p className="text-footer">
            {" "}
            <a
              href="https://www.google.cl/maps/place/Matilde+Salamanca+498,+Salamanca,+Coquimbo/@-31.7818781,-70.9688848,17z/data=!3m1!4b1!4m5!3m4!1s0x9688cf99e3273923:0x135d988eb8f65621!8m2!3d-31.7818781!4d-70.9666961"
              target="_blank"
              rel="noopener noreferrer"
            >
              
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
              </svg>
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
