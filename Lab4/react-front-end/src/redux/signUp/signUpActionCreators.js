import {
    SET_ERROR_SIGN_UP,
    SET_LOGIN_VALUE_SIGN_UP,
    SET_PASS_VALUE_SIGN_UP,
    VALIDATE_CREDENTIALS_SIGN_UP
} from "./signUpActions";
import {getAuthorisationStatus, getUsername} from "../app/appActionCreators";

export function validateCredentialsSignUp() {
    return { type: VALIDATE_CREDENTIALS_SIGN_UP };
}
export function setLoginValueSignUp(login) {
    return {
        type: SET_LOGIN_VALUE_SIGN_UP,
        login,
    };
}
export function setPassValueSignUp(pass) {
    return {
        type: SET_PASS_VALUE_SIGN_UP,
        pass,
    };
}
export function postDataSignUp(login, passwordHash) {
    return async (dispatch) => {
        const response = await fetch('http://localhost:8080/start-page?mode=sign_up', {
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
            dispatch({type: SET_ERROR_SIGN_UP});//но это не значит что мы обязательно ее выводим на странице! но в теории она может быть поэтому сеттим, отображение настраивается на странице
        }
    };
}