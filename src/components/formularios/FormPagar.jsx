import React from 'react';
import './formpagar.scss';
import { InputSubmit, InputCheck } from '../inputs/Inputs';

const FormPagar = (props) => {
    return (
        <div className="formpagar">
            <form action="" className="">
                <p className="formpagar__datos">Ahora ingresa los datos de tu tarjeta</p>
                <input type="text" required className="formpagar__normal" name="nombre"/>
                <label htmlFor="nombre" className="formpagar__label">Nombre del Titular</label>
                <input type="text" required className="formpagar__normal" name="numero"/>
                <label htmlFor="numero" className="formpagar__label">Número de la Tarjeta</label>
                <input type="text" required className="formpagar__medio" name="fecha"/>
                <label htmlFor="fecha" className="formpagar__label">Fecha venc.</label>
                <input type="number" required className="formpagar__medio" name="cvv"/>
                <label htmlFor="cvv" className="formpagar__label--cvv">CVV</label>
                <input type="email" required className="formpagar__normal" name="correo"/>
                <label htmlFor="correo" className="formpagar__label">Correo electrónico</label>
                <InputCheck 
                    id={'cargo'}
                    name={<span>Autorizo el cargo de mi cuota a la tarjeta registrada como cargo recurrente.</span>}
                />
                <InputCheck
                    id={'politica'}
                    name={<span>Acepto las <u>politicas de envío de la póliza electrónica.</u></span>}
                />
                <InputSubmit value={"PAGAR S/40"} arrow={true} route={'/'}/>
            </form>
        </div>
    )
}

export default FormPagar;