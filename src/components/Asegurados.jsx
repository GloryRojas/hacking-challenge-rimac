import React, { useState } from 'react';
import './asegurados.scss';
import { InputSubmit } from './Inputs';
import FormAgregar from './FormAgregar';

const asegurado = [
    {
        nombre: 'Matías',
        paterno: 'Pinedo',
        materno: 'Lozano',
        dni: '76543210',
        nacimiento: '09/08/2011',
        id: '1'
    }
];

export const Asegurados = () => {
    const[mostrarTodos, setMostrarTodos] = useState(true);
    const[todos, setTodos] = useState(false);
    const[mostrarForm, setMostrarForm] = useState(false);

    return(
        <>
        <div className="asegurados">
            <div className="asegurados__p">
                <p className="asegurados__p--asegurados">ASEGURADOS (01)</p>
                {todos ? <button className="asegurados__p--ver" onClick={()=>setMostrarTodos(!mostrarTodos)}>VER TODOS</button> : ""} 
            </div>
            { mostrarTodos ? asegurado.map(item=>{
                return(
                    <div className="asegurados__asegurado">
                        <div className="asegurados__asegurado--datos">
                            <p className="asegurados__asegurado--datos--nombre">{item.nombre} {item.paterno}</p>
                            <p  className="asegurados__asegurado--datos--dni">DNI {item.dni} - F.N {item.nacimiento}</p>
                        </div>
                        <div className="asegurados__asegurado--opciones">
                            <i class="fas fa-pen asegurados__asegurado--opciones--icon"></i>
                            <i class="far fa-trash-alt asegurados__asegurado--opciones--icon"></i>
                        </div>
                    </div>
                )
            }) : ""}
        </div>
        <div className="opcion">
            <span className="opcion__mas">+</span>
            <p className="opcion__asegurar" onClick={()=> setTodos(!todos) & setMostrarForm(!mostrarForm) & setMostrarTodos(!mostrarTodos)}>Quiero asegurar a alguien más</p>
            { mostrarForm ? <FormAgregar /> : ''}
            <InputSubmit value={'GUARDAR'}/>
            <p className="opcion__cancelar">Cancelar</p>
        </div>
        </>
    )
}

