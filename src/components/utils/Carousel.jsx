import React from 'react';
import './carousel.scss';

const Carousel = () => {
	return (
		<div className="carousel">
			<article className="carousel__article">
				<p className="carousel__article--h1"><span  className="carousel__article--weigth">Seguro de accidentes para </span>Niños y Jóvenes</p>
				<p className="carousel__article--p">Los cubrimos al 100% <span className="carousel__article--weigth">para recuperación completa</span></p>
				<p className="carousel__article--title"><i className="fas fa-briefcase-medical icon"></i> CIRUGÍAS Y OPERACIONES</p>
				<p className="carousel__article--pages"><i className="fas fa-chevron-left icon"></i> 01 / 05 <i className="fas fa-chevron-right icon"></i></p>
			</article>
			<aside className="carousel__aside">
				<img src="https://user-images.githubusercontent.com/45070947/60694621-4884d200-9ea4-11e9-9622-cb4dc66823ae.jpg" alt="" className="carousel__aside--img"/>
			</aside>
		</div>
	)
};

export default Carousel;