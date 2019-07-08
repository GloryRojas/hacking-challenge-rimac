import React, { useState } from 'react';
import './form-signin.scss';
import { InputFloat, InputCheck } from '../inputs/Inputs';
import { Link } from 'react-router-dom';

const FormSignIn = () => {
	const[ dni, setDni ] = useState('');
	const[ nombre, setNombre ] = useState('');

	const persona = {
		"nombre": nombre.split(" ")[0],
		"paterno": nombre.split(" ")[1],
		"dni": dni,
		"asegurados": [
			{
				"nombre": "Matías",
				"paterno": "Pinedo",
				"materno": "Lozano",
				"dni": "76543210",
				"nacimiento": "09/04/1998",
				"genero": "Masculino",
				"id": "1"
			}]
	}
	
	return (
		<form className="formsign">
			<p className="formsign__title">Protégelos <span className="formsign__title--span">ahora</span></p>
			<p className="formsign__ingrese">Ingresa los datos del titular.</p>
			<div className="formsign__inputfloat">
				<input className="formsign__inputfloat--input" type="text" id='input' required onChange={e => setDni(e.currentTarget.value)}/>
				<label className="formsign__inputfloat--label" htmlFor="input">Nro. de Documento</label>
			</div>
			<div className="formsign__inputfloat">
				<input className="formsign__inputfloat--input" type="text" id='input' required onChange={e => setNombre(e.currentTarget.value)}/>
				<label className="formsign__inputfloat--label" htmlFor="input">Nombre</label>
			</div>
			<InputCheck  id={'proteccion'} name={<span>Acepto la <u>Política de Protección de Datos Personales</u> y los <u>Términos y Condiciones.</u></span>}/>
			<InputCheck  id={'politica'} name={<span>Acepto la Política de Envío de <u>Comunicaciones Comerciales.</u></span>}/>
			<Link to={{pathname: "/pasouno/", state: {info: persona}}}><button className="formsign__button">COMENCEMOS</button></Link>
		</form>
	);
};

export default FormSignIn;