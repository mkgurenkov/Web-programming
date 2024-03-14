import {SET_AUTHORISATION_STATUS, SET_USERNAME} from "./appActions";

const initialState = {
    authorisationStatus: undefined,
    username: undefined
}
export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTHORISATION_STATUS:
            return {
                ...state,
                authorisationStatus: action.authorisationStatus
            };
        case SET_USERNAME:
            return {
                ...state,
                username: action.username
            };
        default: return state;
    }
}