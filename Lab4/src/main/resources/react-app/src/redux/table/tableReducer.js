import { VALIDATE_COORDINATES_MAIN_FORM, SET_X_VALUE_MAIN_FORM, SET_Y_VALUE_MAIN_FORM, CHANGE_R_VALUE_MAIN_FORM } from "./mainFormActions";
import {EMPTY_X, EMPTY_Y, WRONG_RANGE_Y, WRONG_TYPE_Y, EMPTY_R } from "../errors";

const initialState = {
    x: {value: null, valid: true, error: ""},
    y: {value: "", valid: true, error: ""},
    r: {value: 0, valid: true, error: ""}
}
export function mainFormReducer(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_COORDINATES_MAIN_FORM:
            return {
                ...state,
                x: validateX(state.x),
                y: validateY(state.y),
                r: validateR(state.r)
            };
        case SET_X_VALUE_MAIN_FORM:
            return {
                ...state,
                x: {value: action.x, valid: state.x.valid, error: state.x.error}
            };
        case SET_Y_VALUE_MAIN_FORM:
            return {
                ...state,
                y: {value: action.y, valid: state.y.valid, error: state.y.error}
            };
        case CHANGE_R_VALUE_MAIN_FORM:
            return {
                ...state,
                r: change({value: state.r.value, valid: state.r.valid, error: state.r.error}, action.btnId)
            };
        default: return state;
    }
}

function change(r, btnId) {
    let rValue;
    if (btnId === "incBtn") {
        if (r.value === 5) {
            rValue = 0;
        } else {
            rValue = r.value + 1;
        }
    } else {
        if (r.value === 0) {
            rValue = 5;
        } else {
            rValue = r.value - 1;
        }
    }
    return {value: rValue, valid: r.valid, error: r.error};
}

function validateX(x) {
    if (x.value == null) {
        return { value: x.value, valid: false, error: EMPTY_X };
    } else {
        return { value: x.value, valid: true, error: "" };
    }
}
function validateY(y) {
    if (y.value.trim() === "") {
        return { value: y.value, valid: false, error: EMPTY_Y };
    } else if (isNaN(y.value)) {
        return { value: y.value, valid: false, error: WRONG_TYPE_Y };
    } else if (y.value <= -3 || y.value >= 3) {
        return { value: y.value, valid: false, error: WRONG_RANGE_Y };
    } else {
        return { value: y.value, valid: true, error: "" };
    }
}
function validateR(r) {
    if (r.value === 0) {
        return { value: r.value, valid: false, error: EMPTY_R };
    } else {
        return { value: r.value, valid: true, error: "" };
    }
}