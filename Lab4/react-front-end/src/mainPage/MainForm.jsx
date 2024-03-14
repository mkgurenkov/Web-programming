import {useDispatch, useSelector} from "react-redux";
import {
    validateCoordinatesMainForm,
    setXValueMainForm,
    setYValueMainForm,
    postDataMainForm, setRValueMainForm
} from "../redux/mainForm/mainFormActionCreators";
import React, {useEffect, useState} from "react";
import {Slider} from "primereact/slider";
import {InputText} from "primereact/inputtext";
import {Message} from "primereact/message";
import {RadioButton} from "primereact/radiobutton";
import {Button} from "primereact/button";

export function MainForm() {
    const [handleSubmitCalled, setHandleSubmitCalled] = useState(false);
    const [firstRender, setFirstRender] = useState(true);
    const dispatch = useDispatch();
    const xValue = useSelector(state => state.mainFormReducer.x.value);
    const yValue = useSelector(state => state.mainFormReducer.y.value);
    const rValue = useSelector(state => state.mainFormReducer.r.value);
    const xIsValid = useSelector(state => state.mainFormReducer.x.valid);
    const yIsValid = useSelector(state => state.mainFormReducer.y.valid);
    const rIsValid = useSelector(state => state.mainFormReducer.r.valid);
    const xError = useSelector(state => state.mainFormReducer.x.error);
    const yError = useSelector(state => state.mainFormReducer.y.error);
    const rError = useSelector(state => state.mainFormReducer.r.error);

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(validateCoordinatesMainForm());
        setHandleSubmitCalled(!handleSubmitCalled);
    }

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false); // Устанавливаем флаг первого рендеринга в false
        } else {
            if (xIsValid && yIsValid && rIsValid) {
                dispatch(postDataMainForm(xValue, yValue, rValue));
            }
        }
    }, [handleSubmitCalled]);


    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label>Выберите X</label>
                <label><RadioButton value="-4" checked={xValue === "-4"} onChange={(event) => dispatch(setXValueMainForm(event.target.value))}/>-4</label>
                <label><RadioButton type="radio" value="-3" checked={xValue === "-3"} onChange={(event) => dispatch(setXValueMainForm(event.target.value))}/>-3</label>
                <label><RadioButton type="radio" value="-2" checked={xValue === "-2"} onChange={(event) => dispatch(setXValueMainForm(event.target.value))}/>-2</label>
                <label><RadioButton type="radio" value="-1" checked={xValue === "-1"} onChange={(event) => dispatch(setXValueMainForm(event.target.value))}/>-1</label>
                <label><RadioButton type="radio" value="0" checked={xValue === "0"} onChange={(event) => dispatch(setXValueMainForm(event.target.value))}/>0</label>
                <label><RadioButton type="radio" value="1" checked={xValue === "1"} onChange={(event) => dispatch(setXValueMainForm(event.target.value))}/>1</label>
                <label><RadioButton type="radio" value="2" checked={xValue === "2"} onChange={(event) => dispatch(setXValueMainForm(event.target.value))}/>2</label>
                <label><RadioButton type="radio" value="3" checked={xValue === "3"} onChange={(event) => dispatch(setXValueMainForm(event.target.value))}/>3</label>
                <label><RadioButton type="radio" value="4" checked={xValue === "4"} onChange={(event) => dispatch(setXValueMainForm(event.target.value))}/>4</label>
                <span>{!xIsValid && <Message severity="error" text={xError} />}</span>
            </div>

            <div>
                <label htmlFor="yValue">Введите Y</label>
                <InputText id="yValue" value={yValue} onChange={(e) => dispatch(setYValueMainForm(e.target.value))} placeholder="(-3 ... 3)" />
                <span>{!yIsValid && <Message severity="error" text={yError} />}</span>
            </div>

            <div>
                <label htmlFor="rValue">Установите R</label>
                <Slider style={{width: '240px'}} max={5} value={rValue} onChange={(e) => dispatch(setRValueMainForm(e.value))} step={0.2} />
                <InputText id="rValue" style={{width: '50px', textAlign: "center"}} value={rValue} readOnly/>
                <span>{!rIsValid && <Message severity="error" text={rError} />}</span>
            </div>

            <div>
                <Button label="submit"/>
                <Button  label="reset"/>
            </div>
        </form>
    );
}