import React, { useState } from 'react';
import './asegurados.scss';
import { InputSubmit } from '../inputs/Inputs';
import FormAgregar from '../formularios/FormAgregar';

const asegurado = [
    {
        nombre: 'Matías',
        paterno: 'Pinedo',
        materno: 'Lozano',
        dni: '76543210',
        nacimiento: '09/08/2011',
        id: '1'
    },
    {
        nombre: 'Joaquin',
        paterno: 'Pinedo',
        materno: 'Lozano',
        dni: '76543210',
        nacimiento: '19/08/2011',
        id: '2'
    }
];

export const Asegurado = () => {
    return(
        asegurado.map(item=>{
            return(
                <div key={item.id} className="asegurados__asegurado">
                    <div className="asegurados__asegurado--datos">
                        <p className="asegurados__asegurado--datos--nombre">{item.nombre} {item.paterno}</p>
                        <p  className="asegurados__asegurado--datos--dni">DNI {item.dni} - F.N {item.nacimiento}</p>
                    </div>
                    <div className="asegurados__asegurado--opciones">
                        <i className="fas fa-pen asegurados__asegurado--opciones--icon"></i>
                        <i className="far fa-trash-alt asegurados__asegurado--opciones--icon"></i>
                    </div>
                </div>
            )
        })
    )
}
 
export const Asegurados = () => {
    const[mostrarTodos, setMostrarTodos] = useState(true);
    const[todos, setTodos] = useState(false);
    const[mostrarForm, setMostrarForm] = useState(false);

    return(
        <>
        <div className="asegurados">
            <div className="asegurados__p">
                <p className="asegurados__p--asegurados">ASEGURADOS (01)</p>
                { !mostrarTodos ? <button className="asegurados__p--ver" onClick={()=>setMostrarTodos(!mostrarTodos)}>VER TODOS</button> : ""} 
            </div>
            { mostrarTodos ? <Asegurado /> : ""}
        </div>
        <div className="opcion">
            { !mostrarForm ? 
            <div>
                <span className="opcion__mas">+</span>
                <button className="opcion__asegurar" onClick={()=> setTodos(!todos) & setMostrarForm(!mostrarForm) & setMostrarTodos(!mostrarTodos)}>Quiero asegurar a alguien más</button>
            </div>
            : '' }
            { mostrarForm ? <FormAgregar /> : ''}
            { !mostrarForm ? <InputSubmit value={'GUARDAR'} arrow={true} route={'/pasotres/'}/> : ''}
            <p className="opcion__cancelar" onClick={()=>setMostrarForm(!mostrarForm) & setMostrarTodos(true)}>Cancelar</p>
        </div>
        </>
    )
}

