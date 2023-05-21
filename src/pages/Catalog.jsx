import { useState, useContext } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";
import Ctx from "../context";

import { Button, Container } from 'react-bootstrap';

const Catalog = ({setServerGoods}) => {
    const {goods} = useContext(Ctx)
    const paginate = usePagination(goods, 20)
    const [sort, setSort] = useState(null)
    const filterSt = {
        gridColumnEnd: "span 4",
        display: "flex",
        gap: "20px"
    }
    const sortHandler = (vector) => {
        if (vector === sort) {
            setSort(null)
            // setServerGoods(old => [...old])
            goods.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        } else {
            setSort(vector)
            goods.sort((a, b) => {
                return vector === "up" ? (a.price - b.price) : (b.price - a.price)
            })
        }
    }

    return <Container>
		<div className="mb-3" style={{gridColumnEnd: "span 4"}}><Pagination hk={paginate} /></div>
        <div style={filterSt}>
            {/* Сортировка по числу price*/}
            <Button variant="warning"
                style={{backgroundColor: sort === "up" ? "orange" : "white"}}
                onClick={() => sortHandler("up")}
            >По возростанию цены</Button>{' '}
            <Button variant="warning"
                style={{backgroundColor: sort === "down" ? "orange" : "white"}}
                onClick={() => sortHandler("down")}
            >По убыванию цены</Button>{' '}
            {/* Фильтрация */}
            <Button variant="warning"
                style={{backgroundColor: sort === "new" ? "orange" : "white"}}
                onClick={() => sortHandler("new")}
            >Новинки</Button>{' '}
            <Button variant="warning"
                style={{backgroundColor: sort === "discount" ? "orange" : "white"}}
                onClick={() => sortHandler("discount")}
            >Скидки</Button>{' '}
        </div>
		<div className="album py-3">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
				{goods.map(g => <Card 
					key={g._id} 
					{...g} 
					img={g.pictures} 
					setServerGoods={setServerGoods}
				/>)}
			</div>
		</div>
		<div style={{gridColumnEnd: "span 4"}}><Pagination hk={paginate} /></div>
    </Container>
}

export default Catalog;