import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Product.css";
import { Accordion, ButtonGroup, Button, Container, Card, InputGroup, Form, Row, Col, Figure, Table } from 'react-bootstrap';
import { ChevronLeft, Star, Heart, HeartFill, Plus, Dash, Trash, Basket, Truck, PencilFill, TrashFill } from "react-bootstrap-icons";
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
	const { api, userId, setServerGoods, basket, setBasket, setBaseData } = useContext(Ctx);
	const [cnt, setCnt] = useState(0);
	const [data, setData] = useState({});
	const [revText, setRevText] = useState("");
	const [revRating, setRevRating] = useState(0);
	const [hideForm, setHideForm] = useState(true);

	useEffect(() => {
		api.getSingleProduct(id)
			.then(data => {
				if (!data.err) {
					console.log(data);
					setProduct(data);
				}
			})
	}, []);

	useEffect(() => {
		api.getSingleProduct(id)
			.then(serverData => {
				setData(serverData);
			})
	}, []);

	const inBasket = basket.filter(el => el.id === id).length > 0;
	const addToBasket = !inBasket
		? (e) => {
			e.preventDefault()
			e.stopPropagation()
			cnt > 1 ? setCnt(0) : setCnt(1)
			setBasket(prev => [...prev, {
				id,
				price: data.price,
				discount: data.discount,
				cnt: 1
			}])
		}
		: (() => { });

	const updateProduct = () => {
		navigate("/upd/product")
	};

	const del = () => {
		api.delProduct(id)
			.then(data => {
				console.log(data);
				setServerGoods(prev => prev.filter(el => el._id !== id))
				navigate("/catalog")
			})
	}

	const addReview = (e) => {
		e.preventDefault();
		api.setReview(data._id, {
			text: revText,
			rating: revRating
		}).then(d => {
			setData(d);
			setRevText("");
			setRevRating(0);
			setHideForm(true);
		})
	};

	const delReview = (id) => {
		api.delReview(data._id, id).then(d => {
			setData(d);
		})
	};

	return <>
		<Container>
			<div className="pt-3">
				<Breadcrumb/>
			</div>

				<div className="my-4">
				   { product.name 
						? <>
							{userId === product.author._id && 
								<div className="position-relative pb-5">
									<Button to="/add" className="position-absolute top-0 start-0" variant="outline-warning text-dark" onClick={updateProduct}><PencilFill/></Button>
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
												<Button className="rounded-pill mx-3" size="lg" variant="warning" onClick={addToBasket} disabled={inBasket}>{ !inBasket ? "В корзину" : "В корзине"}</Button>
											</div>
										</div>
										<div className="row my-3">
											<Button className="rounded-pill border-0 mx-3" size="lg" variant="link-underline-opacity-0"><HeartFill /> В избранное</Button>
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
								{/* <h4 className="title py-2">Остальные отзывы</h4> */}
							</div>
							<Row className="g-3">
								{data.reviews > 0 ? <Col xs={12}>
									<h4 className="title py-2">Отзывы</h4>
									<Row className="g-3">
										{data.reviews.map(el => <Col xs={12} sm={6} md={4} key={el._id}>
											<Card className="h-100">
												<Card.Body>
													<span className="d-flex w-100 align-items-center mb-2">
														<span style={{
															width: "30px",
															height: "30px",
															display: "block",
															backgroundPosition: "center",
															backgroundRepeat: "no-repeat",
															backgroundSize: "cover",
															backgroundImage: `url(${el.author.avatar})`,
															marginRight: "1rem",
															borderRadius: "50%"
														}} />
														<span>
															{el.author.name}
														</span>
													</span>
													<Card.Title>{el.rating}</Card.Title>
													<Card.Text className="fs-6 text-secondary">{el.text}</Card.Text>
													{el.author._id === userId && <span className="text-danger position-absolute end-0 bottom-0 pe-3 pb-2">
														<Basket onClick={() => delReview(el._id)} />
													</span>}
												</Card.Body>
											</Card>
										</Col>
										)}
										{hideForm && <Col>
											<Button
												variant="outline-info"
												className="fs-1 w-100 h-100"
												onClick={() => setHideForm(false)}
											>
												<Plus />
											</Button>
										</Col>}
									</Row>
								</Col>
									: hideForm && <Col>
										<Button size="lg" variant="outline-warning rounded-pill text-dark" onClick={() => setHideForm(false)}>Написать отзыв</Button>
									</Col>
								}

								{!hideForm && <Col xs={12} className="mt-5">
									<h4 className="title py-2">Новый отзыв</h4>
									<Form onSubmit={addReview}>
										<Form.Group className="mb-3">
											<Form.Label htmlFor="rating">Рейтинг (0-5)</Form.Label>
											<Form.Control
												type="number"
												min={1}
												max={5}
												step={1}
												id="rating"
												value={revRating}
												onChange={(e) => setRevRating(+e.target.value)}
											/>
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label htmlFor="text">Комментарий:</Form.Label>
											<Form.Control
												as="textarea"
												type="text"
												id="text"
												value={revText}
												rows={3}
												onChange={(e) => setRevText(e.target.value)}
											/>
										</Form.Group>
										<Button
											type="reset"
											className="me-2"
											onClick={(e) => {
												e.preventDefault();
												setRevText("");
												setRevRating(0);
												setHideForm(true);
											}}
										>Отмена</Button>
										<Button type="submit">Добавить</Button>
									</Form>
								</Col>}
							</Row>
						</>
						: <Loader/>
					}
				</div>
		</Container>
		<BannerOne />
	</>
}

export default Product;