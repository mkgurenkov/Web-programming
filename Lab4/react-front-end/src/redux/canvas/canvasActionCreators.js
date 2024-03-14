import {
    SET_R_VALUE_CANVAS,
    SET_X_VALUE_CANVAS,
    SET_Y_VALUE_CANVAS, VALIDATE_COORDINATES_CANVAS
} from "./canvasActions";

export function setXValueCanvas(x) {
    return {
        type: SET_X_VALUE_CANVAS,
        x
    };
}
export function setYValueCanvas(y) {
    return {
        type: SET_Y_VALUE_CANVAS,
        y
    };
}
export function setRValueCanvas(r) {
    return {
        type: SET_R_VALUE_CANVAS,
        r
    };
}
export function validateCoordinatesCanvas() {
    return {
        type: VALIDATE_COORDINATES_CANVAS,
    };
}
export function postDataCanvas(xValue, yValue, rValue) {
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