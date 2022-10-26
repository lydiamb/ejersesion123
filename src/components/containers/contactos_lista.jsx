import { Contacto } from '../../models/contacto';
import ContactosComponent from '../pure/contactos';
import React, { useState } from 'react';

const ContactosLista = () => {
  
  const defaultContacto = new Contacto("Lydia","Manzanares","lydiamb12@gmail.com",false);

  const[contacto,setConectado] = useState(defaultContacto)

  function actualizarContacto(){
    setConectado(
      {
        nombre: "Lydia",
        apellido: "Manzanares",
        email: "lydiamb12@gmail.com",
        conectado: true
      }
    )
  }


  return (
    <div>
    <h1>Lista de contactos</h1>
      <ContactosComponent contacto={contacto}></ContactosComponent>
      <div>
        <button onClick={actualizarContacto}>Cambiar estado</button>
      </div>
    </div>
    
    
  );
};

export default ContactosLista;

