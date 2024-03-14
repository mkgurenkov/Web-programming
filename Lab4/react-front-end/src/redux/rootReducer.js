import {combineReducers} from "redux";
import {signInReducer} from "./signIn/signInReducer";
import {signUpReducer} from "./signUp/signUpReducer";
import {mainFormReducer} from "./mainForm/mainFormReducer";
import {canvasReducer} from "./canvas/canvasReducer";
import {tableReducer} from "./table/tableReducer";
import {appReducer} from "./app/appReducer";

export const rootReducer = combineReducers({
    signInReducer,
    signUpReducer,
    mainFormReducer,
    canvasReducer,
    tableReducer,
    appReducer
});