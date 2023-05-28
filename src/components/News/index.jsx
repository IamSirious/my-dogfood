import { useState, useEffect, useContext } from "react";
import Ctx from "../../context";
import { Container, Carousel } from 'react-bootstrap';

const News = () => {
	const {news} = useContext(Ctx);
	const [data, setData] = useState(news || [])

	useEffect(() => {
			const id = setTimeout(() => {
				let updateArr = [...data];
				let firstNew = updateArr.shift();
				updateArr.push(firstNew);
				setData(updateArr);
			}, 4000)
			return () => clearTimeout(id);
	}, [data])

	useEffect(() => {
		setData(news)
	}, [news])

	return	<Container>
		<h2>Новости Lenta.ru</h2>
		<Carousel controls={false} indicators={false}>
			<Carousel.Item>
				{data.slice(0, 4).map((el,i) => <img 
					src={el.urlToImage} 
					className="w-25 rounded-4 my-3 px-1" 
					alt={el.title}
					key={i}
				/>)}
			</Carousel.Item>
		</Carousel>
	</Container>
}

export default News;