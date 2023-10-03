import './App.css';
import LogoApp from './imagenes/LogoApp.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img 
        src={LogoApp} 
        className='react-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
            <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
