import {
    LOAD_DATA_TABLE,
} from "./tableActions";

export function loadDataTable() {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8080/main-page', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });


            const data = await response.json();
            dispatch({ type: 'LOAD_DATA_TABLE', data: data });
        } catch (error) {
            console.log(error);
            // dispatch({ type: 'LOAD_DATA_TABLE', data: error.message });
        }
    };
}

export function filterDataByUsername(username, data) {
    const newData = data.filter(row => row.username === username);
    return { type: "SET_DATA", data: newData};
}

export function setData(data) {
    return { type: "SET_DATA", data: data};
}