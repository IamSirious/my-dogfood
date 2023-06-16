import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Ctx from "../context";
import UpdatedInput from "../components/UpdatedInput";

import Breadcrumb from "../components/Breadcrumb";

import { Button, Container, Card, Image, ListGroup, Row, Col, Figure } from 'react-bootstrap';
import { BoxArrowLeft, DoorOpenFill } from "react-bootstrap-icons";

const Profile = ({ setUser }) => {
	const navigate = useNavigate();
	const { api, baseData } = useContext(Ctx);
	const [userData, setUserData] = useState({});
	const [inpName, setInpName] = useState(false);
	const [inpAbout, setInpAbout] = useState(false);
	const [inpGroup, setInpGroup] = useState(false);
	const [inpAvatar, setInpAvatar] = useState(false);

	const updUser = (name, val) => {
		let body = {
			name: userData.name,
			about: userData.about,
			group: userData.group
		}
		if (name === "avatar") {
			body =	{avatar: userData.avatar};
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
							<Card.Body className="py-0">
								<ListGroup variant="flush">
									<ListGroup.Item className="mb-2">
										<UpdatedInput
											val={userData.name}
											isActive={inpName}
											changeActive={setInpName}
											upd={updUser}
											name="name"
										/>
									</ListGroup.Item>

									<ListGroup.Item className="my-2">
										<Link to={`mailto:${userData.email}`}>{userData.email}</Link>
									</ListGroup.Item>

									<ListGroup.Item className="my-2">
										<UpdatedInput
											val={userData.group}
											isActive={inpGroup}
											changeActive={setInpGroup}
											upd={updUser}
											name="group"
										/>
									</ListGroup.Item>

									<ListGroup.Item className="my-2">
										<UpdatedInput
											val={userData.about}
											isActive={inpAbout}
											changeActive={setInpAbout}
											upd={updUser}
											name="about"
										/>
									</ListGroup.Item>
								</ListGroup>
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

