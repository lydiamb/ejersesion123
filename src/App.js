import logo from './logo.svg';
import './App.css';
import ContactosLista from './components/containers/contactos_lista';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ContactosLista></ContactosLista>
      </header>
    </div>
  );
}

export default App;
