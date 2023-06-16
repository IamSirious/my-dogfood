import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Product.css";
import { Accordion, ButtonGroup, Button, Container, Card, Col, InputGroup, ListGroup, Figure, Form, Row, Table } from 'react-bootstrap';
import { ChevronLeft, Star, Heart, HeartFill, Plus, Dash, Trash, Basket, Truck, PencilFill, TrashFill, Check2Circle } from "react-bootstrap-icons";
import Ctx from "../context";
import updLike from "../utils/updLike";
import addToBasket from "../utils/addToBasket";
import dec from "../utils/dec";
import inc from "../utils/inc";
import { discountPrice } from '../utils/Utils';

import Loader from "../components/Loader";
import BannerOne from "../components/Banners/BannerOne";
import Breadcrumb from "../components/Breadcrumb";
import StarRating from '../components/Rating';
import Reviews from "../components/Reviews";

import delivery from "./../assets/images/delivery.svg";
import guarantee from "./../assets/images/guarantee.svg";

const Product = () => {
	const { userId, setServerGoods, api, basket, setBasket, modalEdit, setModalEdit } = useContext(Ctx);
	const [product, setProduct] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();
	const [count, setCount] = useState(basket.filter(el => el.id === product._id).length > 0 ?
		basket.filter(el => el.id === product._id)[0].cnt
		: 1);
	const [text, setText] = useState("");
	const [isLike, setIsLike] = useState(false);
	const [modalRevActive, setModalRevActive] = useState(false);
	const [inBasket, setInBasket] = useState(false);

	const clickCountUp = (id) => {
		setCount(count + 1);
		inc(id, setBasket);
		setCount(basket.filter(el => el.id === product._id).length > 0 ?
			basket.filter(el => el.id === product._id)[0].cnt
			: count
		);
	}

	const clickCountDown = (id) => {
		setCount(count - 1)
		if (count === 1) {
			setInBasket(false)
		}
		dec(id, count, setBasket)
		setCount(basket.filter(el => el.id === product._id).length > 0 ?
			basket.filter(el => el.id === product._id)[0].cnt
			: count
		);
	}

	const clearForm = () => {
		setText("");
	}

	const editProd = () => {
		setModalEdit(true);
	}

	useEffect(() => {
		// fetch(`https://api.react-learning.ru/products/${id}`, {
		//	 headers: {
		//		 "Authorization": `Bearer ${token}`
		//	 }
		// })
		//	 .then(res => res.json())
		api.getSingleProduct(id)
			.then(data => {
				if (!data.err) {
					console.log(data);
					setProduct(data);
					setIsLike(data.likes.includes(localStorage.getItem("rockId")));
					setInBasket(basket.filter(el => el.id === data._id).length > 0);
					setCount(basket.filter(el => el.id === data._id).length > 0 ?
						basket.filter(el => el.id === data._id)[0].cnt
						: count
					);
				}
			})
	}, []);

	const sendForm = (e) => {
		e.preventDefault();
		let body = {
			text: text
		}
		// fetch(`https://api.react-learning.ru/products/review/${id}`, {
		//	 method: "POST",
		//	 headers: {
		//		 "Content-Type": "application/json",
		//		 "Authorization": `Bearer ${token}`
		//	 },
		//	 body: JSON.stringify(body)
		// })
		//	 .then(res => res.json())
		api.addReview(id, body)
			.then(data => {
				setProduct(data);
			})
		clearForm();
		setModalRevActive(false);
	}

	const deleteRev = (idRev) => {
		// fetch(`https://api.react-learning.ru/products/review/${product._id}/${idRev}`, {
		//	 method: "DELETE",
		//	 headers: {
		//		 "Authorization": `Bearer ${token}`
		//	 }
		// })
		//	 .then(res => res.json())
		api.delReview(id, idRev)
			.then(data => {
				setProduct(data);
			})
	}

	const delProduct = () => {
		// fetch("https://api.react-learning.ru/products/${id}", {
		//	 method: "DELETE",
		//	 headers: {
		//		 "Authorization": `Bearer ${token}`
		//	 }
		// })
		//	 .then(res => res.json())
		api.delProduct(id)
			.then(data => {
				setServerGoods(prev => prev.filter(el => el._id !== id));
				navigate("/catalog")
			})
	}


	const quantityReviewsEnding = () => {
		if (!!product.reviews) {
			if (product.reviews.length % 10 === 0) {
				return 'ов';
			} else if (product.reviews.length > 4 && product.reviews.length < 20) {
				return 'ов';
			} else if (product.reviews.length % 10 > 1 && product.reviews.length % 10 < 5) {
				return 'а';
			} else if (product.reviews.length % 10 > 4 && product.reviews.length % 10 < 9) {
				return 'ов';
			}
		}
	}
	const handleScrollClick = (event) => {
		event.preventDefault();
		const hiddenElement = document.querySelector("#reviews");
		hiddenElement.scrollIntoView({ behavior: "smooth" });
	}


	return <>
		<Container>
			<div className="pt-3">
				<Breadcrumb/>
			</div>
			{product.name 
				?
				<div className="my-4">
					{userId === product.author._id && 
						<div className="position-relative pb-5">
							<Button to="/add" className="position-absolute top-0 start-0" variant="outline-warning text-dark" onClick={editProd}><PencilFill/></Button>
							<Button className="position-absolute top-0 end-0" variant="outline-warning text-dark" onClick={delProduct}><Trash/></Button>
						</div>
					}
					<div className="heading-section">
						<h1>{product.name}</h1>
					</div>
						<div className="rate">
							<small className="text-muted">Артикул:&nbsp;{product._id}</small>
							<p><StarRating/>&emsp;
							<a href="#reviews" className="text-warning" onClick={handleScrollClick}>{!!product.reviews && product.reviews.length}&nbsp;отзыв{quantityReviewsEnding()}</a></p>
						</div>
					<Row>
						<Col md={6} className="my-4">
							<img src={product.pictures} className="card-img-top mb-5 mb-md-0" alt={product.name}/>
						</Col>
						<Col md={2}></Col>
						<Col md={4}>
							<div className="product-dtl">
								<div className="product-info">
									{product.discount > 0
										? <div className="product-price-discount">
											<span className="product__old-price">{product.price}&nbsp;₽</span>
											<strong className="fw-bold product__price-discount">{product.price * (100 - product.discount) / 100}&nbsp;₽</strong>
										</div>
										: <span className="fw-bold fs-4 product__price">{product.price}&nbsp;₽</span>
									}
								</div>
								<Row>
									{
										inBasket && <Col md={6} className="mt-3">
											<ButtonGroup>
												<Button className="border border-end-0 rounded-start-pill" size="lg" variant="" onClick={() => clickCountDown(product._id)}><Dash /></Button>
												<Button className="border border-start-0 border-end-0" size="lg" variant="" disabled>{count}</Button>
												<Button className="border border-start-0 rounded-end-pill" size="lg" variant="" onClick={() => clickCountUp(product._id)}><Plus /></Button>
											</ButtonGroup>
										</Col>
									}
									<Col md={6} className="mt-3">
										<Button className="rounded-pill mx-3" size="lg" variant="warning" onClick={(e) => addToBasket(e, setInBasket, setBasket, product._id, product.name, product.pictures, product.price, product.discount, product.wight, count)} disabled={inBasket}>{inBasket ? "В корзине" : "В корзину"}</Button>
									</Col>
								</Row>
								<Row className="my-3">
									<Button className="rounded-pill border-0 mx-3" size="lg" variant="link-underline-opacity-0" onClick={(e) => updLike(e, !isLike, setIsLike, setServerGoods, product._id, api)}>{isLike ? <HeartFill style={{color: 'red'}} /> : <Heart />}&nbsp;{isLike ? "В избранном" : "В избранное"}</Button>
								</Row>
							</div>
							<div className="card bg-light mb-3 border-0 rounded-4" style={{maxWidth: "400px"}}>
								<div className="row g-0">
									<Col md={1}>
										<img src={delivery} className="rounded-start mt-3 ms-2" alt="delivery"/>
									</Col>
									<Col md={11}>
										<div className="card-body">
											<h5 className="card-title ms-2">Доставка по всему Миру!</h5>
											<p className="card-text ms-2 mb-2">Доставка курьером — от 399 ₽</p>
											<p className="card-text ms-2">Доставка в пункт выдачи — от 199 ₽</p>
										</div>
									</Col>
								</div>
							</div>
							<div className="card bg-light mb-3 border-0 rounded-4" style={{maxWidth: "400px"}}>
								<div className="row g-0">
									<Col md={1}>
										<img src={guarantee} className="rounded-start mt-3 ms-2" alt="guarantee"/>
									</Col>
									<Col md={11}>
										<div className="card-body">
											<h5 className="card-title ms-2">Гарантия качества</h5>
											<p className="card-text ms-2 lh-sm">Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
										</div>
									</Col>
								</div>
							</div>
						</Col>
					</Row>

					<Accordion>
						<Accordion.Item defaultActiveKey="0">
							<Accordion.Header><h4>Описание</h4></Accordion.Header>
							<Accordion.Body>
								<div className="">
									<span className="">{product.description}</span>
								</div>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header><h4>Характеристики</h4></Accordion.Header>
							<Accordion.Body>
								<div className="row mb-3">
									<div className="col-2 text-muted text-decoration-underline">Вес</div>
									<div className="col-10">{product.wight}</div>
								</div>
								<div className="row mb-3">
									<div className="col-2 text-muted text-decoration-underline">Цена</div>
									<div className="col-10">{product.price}&nbsp;₽&nbsp;за 100 грамм</div>
								</div>
								<div className="row mb-3">
									<div className="col-2 text-muted text-decoration-underline">Количество</div>
									<div className="col-10">{product.stock}</div>
								</div>
								<div className="row mb-3">
									<div className="col-2 text-muted text-decoration-underline">Польза</div>
									<div className="col-10">
										<p>Большое содержание аминокислот и микроэлементов оказывает положительное воздействие на общий обмен веществ собаки.</p>
										<p>Способствуют укреплению десен и жевательных мышц.</p>
										<p>Развивают зубочелюстной аппарат, отвлекают собаку во время смены зубов.</p>
										<p>Имеет цельную волокнистую структуру, при разжевывание получается эффект зубной щетки, лучше всего очищает клыки собак.</p>
										<p>Следует учесть высокую калорийность продукта.</p>
									</div>
								</div>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>

					<div className="py-3">
						<Card id="reviews">
							<Card.Header as="h4" className="bg-warning fw-bold text-center" border="warning">Отзывы</Card.Header>
							<Card.Body>
								<ListGroup variant="flush">
									{product.reviews !== undefined && !!product.reviews.length
										? <Reviews product={product} />
										: <ListGroup.Item>Отзывы на данный товар отсутствуют</ListGroup.Item>}
								</ListGroup>
							</Card.Body>
							<Card.Footer className="text-muted border-top-0">
								<Button href={`/rewiew/${id}`} size="md" variant="outline-warning rounded-pill text-dark" id="rewiew">Написать отзыв</Button>
							</Card.Footer>
						</Card>
					</div>
					<Row className="g-3">
					</Row>
				</div>
				: <Loader/>
			}
		</Container>
		<BannerOne />
	</>
}

export default Product;