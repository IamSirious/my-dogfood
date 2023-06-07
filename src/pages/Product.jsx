import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Product.css";
import { Accordion, ButtonGroup, Button, Container, InputGroup, Form, Row, Col, Figure, Table } from 'react-bootstrap';
import { ChevronLeft, Star, Heart, HeartFill, Plus, Dash, Trash } from "react-bootstrap-icons";
import Ctx from "../context";

import Loader from "../components/Loader";
import BannerOne from "../components/Banners/BannerOne";
import Breadcrumb from "../components/Breadcrumb";
import StarRating from '../components/Rating';
import { isLiked, discountPrice } from '../utils/Utils';

import delivery from "./../assets/images/delivery.svg";
import guarantee from "./../assets/images/guarantee.svg";

const Product = () => {
	const [product, setProduct] = useState({});
	const {id} = useParams();
	const navigate = useNavigate();
	const {userId, setServerGoods, api, basket, setBasket} = useContext(Ctx);
	const [cnt, setCnt] = useState(0);
	const [currentRating, setCurrentRating] = useState(1);
	
	useEffect(() => {
		api.getSingleProduct(id)
			.then(data => {
				if (!data.err) {
					console.log(data);
					setProduct(data);
				}
			})
	}, []);

	const [active, setActive] = useState(false);
	const addToCart = () => {
		setActive(!active);
	};

	/*
		product?.name
		~
		product && product.name
	*/

	const del = () => {
		api.delProduct(id)
			.then(data => {
				console.log(data);
				setServerGoods(prev => prev.filter(el => el._id !== id))
				navigate("/catalog")
			})
	}

	return <>
		<Container>
			<div className="pt-3">
				<Breadcrumb/>
			</div>
 
				<div className="my-4">
				   { product.name 
						? <>
							{userId === product.author._id && 
								<div className="position-relative">
									<Button className="position-absolute top-0 end-0" variant="outline-warning text-dark" onClick={del}><Trash/></Button>
								</div>
							}
						<div className="heading-section">
							<h1>{product.name}</h1>
						</div>
							<div className="rate">
								<span><small className="text-muted">Артикул:</small>&nbsp;{product._id}&nbsp;</span>&nbsp;
								<StarRating/>
							</div>
						<div className="row">
							<div className="col-md-6 my-4">
								<img src={product.pictures} className="card-img-top mb-5 mb-md-0" alt={product.name}/>
							</div>
							<div className="col-md-2"></div>
							<div className="col-md-4">
								<div className="product-dtl">
									<div className="product-info">
										{product?.discount > 0 &&<div className="product-price-discount">
											<span className="product__old-price">{product.price}&nbsp;₽</span>
											<strong className="fw-bold product__price-discount">{Math.round(product.price * (100 - product.discount) / 100)} ₽</strong>
										</div>}
									</div>
									<div className="row">
										<div className="col-md-6 mt-3">
											<ButtonGroup>
												<Button className="border border-end-0 rounded-start-pill" size="lg" variant="" disabled={!cnt} onClick={e => setCnt(cnt - 1)}><Dash/></Button>
												<Button className="border border-start-0 border-end-0" size="lg" variant="" disabled>{cnt}</Button>
												<Button className="border border-start-0 rounded-end-pill" size="lg" variant="" onClick={e => setCnt(cnt + 1)}><Plus/></Button>
											</ButtonGroup>
										</div>
										<div className="col-md-6 mt-3">
											<Button className="rounded-pill mx-3" size="lg" variant="warning" onClick={addToCart}>{ active ? "В корзине" : "В корзину"}</Button>
										</div>
									</div>
									<div className="row my-3">
										
									</div>
								</div>
								<div className="card bg-light mb-3 border-0 rounded-4" style={{maxWidth: "400px"}}>
									<div className="row g-0">
										<div className="col-md-1">
											<img src={delivery} className="rounded-start mt-3 ms-2" alt="delivery"/>
										</div>
										<div className="col-md-11">
											<div className="card-body">
												<h5 className="card-title ms-2">Доставка по всему Миру!</h5>
												<p className="card-text ms-2 mb-2">Доставка курьером — от 399 ₽</p>
												<p className="card-text ms-2">Доставка в пункт выдачи — от 199 ₽</p>
											</div>
										</div>
									</div>
								</div>
								<div className="card bg-light mb-3 border-0 rounded-4" style={{maxWidth: "400px"}}>
									<div className="row g-0">
										<div className="col-md-1">
											<img src={guarantee} className="rounded-start mt-3 ms-2" alt="guarantee"/>
										</div>
										<div className="col-md-11">
											<div className="card-body">
												<h5 className="card-title ms-2">Гарантия качества</h5>
												<p className="card-text ms-2 lh-sm">Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

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
							<h4 className="title py-2">Отзывы</h4>
							<Button href={`/rewiew/${id}`} size="lg" variant="outline-warning rounded-pill text-dark" id="rewiew">Написать отзыв</Button>
						</div>
						<div className="py-3">
							<h4 className="title py-2">Остальные отзывы</h4>
						</div>
						</>
						: <Loader/>
					}
				</div>

		</Container>
		<BannerOne />
	</>
}

export default Product;