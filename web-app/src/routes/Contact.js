export default function Contact(){
    return(
        <section class="mb-4">
        
           
            <h2 class="h1-responsive font-weight-bold text-center my-4">Contáctanos</h2>
           
            <p class="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? Por favor, no dude en contactarnos directamente. Nuestra escuela le respondera los mas rápido posible para ayudarte.</p>
        
            <div class="row">
        
            
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
        
                        
                        <div class="row">
        
                            
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control"/>
                                    <label for="name" class="">Tu nombre</label>
                                </div>
                            </div>
                    
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control"/>
                                    <label for="email" class="">Tu correo electronico</label>
                                </div>
                            </div>
                            
        
                        </div>
                      
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control"/>
                                    <label for="subject" class="">Asunto</label>
                                </div>
                            </div>
                        </div>
                        
        
                        
                        <div class="row">
        
                        
                            <div class="col-md-12">
        
                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">Tu mensaje</label>
                                </div>
        
                            </div>
                        </div>
                        
        
                    </form>
        
                    <div class="text-center text-md-left">
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Enviar</a>
                    </div>
                    <div class="status"></div>
                </div>
                
                <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p>Calle Matilde Salamanca Nro.498, Salamanca, Chile</p>
                        </li>
        
                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p> 9 7793 5574</p>
                        </li>
        
                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p>contacto@matildesalamanca.com</p>
                        </li>
                    </ul>
                </div>
                
        
            </div>
        
        </section>
        )
} 