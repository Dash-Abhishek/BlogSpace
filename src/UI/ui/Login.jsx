import React from 'react';
// import { Link, Redirect } from "react-router-dom";
import Loader from './Popovers/Loader';
import { AuthFormContainer, Form } from './Common/AuthStyling';

const Login = ({ login, loading, toggleForm }) => {
	return (
		<AuthFormContainer>
            <Loader open={ loading } message="Authenticating..." />
			<Form onSubmit={login} autoComplete="on">
				<h6>Blogspace</h6>
				<input type="email" name="email" placeholder="Login id"/>
				<input type="password" name="password" placeholder="Password"/>
				<button type="submit" disabled={loading} >
					LOGIN
				</button>
				<span>Not registered? <a href="#" onClick={ () => toggleForm() }>Register</a></span>
			</Form>
		</AuthFormContainer>
	);
}

export default Login;
