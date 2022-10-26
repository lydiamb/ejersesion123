import { Contacto } from '../../models/contacto';
import ContactosComponent from '../pure/contactos';


const ContactosLista = () => {
  
  const defaultContacto = new Contacto("Lydia","Manzanares","lydiamb12@gmail.com",false);

  return (
    <div>
    <h1>Lista de contactos</h1>
      <ContactosComponent contacto={defaultContacto}></ContactosComponent>

    </div>
    
  );
};

export default ContactosLista;

