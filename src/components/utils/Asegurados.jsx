import React, { useState } from 'react';
import './asegurados.scss';
import { InputSubmit } from '../inputs/Inputs';
import FormAgregar from '../formularios/FormAgregar';

export const Asegurado = (props) => {
    const[user, setUser] = useState(props.user)

    const filterUser = ( id ) => {
       return setUser(user.asegurados.filter(a => a !== user.asegurados.find(e => e.id === id )));
    }

    console.log(user)

    return(
        user.asegurados.map(item=>{
            return(
                <div key={item.id} className="asegurados__asegurado">
                    <div className="asegurados__asegurado--datos">
                        <p className="asegurados__asegurado--datos--nombre">{item.nombre} {item.paterno}</p>
                        <p  className="asegurados__asegurado--datos--dni">DNI {item.dni} - F.N {item.nacimiento}</p>
                    </div>
                    <div className="asegurados__asegurado--opciones">
                        <i className="fas fa-pen asegurados__asegurado--opciones--icon" ></i>
                        <i className="far fa-trash-alt asegurados__asegurado--opciones--icon" onClick={() => filterUser(item.id)}></i>
                    </div>
                </div>
            )
        })
    )
}
 
export const Asegurados = (props) => {
    const[mostrarTodos, setMostrarTodos] = useState(true);
    const[todos, setTodos] = useState(false);
    const[mostrarForm, setMostrarForm] = useState(false);

    const datos = props.data;
    return(
        <>
        <div className="asegurados">
            <div className="asegurados__p">
                <p className="asegurados__p--asegurados">ASEGURADOS (0{datos.asegurados.length})</p>
                { !mostrarTodos ? <button className="asegurados__p--ver" onClick={()=>setMostrarTodos(!mostrarTodos)}>VER TODOS</button> : ""} 
            </div>
            { mostrarTodos ? <Asegurado user={datos}/> : ""}
        </div>
        <div className="opcion">
            { !mostrarForm ? 
            <div>
                <span className="opcion__mas">+</span>
                <button className="opcion__asegurar" onClick={()=> setTodos(!todos) & setMostrarForm(!mostrarForm) & setMostrarTodos(!mostrarTodos)}>Quiero asegurar a alguien más</button>
            </div>
            : '' }
            { mostrarForm ? <FormAgregar objUser={datos}/> : ''}
            { !mostrarForm ? <InputSubmit value={'GUARDAR'} arrow={true} route={'/pasotres/'}/> : ''}
            <p className="opcion__cancelar" onClick={()=>setMostrarForm(!mostrarForm) & setMostrarTodos(true)}>Cancelar</p>
        </div>
        </>
    )
}

