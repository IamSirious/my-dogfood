import { useState, useEffect, useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Col } from 'react-bootstrap';
import { Heart, HeartFill, Percent } from "react-bootstrap-icons";

import Ctx from "../../context";
import { discountPrice } from "../../utils/Utils";
import addToBasket from "../../utils/addToBasket";
import updLike from "../../utils/updLike";

// {img, name, price} => props (props.img, props.name, props.price)
const Card = ({	img, name, price, _id, discount, tags, likes, wight,stock }) => {
	const { serverGoods, setServerGoods, userId, api, basket, setBasket } = useContext(Ctx);
	// проверка, есть ли id пользователя в массиве с лайками товара
	const [isLike, setIsLike] = useState(likes.includes(localStorage.getItem("rockId")));
	const [inBasket, setInBasket] = useState(basket.filter(el => el.id === _id).length > 0)

	const discount__price = discountPrice(price, discount);

	return (
		<Col>
			<Link className="card h-100 border-0 shadow-sm text-dark text-decoration-none" to={`/product/${_id}`}>
				{discount > 0 && <span className="card__discount">&nbsp;-{discount}<Percent/>&nbsp;</span>}
				<span className="card__like" onClick={(e) => updLike(e, !isLike, setIsLike, setServerGoods, _id, api)}>
					{isLike ? <HeartFill size="20"/> : <Heart size="20"/>}
				</span>
				<img src={img} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Картинка"/>
				<div className="card-body">
					{discount > 0
						? <>
							<span className="card__old-price">{price}&nbsp;₽</span>
							<span className="card__price card__price-discount">{discount__price}&nbsp;₽</span>
								{/* <span className="card__price card__price-discount">{price * (100 - discount) / 100}&nbsp;₽</span> */}
						</>
						:
						<span className="card__price">{price}&nbsp;₽</span>
					}
					<h5 className="card-title py-3">{name}</h5>
					<div className="d-flex justify-content-between align-items-center"></div>
				</div>
				<small className="text-muted px-2">{tags.map(el => <span key={el}>{el}</span>)}</small>
				<div className="card-footer card-footer-color border-0">
					<ButtonGroup>
						<Button variant="warning" className="rounded-pill px-3 btn-in" onClick={(e) => addToBasket(e, setInBasket, setBasket, _id, name, img, price, discount, wight)} disabled={inBasket}>{inBasket ? "В корзине" : "В корзину"}</Button>
					</ButtonGroup>
				</div>
			</Link>
		</Col>
	)
}

export default Card;