import '../styles/frontpage.css';
import routes from './helpers/routes';
function HomePage(){

    return(


<div>
<nav className="navbar navbar-expand-lg bg-light bg-primary" >
  <div className="container-fluid">
    <a className="navbar-brand">Colegio Matilde Salamanca</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
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
          <a className="nav-link active" href="#" aria-current="page" >Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href={routes.login} aria-current="page" >Iniciar sesion</a>
        </li>

      </ul>
    </div>
  </div>
    </nav>


<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://rduranv.files.wordpress.com/2022/11/305666961_528559815936341_4019014595779655191_n-2.jpg" className="h-100 w-100" alt=""></img>
    </div>
    <div className="carousel-item">
      <img src="https://rduranv.files.wordpress.com/2022/11/297424322_495977129194610_916890612424617393_n-2.jpg" className="h-100 w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://rduranv.files.wordpress.com/2022/11/306954229_527518009373855_6335908521820604250_n-2.jpg?w=1024" className="h-100 w-100" alt="..."></img>
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

<footer>
<div className="text-center"><p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
    <path  fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
    </svg> Escuela Matilde Salamanca</p>
</div>
<div className="text-center"><p>   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
    </svg> 9 7793 5574</p>
</div>
<div className="text-center"><p> <a href="https://www.google.cl/maps/place/Matilde+Salamanca+498,+Salamanca,+Coquimbo/@-31.7818781,-70.9688848,17z/data=!3m1!4b1!4m5!3m4!1s0x9688cf99e3273923:0x135d988eb8f65621!8m2!3d-31.7818781!4d-70.9666961" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-map" viewBox="0 0 16 16">
    <path  fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
    <path  fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
    </svg> Calle Matilde Salamanca Nro.498, Salamanca, Chile</a></p>
</div>
</footer> 
</div>
    );
}

export default HomePage;

