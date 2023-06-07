import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button, Card, Col, Container, Form, ListGroup, Row, Tooltip } from 'react-bootstrap';
import { ChevronLeft, Star, Heart, HeartFill, Plus, Dash, Trash } from "react-bootstrap-icons";

import delivery from "./../assets/images/delivery.svg";
import present from "./../assets/images/present.svg";
import gift from "./../assets/images/gift.png";
import { isLiked } from '../utils/Utils';
import Ctx from "../context";

const Basket = () => {
	const {basket, setBasket} = useContext(Ctx);
	const [cnt, setCnt] = useState(0);
	const setPrice = ({price, cnt, discount}) => {
		return price * cnt * (1 - discount / 100)
	}
	const sum = basket.reduce((acc, el) => {
		return acc + el.cnt * el.price
	}, 0)
	const sale = basket.reduce((acc, el) => {
		return acc + el.cnt * el.price * (1 - el.discount / 100)
	}, 0)
	const inc = (id) => {
		setBasket(prev => prev.map(el => {
			if (el.id === id) {
				el.cnt++;
			}
			return el;
		}))
	}
	const dec = (id, cnt) => {
		if (cnt === 1) {
			setBasket(prev => prev.filter(el => el.id !== id))
		} else {
			setBasket(prev => prev.map(el => {
				if (el.id === id) {
					el.cnt--;
				}
				return el;
			}))
		}
	}
	return (
		<section className="h-100 gradient-custom">
			<Container className="py-5 h-50">
				<Row className="justify-content-center my-4">
					<Col md="8">
						<Card className="mb-4 border-0">
							<Card.Header className="py-3 border-0">
								<p className="mb-0 fs-3">
									Товары в корзине
								</p>
							</Card.Header>
							<Card.Body>
								{basket.map(el => <Row key={el.id}>
									<Col lg="2" md="12" className="mb-3 mb-lg-0">
										<div className="bg-image rounded hover-zoom hover-overlay">
											<img src={el.img} alt={el.name} className="w-100"/>
										</div>
									</Col>

									<Col lg="4" md="6" className="d-flex justify-content-center align-items-center mb-3 mb-lg-0">
										<p>
											<Link className="fw-bold text-black text-decoration-none" to={`/product/${el.id}`}>{el.name}</Link>
										</p><br/>
										<p>
											<Link className="text-black text-decoration-none" to={`/product/${el.id}`}>{el.wight}</Link>
										</p>
										
										<Tooltip style={{ size: "sm" }} className="me-1 mb-2" title="Remove item">
											<Trash/>
										</Tooltip>

									</Col>

									<Col lg="2" md="6" className="d-flex justify-content-center align-items-center mb-lg-0">
										<ButtonGroup>
											<Button className="border border-end-0 rounded-start-pill" size="md" variant="" disabled={cnt}onClick={() => dec(el.id, el.cnt)}><Dash/></Button>
											<Button className="border border-start-0 border-end-0" size="md" variant="" type="number" min={0} defaultValue={1} disabled>{el.cnt}</Button>
											<Button className="border border-start-0 rounded-end-pill" size="md" variant="" onClick={() => inc(el.id)}><Plus/></Button>
										</ButtonGroup>
									</Col>

									<Col lg="2" md="6" className="d-flex justify-content-center align-items-center mb-3 mb-lg-0">
										<p className="text-start text-md-center">
											<span className="fw-bold">{el.price * el.cnt}&nbsp;₽</span><br/>
											{/* <strong>{el.discount > 0 && `${el.discount}%`}</strong>*/}
											<span className="fs-5 fw-bold" style={{color: "red"}}>{el.discount > 0 && <>{setPrice(el).toFixed(2)}&nbsp;₽</>}</span>
										</p>
									</Col>
									
									<Col lg="2" md="6" className="d-flex justify-content-center align-items-center mb-3 mb-lg-0">
										<Button className="text-muted" variant="outline-warning" onClick={() => dec(el.id, el.cnt)}><Trash/></Button>
									</Col>
									
									<hr className="my-4" />
								</Row>)}

								<Row>
									<Col lg="2" md="12" className="d-flex justify-content-center align-items-center mb-3 mb-lg-0">
										<div className="bg-image rounded hover-zoom hover-overlay">
											<img src={gift} className="w-100" alt="gift"/>
										</div>
									</Col>

									<Col lg="5" md="6" className="d-flex justify-content-center align-items-center mb-lg-0">
										<div className="card-body">
											<p className="card-title fw-bold text-black text-decoration-none">Легкое говяжье - пластины</p>
											<p className="card-text text-black text-decoration-none">100 грамм</p>
										</div>
									</Col>
									
									<Col lg="1" md="6" className="d-flex justify-content-center align-items-center mb-3 mb-lg-0"></Col>

									<Col lg="4" md="6" className="d-flex justify-content-center align-items-center mb-lg-0">
										<div className="bg-image rounded hover-zoom hover-overlay mt-0">
											<img src={present} className="w-100" alt="present"/>
										</div>
										<div className="card-body">
											<p className="fw-bold text-black mb-0" style={{fontSize: "14px"}}>Подарок</p>
											<p className="text-black mb-0" style={{fontSize: "10px"}}><span>за первый заказ</span></p>
										</div>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>

					<Col md="4">
						<Card className="mb-4" style={{ borderRadius: "20px" }}>
							<Card.Header className="border-bottom-0">
								<p tag="h5" className="fs-4 fw-bold mb-0 mt-3">Ваша корзина</p>
							</Card.Header>
							<Card.Body>
								<ListGroup>
									<ListGroup.Item
										className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 mt-0">
										Товары
										<span className="fw-bold">{sum} ₽</span>
									</ListGroup.Item>
									<ListGroup.Item className="d-flex justify-content-between align-items-center border-0 border-bottom px-0">
										Скидка
										<span className="fw-bold" style={{ color: "red" }}>- {sum - sale.toFixed(2)} ₽</span>
									</ListGroup.Item>
									<ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 mb-3" style={{ borderRadius: "0" }}>
										<span className="fw-bold">Общая стоимость</span>
										<span className="fs-5 fw-bold">{sale.toFixed(2)} ₽</span>
									</ListGroup.Item>
								</ListGroup>
								<div className="d-grid">
									<Button className="rounded-pill" size="lg" variant="warning">Оформить заказ</Button>
								</div>
							</Card.Body>
						</Card>
						
						<Card className="bg-light mb-3 border-0 rounded-4" style={{maxWidth: "400px"}}>
							<Row className="g-0">
								<Col md="1">
									<img src={delivery} className="rounded-start mt-3 ms-2" alt="delivery"/>
								</Col>
								<Col md="11">
									<Card.Body>
										<Card.Title className="ms-2">Доставка по всему Миру!</Card.Title>
										<Card.Text className="ms-2 mb-2">Доставка курьером — от 399 ₽</Card.Text>
										<Card.Text className="ms-2">Доставка в пункт выдачи — от 199 ₽</Card.Text>
									</Card.Body>
								</Col>
							</Row>
						</Card>
						
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Basket;