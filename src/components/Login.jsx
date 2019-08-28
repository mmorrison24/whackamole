import React, {useState} from "react";
import {Form, Input, Label, FormGroup, Button, Alert} from "reactstrap";
import {auth} from "../firebase/firebase";
import {Redirect, Link} from "react-router-dom";

const Login = ({user}) => {

	const [loginData, setLoginData] = useState({
		email: "",
		password: ""
	});

	const [error, setError] = useState(null);

	const onChange = e =>
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value
		});
	const onSubmit = async e => {
		e.preventDefault();
		try {
			const {email, password} = loginData;
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			setError(err);
			setTimeout(() => setError(false), 1000);
		}
	};

	const {email, password} = loginData;
	if (user) return <Redirect to="/"/>;

	return (
		<div className="main">
			{error && <Alert color="danger">{error.message}</Alert>}

			<Form className="w-25 bg-light p-4 border shadow" onSubmit={onSubmit}>

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
					<Button color="link" to="/register" tag={Link}>
						Register
					</Button>
					<Button color="primary">login</Button>

				</FormGroup>
			</Form>
		</div>
	);
}

export default Login;
