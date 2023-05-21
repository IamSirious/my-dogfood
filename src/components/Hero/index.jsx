import { Link } from 'react-router-dom';
/* import { Button } from 'react-bootstrap'; */
import { ChevronRight } from "react-bootstrap-icons";

const Hero = () => {
	return (
		<section className="pt-3 pb-5 text-start container-fluid bg-warning">
			<div className="row py-lg-5">
				<div className="col-lg-10 col-md-10 mx-auto">
					<h1 className="fs-1 fw-bold mx-3">Крафтовые<br/>лакомства для<br/>собак и кошек</h1>
					<p className="fs-4 fw-medium lh-sm py-3 mx-3">Всегда свежие лакомства ручной<br/>работы с доставкой по России и Миру</p>
					<p>
						<Link to="/catalog" className="btn btn-light btn-lg rounded-pill my-2 mx-3">
							&nbsp;&nbsp;Каталог&nbsp;&nbsp;<ChevronRight/>&nbsp;&nbsp;
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Hero;