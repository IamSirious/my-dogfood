import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Product.css";
import { Accordion, ButtonGroup, Button, Container, Row, Col, Figure, Table } from 'react-bootstrap';
import { ChevronLeft, Star, Heart, HeartFill, Plus, Dash } from "react-bootstrap-icons";
import Loader from "../components/Loader";

import delivery from "./../assets/images/delivery.svg";
import guarantee from "./../assets/images/guarantee.svg";
import BannerOne from "../components/Banners/BannerOne";

import { isLiked } from './../utils/Utils'

const Product = ({_id, onProductLike, description, discount, price, name, pictures, likes, reviews, wight, stock, rating }) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
	const [cnt, setCnt] = useState(0);

    useEffect(() => {
        fetch(`https://api.react-learning.ru/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("rockToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.err) {
                    console.log(data);
                    setProduct(data);
                }
            })
    }, []);

    /*
        product?.name
        ~
        product && product.name
    */
	return <>
		<Container>
			<Link className="button__link text-decoration-none" to="/catalog"><ChevronLeft/>&nbsp;Каталог</Link>
			<div className="my-4">
				<div className="heading-section">
					<h1>{product.name}</h1>
				</div>
					<div className="rate">
						<span><small className="text-muted">Артикул:</small>&nbsp;{product._id}&nbsp;</span>&nbsp;
						<Star type="radio" id="star5" name="rate" defaultValue={5} defaultChecked />&nbsp;
						<Star type="radio" id="star4" name="rate" defaultValue={4} defaultChecked />&nbsp;
						<Star type="radio" id="star3" name="rate" defaultValue={3} defaultChecked />&nbsp;
						<Star type="radio" id="star2" name="rate" defaultValue={2} />&nbsp;
						<Star type="radio" id="star1" name="rate" defaultValue={1} />&nbsp;
					</div>
				<div className="row">
					<div className="col-md-6 my-4">
						<img src={product.pictures} className="card-img-top mb-5 mb-md-0" alt={product.name}/>
					</div>
					<div className="col-md-2"></div>
					<div className="col-md-4">
						<div className="product-dtl">
							<div className="product-info">
								<div className="product-price-discount">
									<span className="fw-bold line-through">{product.price}&nbsp;₽</span><br/>
									<strong className="fw-bold">{product.discount}&nbsp;₽</strong>
								</div>
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
									<Button className="rounded-pill" size="lg" variant="warning">&nbsp;&nbsp;&nbsp;В корзину&nbsp;&nbsp;&nbsp;</Button>{' '}
								</div>
							</div>
							<div className="row my-3">
								<span>{isLiked ? <HeartFill size="20"/> : <Heart size="20"/>}</span>
							</div>
						</div>
						<div class="card bg-light mb-3 border-0 rounded-4" style={{maxWidth: "400px"}}>
						  <div class="row g-0">
							<div class="col-md-1">
							  <img src={delivery} class="rounded-start mt-3 ms-2" alt="delivery"/>
							</div>
							<div class="col-md-11">
							  <div class="card-body">
								<h5 class="card-title ms-2">Доставка по всему Миру!</h5>
								<p class="card-text ms-2 mb-2">Доставка курьером — от 399 ₽</p>
								<p class="card-text ms-2">Доставка в пункт выдачи — от 199 ₽</p>
							  </div>
							</div>
						  </div>
						</div>
						<div class="card bg-light mb-3 border-0 rounded-4" style={{maxWidth: "400px"}}>
						  <div class="row g-0">
							<div class="col-md-1">
							  <img src={guarantee} class="rounded-start mt-3 ms-2" alt="guarantee"/>
							</div>
							<div class="col-md-11">
							  <div class="card-body">
								<h5 class="card-title ms-2">Гарантия качества</h5>
								<p class="card-text ms-2 lh-sm">Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
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
			</div>
		</Container>
		<BannerOne />
	</>
}

export default Product;


/* 							<form class="row g-3 mb-3 product-count">
								<div class="col-auto">
									<label for="inputQuantity" class="visually-hidden">Quantity</label>
									<form action="#" className="d-flex flex-row group">
										<div className="qtyminus">-</div>
											<input type="text" name="quantity" defaultValue={1} className="qty" placeholder="quantity"/>
										<div className="qtyplus">+</div>
									</form>
								</div>
								<div class="col-auto">
									<Button variant="warning" className="rounded-pill mb-2 px-3">В корзину</Button>{' '}
								</div>
							</form> */