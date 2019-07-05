import React from 'react';
import { InputFloat } from './Inputs';
import './formagregar.scss';
import { InputRadio } from './Inputs';

const FormAgregar = () => {
    return (
        <form action="" className="formagregar">
            <p className="formagregar__datos">Datos del asegurado N°2</p>
            <InputFloat type={'text'} name={'Nro. de Documento'} />
            <InputFloat type={'text'} name={'Nombre'} />
            <InputFloat type={'text'} name={'Apellido Paterno'} />
            <InputFloat type={'text'} name={'Apellido Materno'} />
            <InputFloat type={'date'} name={'Fecha de Nacimiento'} />
            <p className="formagregar__genero">GÉNERO</p>
            <InputRadio id={'masculino'} name={'Masculino'}/>
            <InputRadio id={'femenino'} name={'Femenino'}/>
        </form>
    )
}

export default FormAgregar;