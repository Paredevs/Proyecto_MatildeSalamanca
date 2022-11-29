import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import routes from "./helpers/routes";
import role from "./helpers/role";
import UseAuth  from "../auth/UseAuth";


export default  function PrivateRoute({role: roleRequerided}){

  //  const user =  {id:1 , role:'Administrador'}; // determine if authorized, from context or however you're doing it
    const  {hasRole, islogged}  =  UseAuth();
   // const  {user}  =  UseAuth();
    //console.log("rol de Usuario: "+user);
    
    console.log("rol requerido: "+roleRequerided);
 

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
     
       if(roleRequerided === localStorage.getItem('role')){
        console.log("Usuario autorizado");
        return (<Outlet />)
        
        }else{
          if(localStorage.getItem('role')){
            console.log("No tiene permisos, pero esta logueado, rol: "+localStorage.getItem('role'));
            switch (localStorage.getItem('role')) {
              case role.admin:
                <div  className="btn btn-primary"  id="liveAlertBtn">No tienes autorizacion</div>
                return (<Navigate to={routes.admin.menu} />)
              case role.profesor:
                return (<Navigate to={routes.profesor.menu} />)
              case role.secretaria:
               
                return (<Navigate to={routes.secretaria} />)
              case role.apoderado:
                return (<Navigate to={routes.apoderado} />)
              default:
                return (<Navigate to={routes.home} />)
            }
          }
       //   console.log("Usuario no autorizado");
        //  return (<Navigate to={routes.home} />)
          
        }
        // if(!islogged()){  
        //   console.log("Usuario autorizado");
          
     
    
    }
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page




    // return user ? (<Outlet />) : <Navigate to="/" />;

    
   
    
