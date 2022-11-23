import { createContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import role from "../routes/helpers/role";
import routes from "../routes/helpers/routes";
export const AuthContext  = createContext();

export default function AuthProvider({children}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("error");
 
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        role: "",
    });   //Se inicializa el estado del usuario en null
    

    

    const login = (role) => setUser(role);
    const logout = () => {
        localStorage.clear();
        setUser(null);
        Navigate(routes.home);
    };
    
   //const [user, setUser] = useState(null); 
   
    const islogged = () => !!user; //Si el usuario esta logueado, se puede acceder a las rutas privadas
    const hasRole = (role) => user?.role === role;   //Si el usuario tiene el rol requerido, se puede acceder a las rutas privadas

    //for testing  purposes

    const getUser = async () => {
    const usr = user;
    return usr;
    }
    

    const signIn = async () => {
        console.log("email: "+email);
        console.log("password: "+password);
        return await fetch('http://localhost:5000/api/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        }).then((res) => res.json())
          .then(data => {
            console.log(data);
            const usr = {
              name: data.name,
              email: data.email,
              role: data.role,
            }
            setUser(usr);
            // console.log(user); <-- You can't do this
            return usr // <--
          });
      }

    const signOut = async () => {
        
        setUser(null);
        window.location.href = routes.login;
        return "Se ha cerrado la sesión";
    }
    // for testing purposes


   
    const contextValue ={
        signIn,
        signOut,
        setEmail,
        setPassword,
        name,
        setName,
        setUser,
        getUser,
        logout,
    };

    
    
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>  
    )
}

