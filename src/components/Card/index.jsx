import {useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import { Heart, HeartFill, Percent } from "react-bootstrap-icons"

import { discountPrice } from "../../utils/Utils";

// {img, name, price} => props (props.img, props.name, props.price)
const Card = ({
    img, 
    name, 
    price, 
    _id, 
    discount, 
    tags, 
    likes,
    setServerGoods
}) => {
    // проверка, есть ли id пользователя в массиве с лайками товара
    const [isLike, setIsLike] = useState(likes.includes(localStorage.getItem("rockId")));

    const updLike = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsLike(!isLike);
        const token = localStorage.getItem("rockToken");
        fetch(`https://api.react-learning.ru/products/likes/${_id}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // 644d15d48fbc473fa8a08aa4
                console.log(data);
                // Изменить основной массив с товарами внутри React (на стороне клиента)
                // Если внутри функции set... (useState) находится callback, то его аргументом является старое состояние (то, что было до изменения) - в нашем случае мы назвали его "old"
                // callback обязательно должен вернуть новые данные
                setServerGoods(function(old) {
                    console.log(old)
                    // Нам надо из массива взять одну карточку и заменить ее. При этом, положение карточки в массиве не должно поменяться. Наилучший способ пройтись по массиву, изменив часть его - это метод map
                    const arr = old.map(el => {
                        // для каждого элемента массива с товарами
                        if (el._id === _id) { // если id товара является тем же, что и у измененного товара
                            return data; // то я заменяю товар в общем массиве на обновленный
                        } else { // иначе
                            return el; // ничего не делаю
                        }
                    }); 
                    return arr; // возвращаем новый массив
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
				<div class="card-footer card-footer-color border-0">
					<div className="btn-group">
						<Button variant="warning" className="rounded-pill px-3">В корзину</Button>{' '}
					</div>
					<small className="text-muted px-2">{tags.map(el => <span key={el}>{el}</span>)}</small>
				</div>
			</Link>
		</div>
	)
}

export default Card;