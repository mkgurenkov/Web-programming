import {useDispatch, useSelector} from "react-redux";
import {
    postDataSignIn,
    setLoginValueSignIn,
    setPassValueSignIn,
    validateCredentialsSignIn
} from "../redux/signIn/signInActionCreators";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {Message} from "primereact/message";

export function SignInForm({isAuthorised}) {
    const CryptoJS = require('crypto-js');

    const [handleSubmitCalled, setHandleSubmitCalled] = useState(false);
    const [firstRender, setFirstRender] = useState(true);

    const dispatch = useDispatch();
    const loginValue = useSelector(state => state.signInReducer.login.value);
    const passValue = useSelector(state => state.signInReducer.pass.value);
    const loginIsValid = useSelector(state => state.signInReducer.login.valid);
    const loginError = useSelector(state => state.signInReducer.login.error);
    const passIsValid = useSelector(state => state.signInReducer.pass.valid);
    const passError = useSelector(state => state.signInReducer.pass.error);
    const signInError = useSelector(state => state.signInReducer.signInError);

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(validateCredentialsSignIn());
        setHandleSubmitCalled(!handleSubmitCalled);
    }

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false); // Устанавливаем флаг первого рендеринга в false
        } else {
            if (loginIsValid && passIsValid) {
                dispatch(postDataSignIn(loginValue, CryptoJS.SHA1(passValue).toString()));
            }
        }
    }, [handleSubmitCalled]);
    return (
        <div>
            Форма входа в систему
            <form onSubmit={handleSubmit}>
                <span className="p-float-label">
                    <InputText id="inputLogin" className={!loginIsValid && "p-invalid"} value={loginValue}
                               onChange={(event) => dispatch(setLoginValueSignIn(event.target.value))}/>
                    <label htmlFor="inputLogin">Введите логин</label>
                    <span>{!loginIsValid && <Message severity="error" text={loginError} />}</span>
                </span>
                <span className="p-float-label">
                    <Password inputId="inputPass" className={!passIsValid && "p-invalid"} value={passValue}
                              onChange={(event) => dispatch(setPassValueSignIn(event.target.value))} feedback={false}
                              toggleMask/>
                    <label htmlFor="inputPass">Введите пароль</label>
                    <span>{!passIsValid && <Message severity="error" text={passError} />}</span>
                </span>
                <Button label="submit"/>
            </form>
            <span>{!isAuthorised && signInError !== "" && <Message severity="error" text={signInError} />}</span>
        </div>
    );
}