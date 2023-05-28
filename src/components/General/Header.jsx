import Logo from "./Logo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from '../Search/';
import { Badge, Button, Container } from 'react-bootstrap';
import { 
	Heart,
	Person,
	Bag,
	BoxArrowInRight,
	PlusCircle
} from "react-bootstrap-icons";
import profile from "../../assets/images/profile1.svg";

const Header = ({user, setModalActive, serverGoods}) => {
    const [likeCnt, setLikeCnt] = useState(0);
    const [cartCnt, setCartCnt] = useState(0);
    useEffect(() => {
        // Фильтруем только те товары, у которых в лайках есть id нашего пользователя - id берем из ls, ибо мы про него забыли))
        setLikeCnt(serverGoods.filter(el => el.likes.includes(localStorage.getItem("rockId"))).length)
    }, [serverGoods]);

    const logIn = (e) => {
        e.preventDefault();
        // setUser("lk-band");
        // localStorage.setItem("rockUser", "lk-band");
        setModalActive(true);
    }
    return	<header>
		<nav className="navbar navbar-expand-md navbar-warning bg-warning" aria-label="Eighth navbar example">
			<div className="container">
				<Link to="/" className="navbar-brand"><Logo/></Link>
				<Search arr={serverGoods} />

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="col-md-2 ms-3 text-end">
					<div className="collapse navbar-collapse">
						{user && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link to="/add" className="nav-link" title="Добавить товар">
										<PlusCircle size="24"/>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/favorites" className="nav-link position-relative" title="Избранное">
										<Heart size="24" />
											<span className="position-absolute top-end translate-middle badge text-bg-success rounded">
												{likeCnt}
											</span>
									</Link>
								</li>
								<li className="nav-item position-relative">
									<Link to="/" className="nav-link" title="Корзина">
										<Bag size="24"/>
										<span className="position-absolute top-end translate-middle badge text-bg-success rounded">
											{cartCnt}
										</span>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/profile" className="nav-link" title="Войти">
										<img src={profile} class="" alt="profile"/>
									</Link>
								</li>
						</ul>}
						{!user && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="" className="nav-link" onClick={logIn} title="Войти">
									<BoxArrowInRight size="24"/>
								</Link>
							</li>
						</ul>}
					</div>
				</div>
			</div>
		</nav>
	</header>
}

export default Header;