import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import firebase from "./firebase/firebase";


function App() {

  const [user, setUser] = useState(false);

  firebase.auth().onAuthStateChanged(user => {
    setUser(user);
  });


  return (
    <div className="App">

    </div>
  );
}

export default App;
