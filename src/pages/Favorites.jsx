import { Link } from "react-router-dom"
import { Container } from 'react-bootstrap';
import { ChevronLeft } from "react-bootstrap-icons";
import Card from "../components/Card";
import Breadcrumb from "../components/Breadcrumb";

const Favorites = ({goods, userId, setServerGoods}) => {
    return <Container className="vh-100">
		<div className="py-3">
			<Breadcrumb/>
		</div>
		<div className="album py-3">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
				{goods.filter(el => el.likes.includes(userId)).map(g => <Card 
					{...g} 
					key={g._id}
					img={g.pictures}
					setServerGoods={setServerGoods}
				/>)}
			</div>
		</div>
    </Container>
}

export default Favorites;