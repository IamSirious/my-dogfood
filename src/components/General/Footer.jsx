import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

import telegram from "../../assets/images/telegram.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import viber from "../../assets/images/viber.svg";
import instagram from "../../assets/images/instagram.svg";
import vk from "../../assets/images/vk.svg";

const Footer = () => {
    return 	<footer className="bg-warning mt-4">
		<Container>
			<footer className="d-flex justify-content-center justify-content-sm-center row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 pb-3">
				<div className="col-6 col-md-4 mb-3">
					<Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none d-none d-sm-block">
						<Logo/>
					</Link>
					<p className="text-muted mt-5"><small>&copy; {new Date().getFullYear()} «Интернет-магазин DogFood.ru»</small></p>
				</div>
				
				<div className="col mb-3 d-none d-sm-block">
					<ul className="nav flex-column">
						<li className="nav-item mb-3"><Link to="/catalog" className="nav-link p-0 text-dark">Каталог</Link></li>
						<li className="nav-item mb-3"><Link to="#" className="nav-link p-0 text-dark">Акции</Link></li>
						<li className="nav-item mb-3"><Link to="#" className="nav-link p-0 text-dark">Новости</Link></li>
						<li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-dark">Отзывы</Link></li>
					</ul>
				</div>

				<div className="col mb-3 d-none d-sm-block">
					<ul className="nav flex-column">
						<li className="nav-item mb-3"><Link to="/contacts" className="nav-link p-0 text-dark">Контакты</Link></li>
						<li className="nav-item mb-3"><Link to="#" className="nav-link p-0 text-dark">Оплата и доставка</Link></li>
						<li className="nav-item mb-3"><Link to="#" className="nav-link p-0 text-dark">Обратная связь</Link></li>
						<li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 text-dark">Часто спрашивают</Link></li>
					</ul>
				</div>

				<div className="col mb-3">
					<h5 className="">Мы на связи</h5>
					<Link to="tel:8 (999) 000-00-00" className="d-block link-dark fs-4 fw-bold text-decoration-none">8 (999) 000-00-00</Link>
					<Link to="mailto:dogfood.ru@gmail.com" className="d-block link-dark text-decoration-none">dogfood.ru@gmail.com</Link>
						<ul className="d-flex justify-content-center justify-content-sm-center list-unstyled">
							<li className="py-2"><Link to="#" className="link-dark"><img src={telegram} alt="telegram" className=""/></Link></li>
							<li className="ms-3 py-2"><Link to="#" className="link-dark"><img src={whatsapp} alt="whatsapp" className=""/></Link></li>
							<li className="ms-3 py-2"><Link to="#" className="link-dark"><img src={viber} alt="viber" className=""/></Link></li>
							<li className="ms-3 py-2"><Link to="#" className="link-dark"><img src={instagram} alt="instagram" className=""/></Link></li>
							<li className="ms-3 py-2"><Link to="#" className="link-dark"><img src={vk} alt="vk" className=""/></Link></li>
						</ul>
				</div>
			</footer>
		</Container>
	</footer>
}

export default Footer;