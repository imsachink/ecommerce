import React, { Component } from 'react';
import {auth,SignInWithGoogle} from "../../firebase/firebase.utils";

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
    
        handleSubmit =async event => {
            event.preventDefault();
             const {email,password} = this.state;
            try{
                auth.signInWithEmailAndPassword(email,password);
                this.setState({email: '', password:''});
            }catch(error){
             console.log(error)
            }


           
        }
      

          

    render() {
        return (
            <div className="Sign-in">
                <h2>I Already Have a Account</h2>
                <span>Sign in with email and password</span>
            
            <form onSubmit={this.handleSubmit}>
            <FormInput type="email"  value={this.state.email}  label='email' handleChange={this.handleChange}  name="email" required/>
            <FormInput  type="password" value={this.state.password} label='password' handleChange={this.handleChange}  name="password" required/>
            <div className="buttons">   
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
            </div>
            
            </form>
            
            </div>

        );
    }
}

export default SignIn;
