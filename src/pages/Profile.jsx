import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col, Figure } from 'react-bootstrap';
import { BoxArrowLeft } from "react-bootstrap-icons";

import Breadcrumb from "../components/Breadcrumb";

const Profile = ({ user, setUser, avatar, color, email, group }) => {
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
		<Container className="mt-3">
			<Breadcrumb/>
			<Card className="my-4 border-0">
				<Card.Header as="h5">Профиль</Card.Header>
				<Card.Body>
					<Card.Title>
						Добро пожаловать,&nbsp;
						<span style={captionStyle}>{user}</span>
						!
					</Card.Title>
					<Figure>
						<Figure.Image src={user.avatar}/>
					</Figure>
					<Card.Text>
						<a href={`mailto:${user.email}`}>{user.email}</a>
						<p>{user.about}</p>
					</Card.Text>
					<Button variant="warning" onClick={logOut} title="Выйти"><BoxArrowLeft/></Button>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Profile;



/* 		<Container>
			<Row>
				<Col xs={12} md={8}>
					<h1>Профиль</h1>
					<p className="profile-row">
						{!nameFlag 
							? <>
								<span className="display-4">{name}</span>
								<PencilSquare onClick={() => setNameFlag(true)}/>
							</>
							: <>
								<Form.Control type="text" value={name} required onChange={e => setName(e.target.value)}/>
								<Check2Square onClick={user} style={{color: "black"}}/>
								<XSquare onClick={() => {
									setName(user.name);
									setNameFlag(false);
								}}/>
							</>
						}
					</p>
					<p className="profile-row">
						{!textFlag 
							? <>
								<span className="display-6">{text}</span>
								<PencilSquare onClick={() => setTextFlag(true)}/>
							</>
							: <>
								<Form.Control type="text" value={text} required onChange={e => setText(e.target.value)}/>
								<Check2Square onClick={user} />
								<XSquare onClick={() => {
									setText(user.about);
									setTextFlag(false);
								}}/>
							</>
						}
					</p>
					<p className="profile-row"><a href={`mailto:${user.email}`}>{user.email}</a></p>
						{user.group && <p className="profile-row">{user.group}</p>}
						<p><a href="" onClick={logOut} style={{color: "black"}}><BoxArrowLeft/></a></p>
						
					</Col>
					<Col xs={12} md={4}>
						<p className="profile-row">
						{!imgFlag 
							? <>
								<PencilSquare onClick={() => setImgFlag(true)}/>
							</>
							: <>
								<Form.Control type="text" value={img} required onChange={e => setImg(e.target.value)}/>
								<Check2Square onClick={img} />
								<XSquare onClick={() => {
									setImg(user.avatar);
									setImgFlag(false);
								}}/>
							</>
						}
						</p>
						<Image src={img} alt={name} className="w-100"/>
					</Col>
				</Col>	
			</Row>
		</Container> */