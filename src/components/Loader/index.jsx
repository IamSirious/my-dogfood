import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
	return (
		<Spinner animation="border" variant="warning" size="lg" role="status" className="text-center">
			<span className="visually-hidden">Загрузка...</span>
		</Spinner>
	);
}

export default Loader;