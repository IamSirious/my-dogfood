import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import { Container } from 'react-bootstrap';
import { ChevronLeft } from "react-bootstrap-icons";
import Loader from "../components/Loader";

const Product = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://api.react-learning.ru/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("rockToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.err) {
                    console.log(data);
                    setProduct(data);
                }
            })
    }, []);

    /*
        product?.name
        ~
        product && product.name
    */
	return <Container>
		<Link class="button__link text-decoration-none" to="/catalog"><ChevronLeft/>&nbsp;Каталог</Link>
			{ product.name 
				? <div className="card my-5 border-0">
					<div className="row g-0">
						<div className="col-md-4">
							<img src={product.pictures} className="img-fluid rounded-start" alt={product.name} />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{product.name}</h5>
								<p className="card-text">В доработке</p>
								<p className="card-text"><small className="text-body-secondary"><mark>{product.price}₽</mark></small></p>
							</div>
						</div>
					</div>
				</div>
				: <Loader/>
			}
		
	</Container>
}

export default Product;