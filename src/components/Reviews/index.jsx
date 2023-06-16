import React from "react";
import './style.css'

const Reviews = ({ product }) => {
    if (!!product.reviews) {
        return (product.reviews.map((item) => <div key={item._id}>
            <div className="reviews__firstInfo">
                <span className="reviews__name">{item.author.name}</span>
                <span className="reviews__date">{new Date(item.updated_at).toLocaleString('ru-RU', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                })}</span>
				<span className="reviews__rating"><small className="text-muted">Рейтинг отзыва:&nbsp;{item.rating}</small></span>
            </div>
            <div className="reviews__text">{item.text}</div>
            <hr/>
        </div>))
    }
}

export default Reviews;