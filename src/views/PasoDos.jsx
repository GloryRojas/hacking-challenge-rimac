import React from 'react';
import HolaCliente from '../components/utils/HolaCliente';
import { Asegurados } from '../components/utils/Asegurados';

const PasoDos = (props) => {
    const usuarioLog = props.location.state.info;

    console.log(usuarioLog);

    return(
        <>
            <HolaCliente 
                pagina={'2'}
                inicio={'Tus'}
                name={"asegurados"}
                textoinicio={'Preséntanos a quién vamos a proteger.'}
            />
            <Asegurados data={usuarioLog}/>
        </>
    )
}

export default PasoDos;