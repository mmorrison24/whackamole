import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";

import firebase from "./firebase/firebase";


function App() {

	const [user, setUser] = useState(false);

	firebase.auth().onAuthStateChanged(user => {
		setUser(user);
	});


	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/login" render={() => <Login user={user}/>}/>
					<Route path="/register" render={() => <Register user={user}/>}/>
					<Route path="/" render={() => <Home user={user}/>}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
