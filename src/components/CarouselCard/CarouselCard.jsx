import React, { useContext } from 'react';
import { Button, Carousel, Container, Col } from 'react-bootstrap';
import { Heart, HeartFill, Percent } from "react-bootstrap-icons";

import Ctx from "../../context";
import Card from "../Card";

const CarouselCard = () => {
	const { token, serverGoods } = useContext(Ctx);
	return (
		<>
			{token && <Container>
				<Carousel variant="dark">
					{serverGoods.filter(el => el.tags.includes("sale")).map((g, i) => <Carousel.Item key={i}>
						<Card
							key={g._id}
							{...g}
							img={g.pictures}
						/>
					</Carousel.Item>)
					}
				</Carousel>
			</Container>}
		</>
	);
}

export default CarouselCard;