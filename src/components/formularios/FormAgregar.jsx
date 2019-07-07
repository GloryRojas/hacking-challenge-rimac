import React, { useState } from 'react';
import { InputFloat, InputRadio } from '../inputs/Inputs';
import './formagregar.scss';

const FormAgregar = (props) => {
    const[dni, setDni] = useState('');
    const[nombre, setNombre] =useState('');
    const[paterno, setPaterno] = useState('');
    const[materno, setMaterno] = useState('');
    const[nacimiento, setNacimiento] = useState('');
    
    const nuevoUser = {
        dni, nombre, paterno, materno, nacimiento, "id": nacimiento
    };
    console.log(props.objUser);
    return (
            <form action="" className="formagregar">
                <p className="formagregar__datos">Datos del asegurado N°{props.objUser.length+1}</p>
                <InputFloat type={'number'} name={'Nro. de Documento'} setData={setDni}/>
                <InputFloat type={'text'} name={'Nombre'} setData={setNombre} />
                <InputFloat type={'text'} name={'Apellido Paterno'} setData={setPaterno}/>
                <InputFloat type={'text'} name={'Apellido Materno'} setData={setMaterno}/>
                <InputFloat type={'date'} name={'Fecha de Nacimiento'} setData={setNacimiento}/>
                <p className="formagregar__genero">GÉNERO</p>
                <InputRadio id={'masculino'} name={'Masculino'} value={'Masculino'} />
                <InputRadio id={'femenino'} name={'Femenino'} value={'Femenino'} />
                <button type="button" className="inputsubmit" onClick={() => props.objUser.push(nuevoUser)}>
                    GUARDAR
                    <span className="inputsubmit__arrow"><i className="fas fa-chevron-right"></i></span>
                </button>
            </form>
    )
}

export default FormAgregar;