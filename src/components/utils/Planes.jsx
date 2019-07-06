import React from 'react';
import './planes.scss';

const Planes = () => {
    return (
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
                <p className="planes__pagar--asegurados">Por 2 asegurados <span className="planes__pagar--detalle"> DETALLE</span></p>
                <p className="planes__pagar--cash"><span className="planes__pagar--cash--simbolo">S/ </span>40</p>
            </div>
        </div>
    )
}

export default Planes;