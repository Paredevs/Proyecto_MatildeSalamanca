import { createContext } from "react";
import { useState } from "react";
import role from "../routes/helpers/role";

export const AuthContext  = createContext();

export default function AuthProvider({children}) {
    
    const [user, setUser] = useState({id:1 , role:role.profesor});   //Si el usuario esta logueado, se puede acceder a las rutas privadas

    // const islogged = user ? true : false;
    // const hasRole = (role) => user?.role === role;   //Si el usuario tiene el rol requerido, se puede acceder a las rutas privadas


    const contextValue ={
        user,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>  
    )
}

