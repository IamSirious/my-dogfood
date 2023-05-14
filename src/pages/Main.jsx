import React from "react";

import Ads from "../components/Ads/ads";
import "./Main.css";
import { Container } from 'react-bootstrap';

export default ({ data }) => {
    return <>
        <Container>
			<h1>Главная страница</h1>
		</Container>
        <Ads />
		<section className="mini-banners">
			<Container>
				<div className="mini-banners__items">
					<div className="mini-banners__item--one" style={{backgroundColor: '#D8A217'}}>
						<h2 className="mini-banners__item--title">Наборы</h2>
						<p className="mini-banners__item--descr">для дрессировки</p>
						<p className="mini-banners__item--price">от 840 ₽</p>
					</div>
					<div className="mini-banners__item--two" style={{backgroundColor: '#24B5BE'}}>
						<h2 className="mini-banners__item--title">Микс масел</h2>
						<p className="mini-banners__item--descr">пищевая здоровая натуральная добавка</p>
						<p className="mini-banners__item--price" />
					</div>
				</div>
			</Container>
		</section>
		  
		<section className="mini-banners">
			<Container>
				<div className="mini-banners__items">
					<div className="mini-banners__item--three" style={{backgroundColor: '#9CCD55'}}>
						<h2 className="mini-banners__item--title">Рога северного оленя</h2>
						<p className="mini-banners__item--descr">от 10 до 30 кг.</p>
						<p className="mini-banners__item--price" />
					</div>
					<div className="mini-banners__item--four" style={{backgroundColor: '#DB6825'}}>
						<h2 className="mini-banners__item--title">Слипы из шеи индейки</h2>
						<p className="mini-banners__item--descr">100 % натуральное</p>
						<p className="mini-banners__item--price" />
					</div>
				</div>
			</Container>
		</section>
        <Ads />
    </>
}