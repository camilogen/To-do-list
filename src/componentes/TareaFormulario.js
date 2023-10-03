import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid' ;



function TareaFormulario(props){

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleEnvio = e => {
    e.preventDefault();

    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
  }



  return (
    <form className="tarea-formulario"
          onSubmit={handleEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe Una Tarea"
        name="texto"
        onChange={handleChange}
      />
      <button className="tarea-boton">
        agregar tarea 
      </button>
    </form>
  );
}

export default TareaFormulario;