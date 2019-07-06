import React from 'react';
import './formasegurar.scss';
import { InputFloat } from '../inputs/Inputs';
import { InputRadio, InputSubmit } from '../inputs/Inputs';
import { Link } from 'react-router-dom';

const FormAsegurar = () => {
    return (
        <form action="" className="form">
            <p className="form__p">Datos del titular</p>
            <InputFloat type={'text'} name={"Nro. de Documento"}/>
            <InputFloat type={'text'} name={"Correo"}/>
            <p className="form__question">¿VAS A ASEGURARTE A TI?</p>
            <InputRadio id={'no'} name={<span>No</span>}/>
            <InputRadio id={'si'} name={<span>Sí</span>}/>
            <InputSubmit value={'CONTINUAR'} arrow={true} route={'/pasodos/'}/>
            <Link to="/" className="form__modificar"><p>Modificar DNI</p></Link>
        </form>
    )
}

export default FormAsegurar;