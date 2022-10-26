import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto';

const ContactosComponent = ({ contacto }) => {

    const cambiarEstado = (conectado) => {
        console.log("TODO Cambiar estado");
        contacto.conectado = true
      }

    return (
        <div>
          <h2>Nombre : { contacto.nombre }</h2>  
          <h2>Apellido : { contacto.apellido }</h2>
          <h2>Email: { contacto.email }</h2>
          <h2>Conectado: {
            contacto.conectado ? 'Contacto en linea'
                            : 'Contacto no disponible' }
            </h2>
            <div>
                <button onClick={cambiarEstado}>Cambiar estado</button>
            </div>
        </div>
        
    );

};

ContactosComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactosComponent;