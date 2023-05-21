import { Link } from 'react-router-dom';
import image from "../../assets/images/logo.svg";

const Logo = () => {
    return <Link to={'/'} href="/" className="logo">
        <img src={image} alt="DogFood"/>
    </Link>
}

export default Logo;