import React from 'react';
import HolaCliente from '../components/utils/HolaCliente';
import Planes from '../components/utils/Planes';
import FormPagar from '../components/formularios/FormPagar';

const PasoTres = () => {
    return (
        <>
            <HolaCliente 
                pagina={'3'}
                inicio={'Elige el'}
                name={'pago ideal'}
                textoinicio={'Decide entre 12 pagos mensuales o solo una cuota al año.'}
            />
            <Planes />
            <FormPagar />
        </>
    )
};

export default PasoTres;