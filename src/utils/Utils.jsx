export const isLiked = (likes, userId) => likes.some(id => id === userId);

// расчет скидки
export const discountPrice = (price, discount) => {
   return (
    Math.round(price - (price * discount / 100))
   ) 
}