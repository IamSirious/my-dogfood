import Item from "./Item"
import "./style.css"
/* import { Container, Button, ButtonGroup, ButtonToolbar, Pagination } from 'react-bootstrap'; */

const Pagination = ({hk}) => {
    let items = [];
    for (let i = 0; i < hk.max; i++) {
        items.push(<Item
            val={i+1}
            onClick={() => {}}
            active={hk.current === i+1}
            key={i}
        />)
    }
	
/* 	let active = 1;
	let items = [];
	for (let number = 1; number <= hk.max; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active} onClick={() => {}}>
				{number}
			</Pagination.Item>,
		);
	}
    return <Pagination>
		<Pagination.Item start onClick={() => {}}/>
		<Pagination.Item prev onClick={() => {}}/>
		{items}
		<Pagination.Item next onClick={() => {}}/>
		<Pagination.Item end onClick={() => {}}/>
	</Pagination> */
		
    return <div className="pagination">
		<Item start onClick={() => {}}/>
		<Item prev onClick={() => {}}/>
		{items}
		<Item next onClick={() => {}}/>
		<Item end onClick={() => {}}/>
	</div>
}

export default Pagination;



/* 	return (
		<Pagination>
			<Pagination.First onClick={() => {}} />
			<Pagination.Prev onClick={() => {}} />
			{items}
			<Pagination.Next onClick={() => {}} />
			<Pagination.Last onClick={() => {}} />
		</Pagination>
	);
} */