import React from 'react';
import './inputs.scss';
import { Link } from 'react-router-dom';

export const InputCheck = (props) => {
    return(   
        <div className="input"> 
            <input type="checkbox" className="input__checkbox" id={props.id}/>
            <label htmlFor={props.id}  className="input__p">
                {props.name}
            </label>
        </div>     
    )
}

export const InputRadio = (props) => {
    return(
        <div className="radio"> 
            <input type="radio" name="gender" className="radio__checkbox" id={props.id} />
            <label htmlFor={props.id} className="radio__p">
                {props.name}
            </label>
        </div>
    )
}

export const InputSubmit = (props) => {
    return(
        <Link to="/pasodos/"><input type="submit" name="continuar" id="continuar" value={props.value} disabled={props.state} className="inputsubmit" /></Link>
    )
};

export const InputFloat = (props) => {
	return(
		<div className="inputfloat">
			<input type={props.type} required="" className="inputfloat__input" />
			<label htmlFor="input" className="inputfloat__label">{props.name}</label>
		</div>
	)
};