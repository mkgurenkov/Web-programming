import {ADD_DATA, LOAD_DATA_TABLE, SET_DATA} from "./tableActions";

const initialState = {
    data: []
}
export function tableReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_DATA_TABLE:
            return {
                ...state,
                data: action.data
            };
        case ADD_DATA:
            return {
                ...state,
                data: [...(state.data), (action.data)]
            };
        case SET_DATA:
            return {
                ...state,
                data: action.data
            };
        default: return state;
    }
}