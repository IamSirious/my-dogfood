import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Image } from 'react-bootstrap';
import { ChevronRight } from "react-bootstrap-icons";
import ImgNotFound from "./../assets/images/notfound.svg";

const NotFoundPage = () => {
	return (
		<Container className="mt-4">
			<Card className="border-0">
				<Card.Header className="fs-3 border-0"><strong>0 товаров</strong> в корзине</Card.Header>
				<Card.Body className="text-center">
					<Card.Img className="mb-3" variant="top" src={ImgNotFound} style={{ width: '6rem' }} />

					<Card.Title>В корзине нет товаров</Card.Title>
					<Card.Text>
						Добавьте товар, нажав кнопку &laquo;В корзину&raquo; в карточке товара.
					</Card.Text>
					<Button to="/" className="text-black fw-bold rounded-pill my-2 mx-3" variant="outline-warning">На главную</Button>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default NotFoundPage;