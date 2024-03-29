import React, {useState, useRef, useEffect} from "react";
import {Label, Button, Alert} from "reactstrap";
import {Redirect} from "react-router-dom";

import {auth, firestore} from "../firebase/firebase";
import { Container, Row, Col } from 'reactstrap';
import Game from "../components/Game";

const Home = ({user}) => {

	const scoreRef = useRef(null);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			const doc = await firestore
				.collection("users")
				.doc(user.uid)
				.get();
			setData({id: doc.id, ...doc.data()});

			setLoading(false);
		};

		if (user) getData();
	}, [user]);

	const onSubmit = async e => {
		e.preventDefault();
		await firestore
			.collection("users")
			.doc(user.uid)
			.update({
				score: scoreRef.current.value
			});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 1000);
	};

	if (!user) return <Redirect to="/login"/>;
	if (loading) return null;

	return (


		<Container  className="main">
			<div className="logout-btn">
				<Button color="danger" onClick={() => auth.signOut()}>
					logout
				</Button>
			</div>

			{showAlert && <Alert color="success">Score Updated !</Alert>}

			<div children={'col-12'}>
				<Label><h1>Whack :: {data.name}</h1></Label>
			</div>
			<Row className="mt-5">
				<Col>
					<Game/>
				</Col>
			</Row>
		</Container>
	);
}

export default Home
