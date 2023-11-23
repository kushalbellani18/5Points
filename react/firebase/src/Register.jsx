import React from 'react';
import { useNavigate } from "react-router-dom";
import {app, auth} from "./firebase-config";
import {createUserWithEmailAndPassword} from "firebase/auth";

function Register() {
	var navigate = useNavigate();

	const handleRegister = (e) => {
		try {
			console.log("HELLO");
			const email = e.target.email.value;
			const password = e.target.password.value;

			const response = createUserWithEmailAndPassword(auth, email, password);
			const user = response.user;

			console.log("Added user: ", user);
			console.log("DONE???");

			navigate('/login');
		} catch (err) {
			console.log("====================");
			console.log(err.code);
			console.log(err);
			console.log("====================");
		}
	};

	return(
	<>
		<h1> Register </h1>
		<hr />
		<form onSubmit={(e) => handleRegister(e)}>
			Email: <input type="text" name="email" /> <br /><br />
			Password: <input type="password" name="password" /> <br /><br />
			<input type="submit" value="Register" />
		</form>

		{console.log("END")}
	</>
	);
};

export default Register;
