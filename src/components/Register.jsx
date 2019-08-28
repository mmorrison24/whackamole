import React, {useState} from "react";
import {Form, Input, Label, FormGroup, Button, Alert} from "reactstrap";
import {Redirect, Link} from "react-router-dom";
import {auth, firestore} from "../firebase/firebase";

const Register = ({user}) => {

	const [registerData, setRegisterData] = useState({
		name: "",
		email: "",
		password: ""
	});

	const [error, setError] = useState(null);
	const onChange = e =>
		setRegisterData({
			...registerData,
			[e.target.name]: e.target.value
		});

	const onSubmit = async e => {
		e.preventDefault();
		try {
			const res = await auth.createUserWithEmailAndPassword(email, password);
			firestore
				.collection("users")
				.doc(res.user.uid)
				.set({
					name,
					email,
					score: 0
				});
		} catch (err) {
			setError(err);
			setTimeout(() => setError(false), 1000);
		}
	};

	if (user) return <Redirect to="/"/>;
	const {name, email, password} = registerData;

	return (
		<div className="main">
			{error && <Alert color="danger">{error.message}</Alert>}
			<Form className="w-25 bg-light p-4 border shadow" onSubmit={onSubmit}>

				<FormGroup>
					<Label>Name</Label>
					<Input
						type="text"
						name="name"
						onChange={onChange}
						value={name}
						required
					/>
				</FormGroup>

				<FormGroup>
					<Label>Email</Label>
					<Input
						type="email"
						name="email"
						onChange={onChange}
						value={email}
						required
					/>
				</FormGroup>

				<FormGroup>
					<Label>Password</Label>
					<Input
						type="password"
						name="password"
						onChange={onChange}
						value={password}
						required
					/>
				</FormGroup>

				<FormGroup className="d-flex justify-content-between">
					<Button color="link" tag={Link} to="/login">
						Login
					</Button>
					<Button color="primary">Sign Up</Button>
				</FormGroup>
			</Form>
		</div>
	);
}

export default Register;
