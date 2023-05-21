import { Container } from 'react-bootstrap';
import "./style.css";

const Banner = () => {
	return <>
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
	</>
}

export default Banner;

/* 		<Container>
			<div className="row align-items-md-stretch">
				<div className="col-md-6">
					<div className="h-100 p-5 text-bg-light rounded-3 mini-banners__item--one" style={{backgroundColor: '#D8A217'}}>
						<h2>Рога северного оленя</h2>
						<p>от 10 до 30 кг.</p>
						<button className="btn btn-outline-light" type="button">Example button</button>
					</div>
				</div>
				<div className="col-md-6">
					<div className="h-100 p-5 text-bg-light rounded-3 mini-banners__item--two" style={{backgroundColor: '#24B5BE'}}>
						<h2>Слипы из шеи индейки</h2>
						<p>100 % натуральное</p>
						<button className="btn btn-outline-secondary" type="button">Example button</button>
					</div>
				</div>
			</div>

			<div className="row align-items-md-stretch">
				<div className="col-md-6">
					<div className="h-100 p-5 text-bg-light rounded-3 mini-banners__item--three" style={{backgroundColor: '#9CCD55'}}>
						<h2>Рога северного оленя</h2>
						<p>от 10 до 30 кг.</p>
						<button className="btn btn-outline-light" type="button">Example button</button>
					</div>
				</div>
				<div className="col-md-6">
					<div className="h-100 p-5 text-bg-light rounded-3 mini-banners__item--four" style={{backgroundColor: '#DB6825'}}>
						<h2>Слипы из шеи индейки</h2>
						<p>100 % натуральное</p>
						<button className="btn btn-outline-secondary" type="button">Example button</button>
					</div>
				</div>
			</div>
		</Container> */