import React from 'react';
import './form-signin.scss';
import InputFloat from '../InputFloat';

const FormSignIn = () => {
	return (
		<form className="formsign">
			<p className="formsign__title">Protégelos <span className="formsign__title--span">ahora</span></p>
			<p className="formsign__ingrese">Ingresa los datos del titular.</p>
			<InputFloat name={"Nro. de Documento"}/>
			<InputFloat name={"Nombre"}/>
			<p>
				<input type="checkbox" className="formsign__checkbox" id="proteccion"/>
				<label htmlFor="proteccion" className="formsign__p">
					<span>Acepto la <u>Política de Protección de Datos Personales</u> y los <u>Términos y Condiciones.</u></span>
				</label>
			</p>
			<p>
				<input type="checkbox" className="formsign__checkbox" id="comunicacion"/>
				<label htmlFor="comunicacion"  className="formsign__p">
					<span>Acepto la Política de Envío de <u>Comunicaciones Comerciales.</u></span>
				</label>
			</p>
			<button className="formsign__button">COMENCEMOS</button>
		</form>
	);
};

export default FormSignIn;