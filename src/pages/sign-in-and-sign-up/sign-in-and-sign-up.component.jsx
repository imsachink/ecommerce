import React from 'react';

import "./sign-in-and-sign-up.style.scss";
import SignIn from "../../components/signIn/signin.component";
import SignUp from "../../components/sign-up/sign-up.component"

function SignInandSignUp() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInandSignUp;
