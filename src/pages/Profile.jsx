import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Ctx from "../context";
import UpdatedInput from "../components/UpdatedInput";

import Breadcrumb from "../components/Breadcrumb";

import { Button, Container, Card, Image, Row, Col, Figure } from 'react-bootstrap';
import { BoxArrowLeft, DoorOpenFill } from "react-bootstrap-icons";

const Profile = ({ setUser }) => {
	const navigate = useNavigate();
	const { api, baseData } = useContext(Ctx);
	const [userData, setUserData] = useState({});
	const [inpName, setInpName] = useState(false);
	const [inpAbout, setInpAbout] = useState(false);
	const [inpAvatar, setInpAvatar] = useState(false);

	const updUser = (name, val) => {
		let body = {
			name: userData.name,
			about: userData.about
		}
		if (name === "avatar") {
			body =  {avatar: userData.avatar};
		}
		body[name] = val;
		api.updProfile(body, name === "avatar").then(data => setUserData(data));
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

	useEffect(() => {
		api.getProfile()
			.then(data => {
				setUserData(data);
			})
	}, [])

	return (
		<Container className="h-100 mt-3">
			<Breadcrumb/>
			{userData?.name && <>
				<Card className="my-3" border="warning">
					<Card.Header as="h5" className="bg-warning" border="warning">Профиль</Card.Header>
					<Row className="g-0 my-3 mx-3">
						<Col md="4">
							<Figure>
								<Figure.Image thumbnail
									src={userData.avatar}
									alt={userData.email}
									width={300}
									height={300}
								/>
								<Figure.Caption>
									 <UpdatedInput
										 val={userData.avatar}
										 isActive={inpAvatar}
										 changeActive={setInpAvatar}
										 upd={updUser}
										 name="avatar"
									 />
								</Figure.Caption>
							</Figure>
						</Col>
						<Col md="8">
							<Card.Body>
								<Card.Title>
									<div><UpdatedInput
										val={userData.name}
										isActive={inpName}
										changeActive={setInpName}
										upd={updUser}
										name="name"
									/></div>
								</Card.Title>
								<Card.Text>
									<Link to={`mailto:${userData.email}`}>{userData.email}</Link>
									<div><UpdatedInput
										val={userData.about}
										isActive={inpAbout}
										changeActive={setInpAbout}
										upd={updUser}
										name="about"
									/></div>
								</Card.Text>
								
							</Card.Body>
						</Col>
					</Row>
					<Card.Footer>
						<div className="d-grid gap-2 col-3 mx-auto">
							<Button variant="outline-danger" onClick={logOut}><DoorOpenFill/>&nbsp;Выйти</Button>
						</div>
					</Card.Footer>
				</Card>
			</>}
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