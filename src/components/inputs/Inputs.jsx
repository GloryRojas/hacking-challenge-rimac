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
            <input type="radio" name="gender" className="radio__checkbox" id={props.id} value={props.value} />
            <label htmlFor={props.id} className="radio__p">
                {props.name}
            </label>
        </div>
    )
}

export const InputSubmit = (props) => {
    return(
        <>
            <Link to={props.route}>
                <button type="submit" name="continuar" value={props.value} disabled={props.state} className="inputsubmit">
                    {props.value}
                    { props.arrow ? <span className="inputsubmit__arrow"><i className="fas fa-chevron-right"></i></span> : ''}
                </button>
            </Link>
        </>
    )
};

export const InputButton = (props) => {
    return(
        <button type="button" disabled={props.state} className="inputsubmit">
            {props.value}
            { props.arrow ? <span className="inputsubmit__arrow"><i className="fas fa-chevron-right"></i></span> : ''}
        </button>
    )
};

export const InputFloat = (props) => {
	return(
		<div className="inputfloat">
			<input type={props.type} required className="inputfloat__input" onChange={e => props.setData(e.currentTarget.value)} disabled={props.state} />
			<label htmlFor="input" className="inputfloat__label">{props.name}</label>
		</div>
	)
};

export const InputDscto = () => {
    return (
        <div>
            <input type="text"/>
            <button></button>
        </div>
    )
}