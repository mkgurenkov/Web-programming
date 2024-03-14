import {
    SET_ERROR_SIGN_IN,
    SET_LOGIN_VALUE_SIGN_IN,
    SET_PASS_VALUE_SIGN_IN,
    VALIDATE_CREDENTIALS_SIGN_IN
} from "./signInActions";
import {getAuthorisationStatus, getUsername} from "../app/appActionCreators";
import {SET_ERROR_SIGN_UP} from "../signUp/signUpActions";

export function setLoginValueSignIn(login) {
    return {
        type: SET_LOGIN_VALUE_SIGN_IN,
        login,
    };
}
export function setPassValueSignIn(pass) {
    return {
        type: SET_PASS_VALUE_SIGN_IN,
        pass,
    };
}
export function validateCredentialsSignIn() {
    return { type: VALIDATE_CREDENTIALS_SIGN_IN };
}
export function postDataSignIn(login, passwordHash) {
    return async (dispatch) => {
        const response = await fetch('http://localhost:8080/start-page?mode=sign_in', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({login: login, passwordHash: passwordHash})
        });

        const data = await response.json();
        if (response.ok) {
            dispatch({ type: 'SET_AUTHORISATION_STATUS', authorisationStatus: data.authorisationStatus });
            dispatch({ type: 'SET_USERNAME', username: data.username });
            dispatch({type: SET_ERROR_SIGN_IN}); //но это не значит что мы обязательно ее выводим на странице! но в теории она может быть поэтому сеттим, отображение настраивается на странице
        }
    };
}