import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import UseAuth  from "../auth/UseAuth";


export default  function PrivateRoute({role}){

  //  const user =  {id:1 , role:'Administrador'}; // determine if authorized, from context or however you're doing it
    const  {hasRole, islogged}  =  UseAuth();
   // const  {user}  =  UseAuth();
    //console.log("rol de Usuario: "+user);
    
    console.log("rol requerido: "+role);
 

   if(role ){
    console.log("Usuario no autorizado");
    return(<Outlet/>);
    
    }
    if(!islogged()){  
      console.log("Usuario autorizado");
      return (<Outlet />)

      // if(role && !hasRole(role)){
      //   console.log("Usuario no autorizado");
      //   return (<Navigate to="/" />)
      //   }
      //   if(!islogged()){  
      //     console.log("Usuario autorizado");
      //     return (<Outlet />)
     
     
    
    }
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page




    // return user ? (<Outlet />) : <Navigate to="/" />;

    
   
    
}
