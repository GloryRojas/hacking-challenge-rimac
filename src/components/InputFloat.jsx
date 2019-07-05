import React from 'react';
import './input.scss';

const InputFloat = (props) => {
	return(
		<div className="input">
			<input type="text" required="" className="input__input"/>
			<label htmlFor="input" className="input__label">{props.name}</label>
		</div>
	)
};

export default InputFloat;