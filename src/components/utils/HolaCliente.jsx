import React from 'react';
import NavPages from './NavPages';
import './holacliente.scss';

const HolaCliente = (props) => {
   return(
        <div className="hola">
            <NavPages page={props.pagina}/>
            <p className="hola__saludo">{props.inicio} <b className="hola__saludo--nombre">{props.name}</b></p>
            <p className="hola__saludo">{props.final}</p>
            <p className="hola__mensaje">{props.textoinicio} <b>{props.negrita}</b>{props.textofinal}</p>
        </div>
   ) 
}

export default HolaCliente;