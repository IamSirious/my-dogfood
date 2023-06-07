import React, { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { api } from "../utils/api";
import { Button, Container, Form, FloatingLabel, InputGroup, Card, Col, Row } from 'react-bootstrap';
import Breadcrumb from "../components/Breadcrumb";
import BannerOne from "../components/Banners/BannerOne";

import comments from "./../assets/images/comments.svg";

const RewiewPage = () => {
	const { productId } = useParams();
	const handleGetProduct = useCallback(() => api.getProductById(productId), [productId]);
	const { data: product } = useApi(handleGetProduct);
   
	const handleRewiew = (product) => {
		api.makeRewiew(productId)
		.then(console.log("Отзыв отправлен!"))
		.catch(err => console.error(err))
	}

	return (
		<Container>
			<Card className="pt-4 border-0 rounded-4 vh-100">
				<Breadcrumb/>
				<Row>
					<h4>{`Отзыв о товаре ${product?.name}`}</h4>
					<Col md="1">
						<img src={comments} className="rounded-start my-2 ms-4" alt="comments"/>
					</Col>
					<Col md="11">
						<InputGroup>
							<FloatingLabel controlId="floatingTextarea" label="Отзыв">
								<Form.Control
									as="textarea"
									placeholder="Оставьте отзыв здесь"
									style={{ height: '100px' }}
								/>
							</FloatingLabel>
							<Button size="lg" variant="warning" id="rewiew" onClick={handleRewiew}>Отправить отзыв</Button>
						</InputGroup>
					</Col>
				</Row>
			</Card>
			<BannerOne />
		</Container>
	)
}

export default RewiewPage;