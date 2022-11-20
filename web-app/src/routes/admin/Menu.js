
import UseAuth from "../../auth/UseAuth";


export default function Menu() {

  const { setUser} = UseAuth();

  const {signOut } = UseAuth();


    return(
        <div>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Menu Principal Administrador {setUser.name}</a>
              <button className="button"  onClick={signOut}>Cerrar sesion</button>
            </div>
          </nav>
        </div>
    )
}