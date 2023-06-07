import Logo from "./Logo";
import { useState, useEffect, useContext } from "react";
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

import Ctx from "../../context";

const Header = ({user, setModalActive, serverGoods}) => {
    const [likeCnt, setLikeCnt] = useState(0);
    const [cartCnt, setCartCnt] = useState(0);
	const {basket} = useContext(Ctx);
    useEffect(() => {
        // Фильтруем только те товары, у которых в лайках есть id нашего пользователя - id берем из ls, ибо мы про него забыли))
        setLikeCnt(serverGoods.filter(el => el.likes.includes(localStorage.getItem("rockId"))).length)
    }, [serverGoods]);

    useEffect(() => {
        // let cnt = 0;
        // for (let i = 0; i < basket.length; i++) {
        //     cnt += basket[i].cnt
        // }
        // setCartCnt(cnt);
        setCartCnt(basket.reduce((acc, el) => acc + el.cnt, 0))
    }, [basket])

    const logIn = (e) => {
        e.preventDefault();
        // setUser("lk-band");
        // localStorage.setItem("rockUser", "lk-band");
        setModalActive(true);
    }
    return	<header>
		<nav className="navbar navbar-expand-md navbar-warning bg-warning" aria-label="Eighth navbar example">
			<Container>
				<Link to="/" className="navbar-brand"><Logo/></Link>
				<Search arr={serverGoods} />

				<Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample" aria-controls="navbarsExample" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</Button>
				
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
											<span className="position-absolute top-end translate-middle badge text-bg-success rounded-circle">
												{likeCnt}
											</span>
									</Link>
								</li>
								<li className="nav-item position-relative">
									<Link to="/basket" className="nav-link" title="Корзина">
										<Bag size="24"/>
											<span className="position-absolute top-end translate-middle badge text-bg-success rounded-circle">
												{cartCnt}
											</span>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/profile" className="nav-link" title="Войти">
										<img src={profile} className="" alt="profile"/>
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
			</Container>
		</nav>
	</header>
}

export default Header;