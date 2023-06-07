import React from 'react';
import { useEffect, useState } from 'react';
import Rating from "react-rating";
import './style.css';
import star from "../../assets/images/star.svg";
import starfill from "../../assets/images/star-fill.svg";

function StarRating() {
	const [rating, setRating] = useState(0);
 
	return (
		<>
			<Rating
				fractions={2}
				emptySymbol={<img src={star} alt="rating" className=""/>}
				fullSymbol={<img src={starfill} alt="rating" className=""/>}
				initialRating={rating}
				onClick={rate => setRating(rate)}
			/>
			<span> Rating: {rating}</span>
		</>
	);
}
 
export default StarRating;

	// <Rating
		// emptySymbol={<img src={star} alt="rating" className=""/>}
		// fullSymbol={<img src={starfill} alt="rating" className=""/>}
	// />