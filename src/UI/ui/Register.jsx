import React from 'react';
// import { Link } from "react-router-dom";
import Loader from './Popovers/Loader';
// import styled from 'styled-components';
import { AuthFormContainer, Form } from './Common/AuthStyling';

const Register = ({ register, loading, toggleForm }) => {
	return (
		<AuthFormContainer className="login__register">
            <Loader open={ loading } message="Loading..." />
			<Form onSubmit={register} autoComplete="on" >
				<h6>Blogspace</h6>
				<input type="text" name="name" placeholder="Full Name" />
				<input type="email" name="email" placeholder="Login ID" />
				<input type="text" name="phoneNum" placeholder="Phone Number" />
				<input type="password" name="password" placeholder="Password" />
				<button type="submit" >REGISTER</button>
				<span>Already registered? <a href="#" onClick={ () => toggleForm() }>Login</a></span>
			</Form>
		</AuthFormContainer>
	);
}

export default Register;