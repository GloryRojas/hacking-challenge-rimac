import React from 'react';
import './carousel.scss';

const Carousel = () => {
	return (
		<div className="carousel">
			<article className="carousel__article">
				<p className="carousel__article--h1"><span  className="carousel__article--weigth">Seguro de accidentes para </span>Niños y Jóvenes</p>
				<p className="carousel__article--p escritorio"><span className="carousel__article--weigth">En accidentes </span>los cubrimos al 100% <span className="carousel__article--weigth">para que se recuperen por completo.</span></p>
				<p className="carousel__article--p mobile">Los cubrimos al 100% <span className="carousel__article--weigth">para recuperación completa</span></p>
				<div className="carousel__article--servicios">
					<p className="carousel__article--servicios--title escritorio"><i className="fas fa-briefcase-medical icon"> </i> Atención médica y medicinas</p>
					<p className="carousel__article--servicios--title escritorio"><i className="fas fa-briefcase-medical icon"> </i> Examenes de laboratorio</p>
					<p className="carousel__article--servicios--title escritorio"><i className="fas fa-briefcase-medical icon"> </i> Hospitalización y rehabilitación</p>
					<p className="carousel__article--servicios--title"><i className="fas fa-briefcase-medical icon"> </i> Cirugías y operaciones</p>
				</div>
				<p className="carousel__article--pages mobile"><i className="fas fa-chevron-left icon"></i> 01 / 05 <i className="fas fa-chevron-right carousel__article--icon"></i></p>
				<p className="carousel__article--footer escritorio">&#169; 2018 RIMAC Seguros y Reaseguros.</p>
			</article>
			<aside className="carousel__aside">
				<img src="https://user-images.githubusercontent.com/45070947/60694621-4884d200-9ea4-11e9-9622-cb4dc66823ae.jpg" alt="" className="carousel__aside--img mobile"/>
				<img src="https://user-images.githubusercontent.com/45070947/60775683-33e64b00-a0eb-11e9-81d2-888b02f608de.png" alt="" className="carousel__aside--img-desktop escritorio"/>
			</aside>
		</div>
	)
};

export default Carousel;