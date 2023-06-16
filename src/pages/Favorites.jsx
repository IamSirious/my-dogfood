import { useContext } from "react";
import { Link } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap';
import { ChevronLeft } from "react-bootstrap-icons";

import Card from "../components/Card";
import Breadcrumb from "../components/Breadcrumb";
import Ctx from "../context";

const Favorites = () => {
	const { goods, setServerGoods, userId } = useContext(Ctx);
	return (
		<Container className="min-vh-100">
			<div className="py-3">
				<Breadcrumb/>
			</div>
			<div className="album py-3">
				<Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
					{goods.filter(el => el.likes.includes(userId)).map(g => <Card 
						{...g} 
						key={g._id}
						img={g.pictures}
						setServerGoods={setServerGoods}
					/>)}
				</Row>
			</div>
		</Container>
	)
}

export default Favorites;