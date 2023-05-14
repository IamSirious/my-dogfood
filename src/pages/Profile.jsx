import { BoxArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import { Button, Card, Container } from 'react-bootstrap';

const Profile = ({ user, color, setUser }) => {
    const navigate = useNavigate();

    const captionStyle = {
        fontWeight: "bold",
        color: color
    }
    
    const logOut = (e) => {
        e.preventDefault();
        setUser("")// setUser() => setUser(null) 
        localStorage.removeItem("rockUser");
        localStorage.removeItem("rockToken");
        localStorage.removeItem("rockId");
        navigate("/");
        // useNavigate()("/")
    }

	return (
		<Container>
			<Card className="my-4 border-0">
				<Card.Header as="h5">Личный кабинет</Card.Header>
				<Card.Body>
					<Card.Title>
						Добро пожаловать,&nbsp;
						<span style={captionStyle}>{user}</span>
						!
					</Card.Title>
					<Card.Text>
						Здесь находится информация о вас.
					</Card.Text>
					<Button variant="primary" onClick={logOut} title="Выйти"><BoxArrowLeft/></Button>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Profile;