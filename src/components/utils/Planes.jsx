import React, { useState } from 'react';
import './planes.scss';
import { Asegurado } from './Asegurados';
import { InputFloat } from '../inputs/Inputs';

const Planes = (props) => {
    const[mostrar, setMostrar] = useState(false);
    return (
        <>
        <div className="planes">
            <input type="radio" id="fijo" className="planes__input" name="planes"/>
            <label htmlFor="fijo" className="planes__box">
                <p className="planes__box--check">✓</p>
                <p className="planes__box--monto">MONTO FIJO</p>
                <span className="planes__box--simbolo">S/</span>
                <span className="planes__box--moneda">20</span>
                <span className="planes__box--cada">C/U</span>
                <p className="planes__box--info">por 12 meses</p>
            </label>
            <input type="radio" id='anual' className="planes__input" name="planes"/>
            <label htmlFor="anual" className="planes__box">
                <p className="planes__box--check">✓</p>
                <p className="planes__box--monto">AHORRAS S/40</p>
                <span className="planes__box--simbolo">S/</span>
                <span className="planes__box--moneda">200</span>
                <span className="planes__box--cada">C/U</span>
                <p className="planes__box--info">en un solo pago</p>
            </label>
            <div className="planes__pagar">
                <p className="planes__pagar--total">PAGO TOTAL MENSUAL</p>
                <p className="planes__pagar--asegurados">Por {props.data.asegurados.length} asegurados <span className="planes__pagar--detalle"> DETALLE</span></p>
                <p className="planes__pagar--cash"><span className="planes__pagar--cash--simbolo">S/ </span>40</p>
            </div>
            { mostrar ? 
            <div>
                <Asegurado user={props.data}/>
                <i className="fas fa-check planes__icon"></i><p className="planes__felicidad">¡Genial! tienes 20% dscto extra.</p>
            </div> : ''}
            { !mostrar ? 
            <div className="planes__descuento">
                <InputFloat type="text" name={'Ingresar código de dscto.'} id="codigo" setData={()=>console.log('descuento aplicado')}/>
                <button className="planes__descuento--button" onClick={()=>setMostrar(!mostrar)}>APLICAR</button>
            </div> : ''}
        </div>
        
        </>
    )
}

export default Planes;