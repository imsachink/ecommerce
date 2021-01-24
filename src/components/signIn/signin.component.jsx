import React, { Component } from 'react';
import {SignInWithGoogle} from "../../firebase/firebase.utils";

import "./signin.styles.scss"; 
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state={
            email:'',
            password:''
        }

    }

        handleChange = (event) => {
       const {value,name} = event.target;
        this.setState({[name]:value} )};
    
        handleSubmit = event => {
            event.preventDefault();
            this.setState({email: '', password:''});
        }
      

          

    render() {
        return (
            <div className="Sign-in">
                <h2>I Already Have a Account</h2>
                <span>Sign in with email and password</span>
            
            <form onSubmit={this.handleSubmit}>
            <FormInput type="email"  value={this.state.email}  label='Email' handleChange={this.handleChange}  name="Email" required/>
            <FormInput  type="password" value={this.state.password} label='P~assword' handleChange={this.handleChange}  name="Password" required/>
            <div className="buttons">   
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>{''}Sign in with Google{''}</CustomButton>
            </div>
            
            </form>
            
            </div>

        );
    }
}

export default SignIn;
