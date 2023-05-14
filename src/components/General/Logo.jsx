import image from "../../assets/images/logo.svg";

const Logo = () => {
    return <a href="/" className="logo">
        <img src={image} alt="DogFood"/>
    </a>
}

export default Logo;