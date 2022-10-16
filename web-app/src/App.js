import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 "><img class="pequeña" src={logo} alt="" /><p>Colegio Matilde Salamanca</p></span>
        </div>
      </nav>
      <div className="login">
        <div className="login-box">
          <div className="login-boxa">
          <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              RUT
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Tu correo no se compartira con nadie.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Mantener sesion iniciada
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Iniciar sesion
          </button>
          </form>
          </div>
        
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
      <body>
        {/* <img src="../public/logo.png" className="App-logo" alt="logo" /> */}
        
      </body>
    </div>
  );
}

export default App;
