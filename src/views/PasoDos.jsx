import React from 'react';
import HolaCliente from '../components/utils/HolaCliente';
import { Asegurados } from '../components/utils/Asegurados';

const PasoDos = (props) => {
    const usuarioLog = props.location.state.info;
    const usuario = usuarioLog.asegurados;
    console.log(usuario)

    return(
        <>
            <HolaCliente 
                pagina={'2'}
                inicio={'Tus'}
                name={"asegurados"}
                textoinicio={'Preséntanos a quién vamos a proteger.'}
            />
            <Asegurados data={usuario}/>
        </>
    )
}

export default PasoDos;