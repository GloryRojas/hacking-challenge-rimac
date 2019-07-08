import React from 'react';
import HolaCliente from '../components/utils/HolaCliente';
import { Asegurados } from '../components/utils/Asegurados';
import Desktop from '../components/utils/Desktop';

const PasoDos = (props) => {
    const usuarioLog = props.location.state.info;
    return(
        <>
            <Desktop />
            <div className="container">
                <HolaCliente 
                    pagina={'2'}
                    inicio={'Tus'}
                    name={"asegurados"}
                    textoinicio={'Preséntanos a quién vamos a proteger.'}
                />
                <Asegurados data={usuarioLog}/>
            </div>
            
        </>
    )
}

export default PasoDos;