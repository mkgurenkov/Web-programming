import {useDispatch, useSelector} from "react-redux";
import {
    postDataSignUp,
    setLoginValueSignUp,
    setPassValueSignUp,
    validateCredentialsSignUp
} from "../redux/signUp/signUpActionCreators";
import React, {useEffect, useState} from "react";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import {Message} from "primereact/message";

export function SignUpForm({isAuthorised}) {
    const CryptoJS = require('crypto-js');

    const [handleSubmitCalled, setHandleSubmitCalled] = useState(false);
    const [firstRender, setFirstRender] = useState(true);

    const dispatch = useDispatch();
    const loginValue = useSelector(state => state.signUpReducer.login.value);
    const passValue = useSelector(state => state.signUpReducer.pass.value);
    const loginIsValid = useSelector(state => state.signUpReducer.login.valid);
    const loginError = useSelector(state => state.signUpReducer.login.error);
    const passIsValid = useSelector(state => state.signUpReducer.pass.valid);
    const passError = useSelector(state => state.signUpReducer.pass.error);
    const signUpError = useSelector(state => state.signUpReducer.signUpError);

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(validateCredentialsSignUp());
        setHandleSubmitCalled(!handleSubmitCalled);
    }

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false); // Устанавливаем флаг первого рендеринга в false
        } else {
            if (loginIsValid && passIsValid) {
                dispatch(postDataSignUp(loginValue, CryptoJS.SHA1(passValue).toString()));
            }
        }
    }, [handleSubmitCalled]);
    return(
        <div>
            Форма регистрации
            <form onSubmit={handleSubmit}>
                <span className="p-float-label">
                    <InputText id="inputLogin" className={!loginIsValid && "p-invalid"} value={loginValue}
                               onChange={(event) => dispatch(setLoginValueSignUp(event.target.value))}/>
                    <label htmlFor="inputLogin">Введите логин</label>
                    <span>{!loginIsValid && <Message severity="error" text={loginError} />}</span>
                </span>
                <span className="p-float-label">
                    <Password inputId="inputPass" className={!passIsValid && "p-invalid"} value={passValue}
                              onChange={(event) => dispatch(setPassValueSignUp(event.target.value))} feedback={false}
                              toggleMask/>
                    <label htmlFor="inputPass">Введите пароль</label>
                    <span>{!passIsValid && <Message severity="error" text={passError} />}</span>
                </span>
                <Button label="submit"/>
            </form>
            <span>{!isAuthorised && signUpError !== "" && <Message severity="error" text={signUpError} />}</span>
        </div>
    );
}