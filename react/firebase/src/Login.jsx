import React from "react";
import { useNavigate } from "react-router-dom";
import {app, auth} from "./firebase-config";
import {signInWithEmailAndPassword} from "firebase/auth";

function Login() {
	var navigate = useNavigate();

	const handleSubmit =  (e) => {
		e.preventDefault();

		console.log("");
		console.log("pass: ", e.target.password.value);
		console.log("ema: ", e.target.email.value);

		try {
			 signInWithEmailAndPassword(auth, "user1@gmail.com", "1234567890")
			 .then((userCredential) => {
			// Signed in 
				    const user = userCredential.user;
		alert("Login success");
				    navigate('/home');
				  });
			 alert("Login");

		} catch (error) {
			if (error.code === 'auth/network-request-failed') {
				console.error('Network request failed. Please check your internet connection.');
			} else {
				console.error('Login error:', error.message);
			}
		}

	};

	return (
	<>
		<h1> Hello </h1>
		<hr />
		<form onSubmit={(e)=>handleSubmit(e)}>
			Email: <input type="text" name="email" /> <br /> <br />
			Password: <input type="password" name="password" /> <br /><br />
			<input type="submit" value="Login"/>
		</form>
	</>
	);
};

export default Login;

