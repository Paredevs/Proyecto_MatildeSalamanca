import "../styles/Menu.css";

export default function Menu(){
    return(
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Menu Profesor escuela Matilde Salamanca</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Alumno</a>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li> */}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Alumnos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Asistencia</a></li>
            <li><a class="dropdown-item" href="/">Notas</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Anotaciones</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  aria-current="page" href="/">Cerrar sesion</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar Alumno" aria-label="Busqueda"/>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    );
}

