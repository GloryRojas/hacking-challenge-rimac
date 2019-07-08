import React from 'react';
import HolaCliente from '../components/utils/HolaCliente';
import Planes from '../components/utils/Planes';
import FormPagar from '../components/formularios/FormPagar';
import Desktop from '../components/utils/Desktop';

const PasoTres = (props) => {
    const usuarioLog = props.location.state.info;
    console.log(usuarioLog);
    return (
        <>
            <Desktop />
            <div className="container">
                <HolaCliente 
                    pagina={'3'}
                    inicio={'Elige el'}
                    name={'pago ideal'}
                    textoinicio={'Decide entre 12 pagos mensuales o solo una cuota al año.'}
                />
                <Planes data={usuarioLog}/>
                <FormPagar datos={usuarioLog}/>
            </div>
        </>
    )
};

export default PasoTres;