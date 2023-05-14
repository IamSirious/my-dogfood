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