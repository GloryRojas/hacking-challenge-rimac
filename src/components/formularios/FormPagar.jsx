import React, { useState } from 'react';
import './formpagar.scss';
import { InputSubmit, InputCheck } from '../inputs/Inputs';
import { Asegurado } from '../utils/Asegurados';

const FormPagar = () => {
    const[mostrar, setMostrar] = useState(false)
    return (
        <div className="formpagar">
            { mostrar ? <div>
                <Asegurado />
                <i className="fas fa-check formpagar__icon"></i><p className="formpagar__felicidad">¡Genial! tienes 20% dscto extra.</p>
            </div> : ''}
            { !mostrar ? 
            <div>
                <input type="text" className="formpagar__dscto" id="codigo" />
                <label htmlFor="codigo" className="formpagar__label">Ingresar código de dscto.</label>
                <button className="formpagar__button" onClick={()=>setMostrar(!mostrar)}>APLICAR</button>
            </div> : ''}
            <form action="" className="">
                <p className="formpagar__datos">Ahora ingresa los datos de tu tarjeta</p>
                <input type="text" className="formpagar__normal" id="nombre"/>
                <label htmlFor="nombre" className="formpagar__label">Nombre del Titular</label>
                <input type="number" className="formpagar__normal" id="numero"/>
                <label htmlFor="numero" className="formpagar__label">Número de la Tarjeta</label>
                <input type="number" className="formpagar__medio" id="fecha"/>
                <label htmlFor="fecha" className="formpagar__label">Fecha venc.</label>
                <input type="password" className="formpagar__medio" id="cvv"/>
                <label htmlFor="cvv" className="formpagar__label"></label>
                <input type="text" className="formpagar__normal" id="correo"/>
                <label htmlFor="correo" className="formpagar__label">Correo electrónico</label>
                <InputCheck 
                    id={'cargo'}
                    name={<span>Autorizo el cargo de mi cuota a la tarjeta registrada como cargo recurrente.</span>}
                />
                <InputCheck
                    id={'politica'}
                    name={<span>Acepto las <u>politicas de envío de la póliza electrónica.</u></span>}
                />
                <InputSubmit value={"PAGAR S/40"} arrow={true}/>
            </form>
        </div>
    )
}

export default FormPagar;