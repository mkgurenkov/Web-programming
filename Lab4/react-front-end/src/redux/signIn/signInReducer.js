import {
    SET_ERROR_SIGN_IN,
    SET_LOGIN_VALUE_SIGN_IN,
    SET_PASS_VALUE_SIGN_IN,
    VALIDATE_CREDENTIALS_SIGN_IN
} from "./signInActions";
import {EMPTY_LOGIN, EMPTY_PASS, SHORT_PASS, SIGN_IN_ERROR} from "../errors";

const initialState = {
    login: {value: "", valid: true, error: ""},
    pass: {value: "", valid: true, error: ""},
    signInError: ""
}
export function signInReducer(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_CREDENTIALS_SIGN_IN:
            return {
                ...state,
                login: validateLogin(state.login),
                pass: validatePass(state.pass)
            };
        case SET_LOGIN_VALUE_SIGN_IN:
            return {
                ...state,
                login: {value: action.login, valid: state.login.valid, error: state.login.error },
            };
        case SET_PASS_VALUE_SIGN_IN:
            return {
                ...state,
                pass: {value: action.pass, valid: state.pass.valid, error: state.pass.error}
            };
        case SET_ERROR_SIGN_IN:
            return {
                ...state,
                signInError: SIGN_IN_ERROR
            };
        default: return state;
    }
}


function validateLogin(login) {
    if (login.value.trim() === "") {
        return {value: login.value, valid: false, error: EMPTY_LOGIN };
    } else {
        return {value: login.value, valid: true, error: "" };
    }
}

function validatePass(pass) {
    if (pass.value.trim() === "") {
        return {value: pass.value, valid: false, error: EMPTY_PASS};
    } else if (pass.value.length <= 3) {
        return {value: pass.value, valid: false, error: SHORT_PASS};
    } else {
        return {value: pass.value, valid: true, error: "" };
    }
}