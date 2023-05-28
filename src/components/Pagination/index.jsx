import Item from "./Item"
import "./style.css"
import { Container } from 'react-bootstrap';
/* import { Container, Button, ButtonGroup, ButtonToolbar, Pagination } from 'react-bootstrap'; */

const Pagination = ({hk}) => {
	let items = [];
	for (let i = 0; i < hk.max; i++) {
		items.push(<Item
			val={i+1}
			onClick={() => {hk.step(i+1)}}
			active={hk.current === i+1}
			key={"pag_" + i}
		/>)
	}
	return	<Container className="mt-3">
		<div className="pagination">
			<Item start onClick={() => {hk.step(1)}}/>
			<Item prev onClick={hk.prev}/>
			{items}
			<Item next onClick={hk.next}/>
			<Item end onClick={() => {hk.step(hk.max)}}/>
		</div>
	</Container>
}

export default Pagination;


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