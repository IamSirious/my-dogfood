import {useState} from "react";
import Promo from "./components/Promo/Promo"; // Promo.jsx
import Card from "./components/Card"; // index.jsx
import {Header, Footer} from "./components/General";
import Modal from "./components/Modal";
import cardsData from "./assets/data"; // data.json

import Search from "./components/Search";

const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия биологических экспериментов, включавших проведение исследований по возможности полётов на геофизических и космических ракетах живых существ, наблюдение за поведением высокоорганизованных животных в условиях таких полётов, а также, изучение сложных явлений в околоземном пространстве."
text = text.match(/[^\s,.]+/g);

const rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while(n--) {
    adds.push({
        text: `${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)}`,
        pic: !!Math.round(Math.random()), // !!0 => false - !!1 => true
        sizes: sizes[rand(sizes.length)]
    })
}

const App = () => {
    const [goods, setGoods] = useState(cardsData);
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <Header 
                user={user} 
                setUser={setUser} 
                setModalActive={setModalActive}
            />
            <div className="container">
                <Search arr={cardsData} upd={setGoods}/>
                {goods.map((el, i) => <Card
                    key={i}
                    img={el.pictures}
                    name={el.name}
                    price={el.price}
                />)}
                {adds.map((el,i) => <Promo key={i} {...el} type={el.sizes}/>)}
            </div>
            <Footer/>
            <Modal 
                active={modalActive} 
                setActive={setModalActive}
            />
        </>
    )
    // </div>
}

export default App;