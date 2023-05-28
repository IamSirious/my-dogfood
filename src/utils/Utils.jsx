export const isLiked = (likes, userId) => likes.some(id => id === userId);

// расчет скидки
export const discountPrice = (price, discount) => {
	return (
		Math.round(price - (price * discount / 100))
	) 
};

// убирает разметку из текста, переданного из сети
export const createMarkup = (textHtml) => {
    return {__html: textHtml}
};