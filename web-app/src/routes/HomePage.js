import '../styles/Homepage.css';
import routes from './helpers/routes';
import logo from '../images/logo.png';
function HomePage(){

    return(



<div className="homepage-class">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Raleway"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <nav className="navbar navbar-expand-lg" >
    <div className="container-fluid">
      <span className="navbar-brand "><img className='pequeña' src={logo} alt=""/> Escuela Matilde Salamanca</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page" >Admision</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page" >Calendario de Actividades</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Acerca de nosotros
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Nuestra Historia</a></li>
                <li><a className="dropdown-item" href="#">Mision y Vision</a></li>
                <li><a className="dropdown-item" href="#">Himno </a></li>
              </ul>
          </li>
            <li className="nav-item">
              <a className="nav-link active" href={routes.contact} aria-current="page" >Contáctenos</a>
            </li>
           
        </ul>

        <ul class="nav navbar-nav ml-auto">
        <li className="nav-item">
              <a className="nav-link active" href={routes.login} aria-current="page" > <i class="fa fa-sign-in"></i><b style={{textShadow: '0px 2px 4px rgba(150, 150, 150, 0.91)'}}> Iniciar sesion</b></a>
            </li>
          <a href="https://www.facebook.com/escuelamatilde/" class="nav-link"><i class="fa fa-facebook fa-lg"></i></a>
          <a href="https://www.instagram.com/escuelamatildesalamanca/?hl=es" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a>    
        </ul>
        
      </div>
    </div>
    </nav>


<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <img classname="img-homepage"src="https://rduranv.files.wordpress.com/2022/11/305666961_528559815936341_4019014595779655191_n-2.jpg" className="h-100 w-100" alt=""></img> */}
      <img className="img-homepage" src="https://rduranv.files.wordpress.com/2022/11/305666961_528559815936341_4019014595779655191_n-2.jpg" alt=""></img>
    </div>
    <div className="carousel-item">
      {/* <img classname="img-homepage" src="https://rduranv.files.wordpress.com/2022/11/297424322_495977129194610_916890612424617393_n-2.jpg" className="h-100 w-100" alt="..."></img> */}
      <img className="img-homepage" src="https://rduranv.files.wordpress.com/2022/11/297424322_495977129194610_916890612424617393_n-2.jpg"  alt="..."></img>
    </div>
    <div className="carousel-item">
      {/* <img src="https://rduranv.files.wordpress.com/2022/11/306954229_527518009373855_6335908521820604250_n-2.jpg?w=1024" className="h-100 w-100" alt="..."></img> */}
      <img className="img-homepage" src="https://rduranv.files.wordpress.com/2022/11/306954229_527518009373855_6335908521820604250_n-2.jpg?w=1024"  alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>






        {/*<div className="container">
  
        <ul className="slider">
          <li id="slide1">
            <img src="https://scontent.fscl13-2.fna.fbcdn.net/v/t39.30808-6/269904798_336096841849307_4510412256177713386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFr3mKVVVDflZ26GnECBw_G_JrPBvSHhrr8ms8G9IeGugBiBgq6S3z0mPm3rS2PYVu-aX4uD315Vh7af5fq01NC&_nc_ohc=uN6QgAFfySAAX8kunh7&_nc_zt=23&_nc_ht=scontent.fscl13-2.fna&oh=00_AfB4m6Z2uC0GJFlzAv2qUXqk8m6YNDBkSrDhqx_-htC0VA&oe=637B6924"/>
          </li>
          <li id="slide2">
            <img src="https://scontent.fscl13-2.fna.fbcdn.net/v/t39.30808-6/306954229_527518009373855_6335908521820604250_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHhMvaOZEehFuSPkLJp_WnEclTDfzfKGs1yVMN_N8oazUQoSjTg8mIyY2hrH12fdE6nw13qe8Lu2qEnTPydJHj7&_nc_ohc=8TPVis4mjfIAX-mAtTp&_nc_zt=23&_nc_ht=scontent.fscl13-2.fna&oh=00_AfDhtGU6eNOivyh-5Z7Xm9ZUjFZrVkJgj5EHuWfFLtAMfg&oe=637B2CD0"/>
          </li>
          <li id="slide3">
            <img src="https://www.diariopopular.cl/wp-content/uploads/2020/05/100939221_1621292754684403_6244324403283230720_n.jpg"/>
          </li>
        </ul>
        
        <ul className="menu">
        
          <li>
           
            <a className="btn btn-primary" href="#slide1">1</a>
          </li>
          <li>
            <a className="btn btn-primary" href="#slide2">2</a>
          </li>
           <li>
            <a className="btn btn-primary" href="#slide3">3</a>
          </li>
        </ul>
        
      </div>*/}
      


</div>
    );
}

export default HomePage;

