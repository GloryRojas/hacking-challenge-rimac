import React from 'react';
import HolaCliente from '../components/utils/HolaCliente';
import Planes from '../components/utils/Planes';
import FormPagar from '../components/formularios/FormPagar';

const PasoTres = (props) => {
    const usuarioLog = props.location.state.info;
    console.log(usuarioLog);
    return (
        <>
            <HolaCliente 
                pagina={'3'}
                inicio={'Elige el'}
                name={'pago ideal'}
                textoinicio={'Decide entre 12 pagos mensuales o solo una cuota al año.'}
            />
            <Planes data={usuarioLog}/>
            <FormPagar datos={usuarioLog}/>
        </>
    )
};

export default PasoTres;