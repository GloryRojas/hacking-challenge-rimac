import React, { useState } from 'react';
import './asegurados.scss';
import { InputSubmit } from '../inputs/Inputs';
import FormAgregar from '../formularios/FormAgregar';

export const Asegurado = (props) => {
    const[user, setUser] = useState(props.user.asegurados);

    const filterUser = ( id ) => {
       return user.filter(a => a !== user.find(e => e.id === id ));
    }
  
    props.user.asegurados = user;

    return(
        user.map(item=>{
            return(
                <div key={item.id} className="asegurados__asegurado">
                    <div className="asegurados__asegurado--datos">
                        <p className="asegurados__asegurado--datos--nombre">{item.nombre} {item.paterno}</p>
                        <p  className="asegurados__asegurado--datos--dni">DNI {item.dni} - F.N {item.nacimiento}</p>
                    </div>
                    <div className="asegurados__asegurado--opciones">
                        <i className="fas fa-pen asegurados__asegurado--opciones--icon" ></i>
                        <i className="far fa-trash-alt asegurados__asegurado--opciones--icon" onClick={() => setUser(filterUser(item.id))}></i>
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
            { mostrarForm ? <FormAgregar objUser={datos} mostrar={setMostrarForm} mostrarTodos={setMostrarTodos} tipo={mostrarForm}/> : ''}
            { !mostrarForm ? <InputSubmit value={'CONTINUAR'} arrow={true} route={{pathname: '/pasotres/', state: {info: datos}}}/> : ''}
            <p className="opcion__cancelar" onClick={()=>setMostrarForm(!mostrarForm) & setMostrarTodos(true)}>Cancelar</p>
        </div>
        </>
    )
}

