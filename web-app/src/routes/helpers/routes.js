const routes ={
    home: "/",
    login: '/login',
    register: '/registrarse',
    
    secretaria: '/secretaria',
    apoderado: '/apoderado',
    admin: {
        menu: '/admin/',
        usuarios: '/admin/usuarios',
    },
    profesor: {
        menu: '/profesor',
        anotacion_nueva: '/profesor/anotacion/nueva',
        anotacion_lista: '/profesor/anotacion/lista',
        nota_nueva: '/profesor/nota/nueva',
        ingresar_asistencia: '/profesor/asistencia/ingresar_asistencia',
    },


};

export default routes;