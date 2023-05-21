import React from "react";
import "./ads.css";

export default () => {
	return <section className="full-banner">
		<div className="container">
			<div className="full-banner__block rocket-lazyload" data-before="%" style={{backgroundColor: '#FF8F27'}}>
				<h2 className="full-banner__title">Подарок за первый заказ!</h2>
				<p className="full-banner__descr">Легкое говяжье - пластины</p>
			</div>
		</div>
	</section>
}



/* 		<div class="p-5 mb-4 rounded-3">
			<div class="container-fluid py-5" data-before="%" style={{backgroundColor: '#FF8F27'}}>
				<h1 class="display-5 fw-bold">Подарок за первый заказ!</h1>
				<p class="col-md-8 fs-4">Легкое говяжье - пластины</p>
				<button class="btn btn-primary btn-lg" type="button">Example button</button>
			</div>
		</div> */