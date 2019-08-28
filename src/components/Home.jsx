import React, {useState, useRef, useEffect} from "react";
import {Form, Input, Label, FormGroup, Button, Alert} from "reactstrap";
import {Redirect} from "react-router-dom";

import {auth, firestore} from "../firebase/firebase";

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
		<div className="main">

			<div className="logout-btn">
				<Button color="danger" onClick={() => auth.signOut()}>
					logout
				</Button>
			</div>

			{showAlert && <Alert color="success">Score Updated !</Alert>}

			<Form className="w-25 bg-light p-4 border shadow" onSubmit={onSubmit}>
				<FormGroup>
					<Label>Welcome {data.name}</Label>
				</FormGroup>
				<FormGroup>
					<Label>score</Label>
					<Input
						type="text"
						defaultValue={data.score}
						innerRef={scoreRef}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Button color="primary">Update Score</Button>
				</FormGroup>
			</Form>
		</div>
	);
}

export default Home
