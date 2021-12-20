import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import GoogleButton from "react-google-button";

import {
    SignInContainer,
    SignInTitle,
    ButtonsBar
} from './sign-in.styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();
    
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value });
    };

    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange} 
                    label='email'
                    required 
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={password} 
                    handleChange={handleChange}
                    label='password' 
                    required 
                />
                <ButtonsBar>
                    <GoogleButton
                        onClick={googleSignInStart}
                        isgooglesignin='true'>
                    </GoogleButton>
                    <CustomButton type='submit'> Sign in </CustomButton>
                </ButtonsBar>
            </form>
        </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);