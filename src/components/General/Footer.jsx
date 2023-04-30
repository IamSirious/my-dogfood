import Logo from "./Logo";

const Footer = () => {
    return <footer>
        <div className="footer__cell">
            <Logo/>
			<div>© {new Date().getFullYear()} by Sergey Romanenko</div>
        </div>
        <nav className="footer__cell footer__menu">
            <a href="">Каталог</a>
            <a href="">Избранное</a>
            <a href="">Корзина</a>
        </nav>
    </footer>
}

export default Footer;