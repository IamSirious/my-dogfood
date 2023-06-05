import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { ChevronLeft } from "react-bootstrap-icons";
import Breadcrumb from "../components/Breadcrumb";

import addr from "./../assets/images/user-addr.svg";
import phone from "./../assets/images/user-phone.svg";
import email from "./../assets/images/user-email.svg";

const Contacts = () => {
    return <>
		<div className="content">
			<Container>
				<div className="row">
					<div className="col-md-5 mr-auto">
						<div className="py-3">
							<Breadcrumb/>
						</div>
						<h3>Контакты</h3>
						<p className="fw-bold mb-4">Адрес</p>
						<ul className="list-unstyled pl-md-5 mb-5">
							<li className="d-flex text-black mb-2"><span className="mr-3"><span className="icon-map"><img src={addr} className="" style={{ width: 30, height: 30 }} alt="addr"/></span></span><p className="mx-2"> г. Йошкар-Ола, Ленинский проспект, д. 12</p></li>
							<li className="d-flex text-black mb-2"><span className="mr-3"><span className="icon-phone"><img src={phone} className="" style={{ width: 30, height: 30 }} alt="phone"/></span></span><p className="mx-2"> 8-917-717-21-79</p></li>
							<li className="d-flex text-black mb-2"><span className="mr-3"><span className="icon-envelope-o"><img src={email} className="" style={{ width: 30, height: 30 }} alt="email"/></span></span><p className="mx-2"> hordog.ru@gmail.com</p></li>
							<small className="text-muted mx-4">ИП Чижова Мария Николаевна ИНН 891301550270</small>
						</ul>
					</div>
					<div className="col-md-6 d-flex align-items-stretch">
						<div id="map">

						</div>
					</div>
				</div>
			</Container>
		</div>
    </>
}

export default Contacts;