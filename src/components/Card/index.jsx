import { useState, useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import { Heart, HeartFill, Percent } from "react-bootstrap-icons"

import Ctx from "../../context";
import { discountPrice } from "../../utils/Utils";

// {img, name, price} => props (props.img, props.name, props.price)
const Card = ({
	img, 
	name, 
	price, 
	_id, 
	discount, 
	tags, 
	likes
}) => {
	const { serverGoods, setServerGoods, userId, api, basket, setBasket } = useContext(Ctx);
	// проверка, есть ли id пользователя в массиве с лайками товара
	const [isLike, setIsLike] = useState(likes.includes(userId));
	const [inBasket, setInBasket] = useState(basket.filter(el => el.id === _id).length > 0)
	
	const addToCart = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setInBasket(true);
		setBasket(prev => [...prev, {
			id: _id,
			cnt: 1,
			name: name,
			img: img,
			price: price,
			discount: discount
		}])
		handleClick();
	}

	const [active, setActive] = useState(false);
	const handleClick = () => {
		setActive(!active);
	};

	const updLike = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsLike(!isLike);
		api.setLike(_id, !isLike)
			.then(data => {
				console.log(data);
				setServerGoods(function(old) {
					console.log(old)
					const arr = old.map(el => {
						if (el._id === _id) {
							return data;
						} else {
							return el;
						}
					}); 
					return arr;
				})
			})
	}

	const discount__price = discountPrice(price, discount);

	return (
		<div className="col">
			<Link className="card h-100 border-0 shadow-sm text-dark text-decoration-none" to={`/product/${_id}`}>
				{discount > 0 && <span className="card__discount">&nbsp;-{discount}<Percent/>&nbsp;</span>}
				<span className="card__like" onClick={updLike}>
					{isLike ? <HeartFill size="20"/> : <Heart size="20"/>}
				</span>
				<img src={img} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Картинка"/>
				<div className="card-body">
					<span className={!!discount ? "card__old-price" : "card__price"}>{price}&nbsp;₽</span>
					{!!discount && <span className="card__price card__price-discount">{discount__price}&nbsp;₽</span>}
					<h5 className="card-title py-3">{name}</h5>
					<div className="d-flex justify-content-between align-items-center"></div>
				</div>
				<small className="text-muted px-2">{tags.map(el => <span key={el}>{el}</span>)}</small>
				<div className="card-footer card-footer-color border-0">
					<div className="btn-group">
						<Button variant="warning" className="rounded-pill px-3" onClick={addToCart} disabled={inBasket}>{ active ? "В корзине" : "В корзину"}</Button>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Card;


	/* const [buttonText, setButtonText] = useState('В корзину');
	const handleClick = () => {
		setButtonText('В корзине');
	};
	<Button variant="warning" className="rounded-pill px-3" onClick={handleClick} disabled={inBasket}>{buttonText}</Button> */