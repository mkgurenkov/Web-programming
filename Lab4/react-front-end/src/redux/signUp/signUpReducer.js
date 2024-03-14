import {
    VALIDATE_CREDENTIALS_SIGN_UP,
    SET_LOGIN_VALUE_SIGN_UP,
    SET_PASS_VALUE_SIGN_UP,
    SET_ERROR_SIGN_UP
} from "./signUpActions";
import {EMPTY_LOGIN, EMPTY_PASS, SHORT_PASS, SIGN_UP_ERROR} from "../errors";

const initialState = {
    login: {value: "", valid: true, error: ""},
    pass: {value: "", valid: true, error: ""},
    signUpError: ""
}
export function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_CREDENTIALS_SIGN_UP:
            return {
                ...state,
                login: validateLogin(state.login),
                pass: validatePass(state.pass)
            };
        case SET_LOGIN_VALUE_SIGN_UP:
            return {
                ...state,
                login: {value: action.login, valid: state.login.valid, error: state.login.error}
            };
        case SET_PASS_VALUE_SIGN_UP:
            return {
                ...state,
                pass: {value: action.pass, valid: state.pass.valid, error: state.pass.error}
            };
        case SET_ERROR_SIGN_UP:
            return {
                ...state,
                signUpError: SIGN_UP_ERROR
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