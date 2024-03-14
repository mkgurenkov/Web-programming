import {
    SET_R_VALUE_MAIN_FORM,
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
export function setRValueMainForm(r) {
    return {
        type: SET_R_VALUE_MAIN_FORM,
        r
    };
}
export function postDataMainForm(xValue, yValue, rValue) {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8080/main-page', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({x: xValue, y: yValue, r: rValue})
            });

            const data = await response.json();

            dispatch({ type: 'ADD_DATA', data: data });
        } catch (error) {
            console.log("error");
            // dispatch({ type: 'LOAD_DATA_TABLE', data: error.message });
        }
    };
}