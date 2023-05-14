import Card from "../components/Card";
import { Link } from "react-router-dom"
import { Container } from 'react-bootstrap';
import { ChevronLeft } from "react-bootstrap-icons";

const Favorites = ({goods, userId, setServerGoods}) => {
    return <Container>
		<Link class="button__link text-decoration-none" to="/catalog"><ChevronLeft/>&nbsp;Каталог</Link>
        {goods.filter(el => el.likes.includes(userId)).map(g => <Card 
            {...g} 
            key={g._id}
            img={g.pictures}
            setServerGoods={setServerGoods}
        />)}
    </Container>
}

export default Favorites;