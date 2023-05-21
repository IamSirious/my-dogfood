import { useState } from "react";
import { Accordion, Container } from 'react-bootstrap';

const AccordionFAQ = ({children, title}) => {
	const [selected, setSelected] = useState(false);
	
	function toggleAccordeonState () {
		setSelected(!selected);
	}
	
	return (
		<Container>
			<Accordion flush>
				<Accordion.Item eventKey="0" onClick={toggleAccordeonState}>
					<Accordion.Header><h6>{title}</h6></Accordion.Header>
					<Accordion.Body>
						{children}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	);
}

export default AccordionFAQ;