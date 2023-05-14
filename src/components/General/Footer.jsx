import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Telegram, Whatsapp, Instagram } from 'react-bootstrap-icons';
/* import telegram from "../../assets/images/telegram.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import viber from "../../assets/images/viber.svg";
import instagram from "../../assets/images/instagram.svg";
import vk from "../../assets/images/vk.svg"; */

const Footer = () => {
    return 	<footer className="bg-warning mt-4">
		<div className="container">
			<footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
				<div className="col-6 col-md-4 mb-3">
					<Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
						<Logo/>
					</Link>
					<p className="text-muted">&copy; {new Date().getFullYear()}</p>
				</div>
				
				<div className="col mb-3">
					<ul className="nav flex-column">
						<li className="nav-item mb-3"><Link to="/catalog" className="nav-link p-0 text-dark">Каталог</Link></li>
						<li className="nav-item mb-3"><Link to="#" className="nav-link p-0 text-dark">Акции</Link></li>
						<li className="nav-item mb-3"><Link to="#" className="nav-link p-0 text-dark">Новости</Link></li>
						<li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-dark">Отзывы</Link></li>
					</ul>
				</div>

				<div className="col mb-3">
					<ul className="nav flex-column">
						<li className="nav-item mb-3"><Link to="#" className="nav-link p-0 text-dark">Контакты</Link></li>
						<li className="nav-item mb-3"><Link to="#" className="nav-link p-0 text-dark">Оплата и доставка</Link></li>
						<li className="nav-item mb-3"><Link to="#" className="nav-link p-0 text-dark">Обратная связь</Link></li>
						<li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-dark">Часто спрашивают</Link></li>
					</ul>
				</div>

				<div className="col mb-3">
					<h5>Мы на связи</h5>
					<Link to="tel:8 (999) 000-00-00" className="link-dark fs-4 fw-bold text-decoration-none">8 (999) 000-00-00</Link><br/>
					<Link to="mailto:dogfood.ru@gmail.com" className="link-dark text-decoration-none">dogfood.ru@gmail.com</Link>
						<ul className="list-unstyled d-flex">
							<li className="py-2"><Link to="#" className="link-dark"><Telegram size="24"/></Link></li>
							<li className="ms-3 py-2"><Link to="#" className="link-dark"><Whatsapp size="24"/></Link></li>
							<li className="ms-3 py-2"><Link to="#" className="link-dark"></Link></li>
							<li className="ms-3 py-2"><Link to="#" className="link-dark"><Instagram size="24"/></Link></li>
							<li className="ms-3 py-2"><Link to="#" className="link-dark"></Link></li>
						</ul>
				</div>
			</footer>
		</div>
	</footer>
}

export default Footer;