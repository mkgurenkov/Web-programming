import React, {useState} from "react"
import {SignInForm} from "./SignInForm";
import {SignUpForm} from "./SignUpForm";
import {Navigate} from "react-router-dom";
import { Button } from 'primereact/button';
import {Message} from "primereact/message";








export function StartPage({isAuthorised}) {
    if (isAuthorised === undefined) {return (<div>Loading</div>);}
    if (!isAuthorised) {
        const [signInButtonClicked, setSignInButtonClicked] = useState(false);
        const [signUpButtonClicked, setSignUpButtonClicked] = useState(false);

        function handleSignInButtonClick() {
            setSignInButtonClicked(true);
            setSignUpButtonClicked(false);
        }

        function handleSignUpButtonClick() {
            setSignUpButtonClicked(true);
            setSignInButtonClicked(false);
        }

        return(
            <div>
                <p>StartPage</p>
                <Button onClick={handleSignInButtonClick} label="sign in" />
                <Button onClick={handleSignUpButtonClick} label="sign up" />
                {signInButtonClicked && <SignInForm isAuthorised={isAuthorised}/>}
                {signUpButtonClicked && <SignUpForm isAuthorised={isAuthorised}/>}
            </div>
        );
    } else {
        return <Navigate to="/main-page" />
    }
}