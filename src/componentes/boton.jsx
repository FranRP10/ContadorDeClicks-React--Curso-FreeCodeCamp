import React from "react";
import '../hojas-de-estilo/Boton.css';


function Boton({ texto, esBotonDeClick, manejarClick }){
  return(
    <button className={ esBotonDeClick ? 'Boton-click' : 'Boton-reiniciar'}
            onClick={manejarClick}>
      {texto}
    </button>
  )
}

export default Boton;