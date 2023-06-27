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

// окончание
export  const getEndings = (numb, field = 'товар') => {
    numb %= 100;
        if (numb >= 5 && numb <= 20) {
            return ` ${field}ов`;
        }
        numb %= 10;
        if (numb === 1) {
            return ` ${field}`;
        }
        if (numb > 1 && numb < 5) {
            return ` ${field}а`;
        }
        return ` ${field}ов`;
}