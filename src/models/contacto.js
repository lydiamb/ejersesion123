export class Contacto{
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;

    constructor(nombre, apellido, email, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }

    setConectado(conectado){
        this.conectado = conectado;
    }

    getConectado(){
        return this.conectado;
    }

}