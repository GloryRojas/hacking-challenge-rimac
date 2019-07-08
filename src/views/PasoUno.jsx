import React from 'react';
import HolaCliente from '../components/utils/HolaCliente';
import FormAsegurar from '../components/formularios/FormAsegurar';
import Desktop from '../components/utils/Desktop';

const PasoUno = (props) => {

    const logeado = props.location.state.info;
    return (
        <>
            <Desktop />
            <div className="container">
                <HolaCliente 
                    pagina={'1'}
                    inicio={'Hola'}
                    name={logeado.nombre +','}
                    final={'cuéntanos sobre ti'}
                    textoinicio={'Puedes protegerlos'}
                    negrita={'por solo S/20 al mes'}
                    textofinal={' por asegurado'}
                />
                <FormAsegurar datos={logeado}/>
            </div>
            
        </>
    )
};

export default PasoUno;
