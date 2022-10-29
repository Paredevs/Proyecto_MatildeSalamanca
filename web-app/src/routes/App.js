import React from 'react';
import "../styles/App.css";
import { BrowserRouter, Route,Routes,Navigate } from 'react-router-dom';
import Login from "./Login";
import Menu from "./Menu";
import Profe from "./Profe";
import Secre from './Secre';
import Apoderado from './Apoderado';

// import Main from "./Main";
// import logo from "./images/logo.png";  Importacion del logo



function App() {

 
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Menu' element={<Menu/>}/> 
      <Route path='/Profe' element={<Profe/>}/> 
      <Route path='/Secre' element={<Secre/>}/>
      <Route path='/Apoderado' element={<Apoderado/>}/>
      <Route path='*' element={<Navigate replace to='/'/>}/> 
    </Routes> 
  </BrowserRouter>
    
  );
}

export default App;

