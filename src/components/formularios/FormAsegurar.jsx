import React, { useState } from 'react';
import './formasegurar.scss';
import { InputFloat } from '../inputs/Inputs';
import { InputRadio, InputSubmit } from '../inputs/Inputs';
import { Link } from 'react-router-dom';

const FormAsegurar = (props) => {
    const [correo, setCorreo] = useState('');

    let abled = true;
    correo ?  abled = false : abled= true;

    const usuarioLog = {'correo': correo, ...props.datos};
    return (
        <form action="" className="form">
            <p className="form__p">Datos del titular</p>
            <InputFloat type={'text'} name={props.datos.dni} state={true} />
            <InputFloat type={'email'} name={"Correo"} setData={setCorreo}/>
            <p className="form__question">¿VAS A ASEGURARTE A TI?</p>
            <InputRadio id={'no'} value={'No'} name={<span>No</span>}/>
            <InputRadio id={'si'} value={'Si'} name={<span>Sí</span>}/>
            <InputSubmit state={abled} value={'CONTINUAR'} arrow={true} route={{pathname: '/pasodos/', state: {info: usuarioLog}}}/>
            <Link to="/" className="form__modificar"><p>Modificar DNI</p></Link>
        </form>
        
    )
}

export default FormAsegurar;