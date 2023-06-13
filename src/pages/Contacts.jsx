import { Link } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';
import { ChevronLeft } from "react-bootstrap-icons";
import Breadcrumb from "../components/Breadcrumb";

import addr from "./../assets/images/user-addr.svg";
import phone from "./../assets/images/user-phone.svg";
import email from "./../assets/images/user-email.svg";

const Contacts = () => {
    return <>
		<div className="content">
			<Container>
				<div className="py-3">
					<Breadcrumb/>
				</div>
				<Row className="py-3 justify-content-between">
					<Col md="5">
						<h3>Контакты</h3>
						<p className="fw-bold mb-4">Адрес</p>
						<ul className="list-unstyled pl-md-5 mb-5">
							<li className="d-flex text-black mb-2"><span className="mr-3"><span className="icon-map"><img src={addr} className="" style={{ width: 30, height: 30 }} alt="addr"/></span></span><p className="mx-2"> г. Йошкар-Ола, Ленинский проспект, д. 12</p></li>
							<li className="d-flex text-black mb-2"><span className="mr-3"><span className="icon-phone"><img src={phone} className="" style={{ width: 30, height: 30 }} alt="phone"/></span></span><p className="mx-2"> 8-917-717-21-79</p></li>
							<li className="d-flex text-black mb-2"><span className="mr-3"><span className="icon-envelope-o"><img src={email} className="" style={{ width: 30, height: 30 }} alt="email"/></span></span><p className="mx-2"> hordog.ru@gmail.com</p></li>
							<small className="text-muted mx-4">ИП Чижова Мария Николаевна ИНН 891301550270</small>
						</ul>
					</Col>
					<Col md="7" style={{overflow: 'hidden'}}>
						<iframe className="rounded" src="https://yandex.ru/map-widget/v1/?from=tabbar&ll=47.919697%2C56.627028&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzkxMzU2NBJw0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQnNCw0YDQuNC5INCt0LssINCZ0L7RiNC60LDRgC3QntC70LAsINCb0LXQvdC40L3RgdC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCAxMiIKDbStP0IV0IFiQg%2C%2C&source=serp_navig&z=16.4" width="600" height="400" frameborder="1" allowfullscreen="true" style={{position:'relative'}}></iframe>
					</Col>
				</Row>
			</Container>
		</div>
    </>
}

export default Contacts;