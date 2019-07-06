import React from 'react';
import './form-signin.scss';
import { InputFloat, InputCheck } from '../inputs/Inputs';
import { Link } from 'react-router-dom';

const FormSignIn = () => {
	return (
		<form className="formsign">
			<p className="formsign__title">Protégelos <span className="formsign__title--span">ahora</span></p>
			<p className="formsign__ingrese">Ingresa los datos del titular.</p>
			<InputFloat type={'text'} name={"Nro. de Documento"}/>
			<InputFloat type={'text'} name={"Nombre"}/>
			<InputCheck  id={'proteccion'} name={<span>Acepto la <u>Política de Protección de Datos Personales</u> y los <u>Términos y Condiciones.</u></span>}/>
			<InputCheck  id={'politica'} name={<span>Acepto la Política de Envío de <u>Comunicaciones Comerciales.</u></span>}/>
			<Link to="/pasouno/"><button className="formsign__button">COMENCEMOS</button></Link>
		</form>
	);
};

export default FormSignIn;