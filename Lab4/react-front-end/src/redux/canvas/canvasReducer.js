import {
    SET_X_VALUE_CANVAS,
    SET_Y_VALUE_CANVAS,
    SET_R_VALUE_CANVAS,
    VALIDATE_COORDINATES_CANVAS,
} from "./canvasActions"
import {EMPTY_R, WRONG_RANGE} from "../errors";

const initialState = {
    x: {value: 0, valid: true, error: ""},
    y: {value: 0, valid: true, error: ""},
    r: {value: 0, valid: true, error: ""}
}
export function canvasReducer(state = initialState, action) {
    switch (action.type) {
        case SET_X_VALUE_CANVAS:
            return {
                ...state,
                x: {value: getCanvasX(action.x), valid: true, error: ""}
            };
        case SET_Y_VALUE_CANVAS:
            return {
                ...state,
                y: {value: getCanvasY(action.y), valid: true, error: ""}
            };
        case SET_R_VALUE_CANVAS:
            return {
                ...state,
                r: {value: action.r, valid: true, error: ""}
            };
        case VALIDATE_COORDINATES_CANVAS:
            return {
                ...state,
                x: validateX(state.x),
                y: validateY(state.y),
                r: validateR(state.r)
            };
        default: return state;
    }
}

function getCanvasX(offsetX) {
    return (offsetX - (400 / 2)) / 40;
}
function getCanvasY(offsetY) {
    return ((offsetY - (400 / 2))*(-1)) / 40;
}
function validateX(x) {
    if (x.value > 4 || x.value < -4) {
        return { value: x.value, valid: false, error: WRONG_RANGE};
    } else {
        return { value: x.value, valid: true};
    }
}
function validateY(y) {
    if (y.value <= -3 || y.value >= 3) {
        return { value: y.value, valid: false, error: WRONG_RANGE};
    } else {
        return { value: y.value, valid: true};
    }
}
function validateR(r) {
    if (r.value === 0) {
        return { value: r.value, valid: false, error: EMPTY_R};
    } else {
        return { value: r.value, valid: true};
    }
}