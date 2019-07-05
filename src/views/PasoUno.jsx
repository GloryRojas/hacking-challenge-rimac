import React from 'react';
import HolaCliente from '../components/HolaCliente';
import FormAsegurar from '../components/FormAsegurar';

const PasoUno = () => {
    return (
        <>
            <HolaCliente 
                pagina={'1'}
                inicio={'Hola'}
                name={"Eva,"}
                final={'cuéntanos sobre ti'}
                textoinicio={'Puedes protegerlos'}
                negrita={'por solo S/20 al mes'}
                textofinal={' por asegurado'}
            />
            <FormAsegurar />
        </>
    )
};

export default PasoUno;