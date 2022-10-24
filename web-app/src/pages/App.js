import React from 'react';
import "../styles/App.css";
import { BrowserRouter, Route,Routes,Navigate } from 'react-router-dom';
import Login from "./Login";
import Menu from "./Menu";
// import Main from "./Main";
// import logo from "./images/logo.png";  Importacion del logo



function App() {

 
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Menu' element={<Menu/>}/> 
      <Route path='*' element={<Navigate replace to='/'/>}/> 
    </Routes> 
  </BrowserRouter>
    
  );
}

export default App;

