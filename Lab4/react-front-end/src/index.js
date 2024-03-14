import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
import {rootReducer} from "./redux/rootReducer"
import {Provider} from "react-redux";
import { PrimeReactProvider} from 'primereact/api';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-teal/theme.css";



const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <PrimeReactProvider>
                <App/>
            </PrimeReactProvider>
        </Provider>
);