import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { ChevronRight } from "react-bootstrap-icons";
import ImgNotFound from './notfound.svg';

const NotFound = () => {
	return (
		<Container>
			<Card className="my-4 border-0">
				<Card.Header as="h5">{title}</Card.Header>
				<Card.Body>
					<Card.Title>
						<span style={captionStyle}>{title}</span>
					</Card.Title>
					<Card.Text>
						<img src={ImgNotFound} alt="Ничего не найдено" />
					</Card.Text>
					<Button variant="warning" href="/" title="Главная"><ChevronRight/></Button>
					<p><Link to="/" className="btn btn-light btn-lg rounded-pill my-2 mx-3">На главную 
						<ChevronRight/>
					</Link></p>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default NotFound;