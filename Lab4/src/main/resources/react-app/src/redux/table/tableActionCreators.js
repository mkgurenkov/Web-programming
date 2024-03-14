import {
    CHANGE_R_VALUE_MAIN_FORM,
    SET_X_VALUE_MAIN_FORM,
    SET_Y_VALUE_MAIN_FORM,
    VALIDATE_COORDINATES_MAIN_FORM
} from "./mainFormActions";

export function validateCoordinatesMainForm() {
    return { type: VALIDATE_COORDINATES_MAIN_FORM };
}
export function setXValueMainForm(x) {
    return {
        type: SET_X_VALUE_MAIN_FORM,
        x,
    };
}
export function setYValueMainForm(y) {
    return {
        type: SET_Y_VALUE_MAIN_FORM,
        y,
    };
}
export function changeRValueMainForm(btnId) {
    return {
        type: CHANGE_R_VALUE_MAIN_FORM,
        btnId,
    };
}