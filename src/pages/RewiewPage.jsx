import React, { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { api } from "../utils/api";
import comments from "./../assets/images/comments.svg";
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import Breadcrumb from "../components/Breadcrumb";
import BannerOne from "../components/Banners/BannerOne";

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
			<div className="card pt-4 border-0 rounded-4 vh-100">
				<Breadcrumb/>
				<div className="row">
					<h4>{`Отзыв о товаре ${product?.name}`}</h4>
					<div className="col-md-1">
						<img src={comments} className="rounded-start my-2 ms-4" alt="comments"/>
					</div>
					<div className="col-md-11">
						<InputGroup>
							<div className="form-floating">
								<textarea
									className="form-control"
									placeholder="Отзыв"
									aria-label="Отзыв о товаре"
									aria-describedby="rewiew"
									id="floatingTextarea"
									style={{height: "100px"}}>
								</textarea>
								<label for="floatingTextarea">Отзыв</label>
							</div>
							<Button size="lg" variant="warning" id="rewiew" onClick={handleRewiew}>Отправить отзыв</Button>
						</InputGroup>
					</div>
				</div>
			</div>
			<BannerOne />
		</Container>
	)
}

export default RewiewPage;