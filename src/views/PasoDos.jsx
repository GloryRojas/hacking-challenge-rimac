import React from 'react';
import HolaCliente from '../components/HolaCliente';
import { Asegurados } from '../components/Asegurados';

const PasoDos = () => {
    return(
        <>
            <HolaCliente 
                pagina={'2'}
                inicio={'Tus'}
                name={"asegurados"}
                textoinicio={'Preséntanos a quién vamos a proteger.'}
            />
            <Asegurados />
        </>
    )
}

export default PasoDos;