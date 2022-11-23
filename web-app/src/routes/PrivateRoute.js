import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import routes from "./helpers/routes";

import UseAuth  from "../auth/UseAuth";


export default  function PrivateRoute({role}){

  //  const user =  {id:1 , role:'Administrador'}; // determine if authorized, from context or however you're doing it
    const  {hasRole, islogged}  =  UseAuth();
   // const  {user}  =  UseAuth();
    //console.log("rol de Usuario: "+user);
    
    console.log("rol requerido: "+role);
 

  //  if(role ){
  //   console.log("Usuario no autorizado");
  //   return(<Outlet/>);
    
  //   }
  //   if(!islogged()){  
  //     console.log("Usuario autorizado");
  //     return (<Outlet />)

      // if(role && !hasRole(role)){
      //   console.log("Usuario no autorizado");
      //   return (<Navigate to="/" />)
      //   }
      //   if(!islogged()){  
      //     console.log("Usuario autorizado");
      //     return (<Outlet />)
     
       if(role === localStorage.getItem('role')){
        console.log("Usuario autorizado");
        return (<Outlet />)
        
        }else{
          if(localStorage.getItem('role')){
            switch (localStorage.getItem('role')) {
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
          }
          console.log("Usuario no autorizado");
          return (<Navigate to={routes.home} />)
          
        }
        // if(!islogged()){  
        //   console.log("Usuario autorizado");
          
     
    
    }
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page




    // return user ? (<Outlet />) : <Navigate to="/" />;

    
   
    
