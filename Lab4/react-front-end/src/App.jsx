import {Routes, Route, BrowserRouter as Router, useNavigate, Navigate} from "react-router-dom";
import {StartPage} from "./startPage/StartPage";
import {MainPage} from "./mainPage/MainPage";
import {NotFoundPage} from "./NotFoundPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAuthorisationStatus, getUsername} from "./redux/app/appActionCreators";


function App() {
    const isAuthorised = useSelector(state => state.appReducer.authorisationStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthorisationStatus());
        dispatch(getUsername());
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/start-page" element={<StartPage isAuthorised={isAuthorised}/>}/>
                <Route path="/main-page" element={<MainPage isAuthorised={isAuthorised}/>}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </Router>
    );
}

export default App;
