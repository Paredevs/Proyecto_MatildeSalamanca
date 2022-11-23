import React from 'react';
import "../styles/App.css";
import { BrowserRouter, Route,Routes,Navigate } from 'react-router-dom';
import Login from "./Login";
// import Menu from "./Menu";
import Profe from "./Profe";
import Secre from './Secre';
import Apoderado from './Apoderado';
import NuevaAnotacion from './profesor/NuevaAnotacion';
import ListaAnotaciones from './profesor/ListaAnotaciones';
import NuevaNota from './profesor/NuevaNota';
import NuevaAsistencia from './profesor/NuevaAsistencia';
import Register from './Register';
import UsersPage from './admin/UsersPage';
import PrivateRoute from './PrivateRoute';
import role from './helpers/role';
import routes from './helpers/routes';
import MenuAdministrador from "./admin/Menu";  
import HomePage from './HomePage';
import UseAuth from "../auth/UseAuth";



// import logo from "./images/logo.png";  Importacion del logo



function App() {

      
 
 
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path={routes.home} element={<HomePage/>}/>
      <Route path={routes.login} element={<Login/>}/>
      <Route path={routes.register} element={<Register/>}/>
    
      <Route  exact path={routes.profesor.menu} element={<PrivateRoute role={role.profesor} />}>
            <Route exact path={routes.profesor.menu} element={<Profe/>}/>
      </Route>
     
      <Route exact path={routes.secretaria} element={<PrivateRoute role={role.secretaria}/>}>
            <Route exact path={routes.secretaria} element={<Secre/>}/>
      </Route>
      <Route exact path={routes.apoderado} element={<PrivateRoute role={role.apoderado}/>}>
            <Route exact path={routes.apoderado} element={<Apoderado/>}/>
      </Route>

      <Route  exact path={routes.admin.menu} element={<PrivateRoute role={role.admin}/>}>
            <Route exact path={routes.admin.menu} element={<MenuAdministrador/>}/>
      </Route>

      <Route  exact path={routes.admin.usuarios} element={<PrivateRoute role={role.admin}/>}>
            <Route exact path={routes.admin.usuarios} element={<UsersPage/>}/>
      </Route>
      <Route  exact path={routes.profesor.anotacion_nueva} element={<PrivateRoute role={role.profesor}/>}>
            <Route exact path={routes.profesor.anotacion_nueva} element={<NuevaAnotacion/>}/>
      </Route>
      <Route exact path={routes.profesor.anotacion_lista} element={<PrivateRoute role={role.profesor}/>}>
            <Route exact path={routes.profesor.anotacion_lista} element={<ListaAnotaciones/>}/>
      </Route>

      <Route exact path={routes.profesor.nota_nueva} element={<PrivateRoute role={role.profesor}/>}>
            <Route exact path={routes.profesor.nota_nueva} element={<NuevaNota/>}/>
      </Route>

      <Route exact path={routes.profesor.ingresar_asistencia} element={<PrivateRoute role={role.profesor}/>}>
            <Route exact path={routes.profesor.ingresar_asistencia} element={<NuevaAsistencia/>}/>
      </Route>


     
      {/* 
      <Route path='/profesor' element={<Profe/>}/>
      <Route path='/secretaria' element={<Secre/>}/>
      <Route path='/apoderado' element={<Apoderado/>}/> 
      <Route path='/admin/usuarios' element={<UsersPage/>}/>     Backup de la ruta de usuarios sin privacidad
      <Route path='/profesor/anotacion' element={<Create/>}/>
      <Route path='/profesor/anotacion/lista' element={<ListaAnotaciones/>}/> */}
  
      <Route path='*' element={<Navigate replace to='/'/>}/> 
    </Routes> 
  </BrowserRouter>

    
  );
}




export default App;

