import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {drawDots, drawImage} from "../redux/canvas/canvasActionCreators";
import {
    setXValueCanvas,
    setYValueCanvas,
    setRValueCanvas,
    validateCoordinatesCanvas,
    postDataCanvas
} from "../redux/canvas/canvasActionCreators";
import {Message} from "primereact/message";

export function Canvas() {
    const canvasRef = useRef(null);
    const [handleMouseDownCalled, setHandleMouseDownCalled] = useState(false);
    const [firstRender, setFirstRender] = useState(true);

    const dispatch = useDispatch();
    const xValue = useSelector(state => state.canvasReducer.x.value);
    const yValue = useSelector(state => state.canvasReducer.y.value);
    const rValue = useSelector(state => state.mainFormReducer.r.value);

    const xIsValid = useSelector(state => state.canvasReducer.x.valid);
    const yIsValid = useSelector(state => state.canvasReducer.y.valid);
    const rIsValid = useSelector(state => state.canvasReducer.r.valid);

    const xError = useSelector(state => state.canvasReducer.x.error);
    const yError = useSelector(state => state.canvasReducer.y.error);
    const rError = useSelector(state => state.canvasReducer.r.error);

    const data = useSelector(state => state.tableReducer.data);

    function handleMouseDown(event) {
        const rect = canvasRef.current.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        dispatch(setXValueCanvas(offsetX));
        dispatch(setYValueCanvas(offsetY));
        dispatch(setRValueCanvas(rValue));
        dispatch(validateCoordinatesCanvas());
        setHandleMouseDownCalled(!handleMouseDownCalled);
        //вызвать метод отправки запроса на сервер
    }

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false); // Устанавливаем флаг первого рендеринга в false
        } else {
            if (xIsValid && yIsValid && rIsValid) {
                dispatch(postDataCanvas(xValue, yValue, rValue));
            }
        }
    }, [handleMouseDownCalled]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        function drawImage(r) {
            let h = 400;
            let w = 400;
            r = r*40;
            //задний фон
            ctx.fillStyle = '#C8D8D3';
            ctx.fillRect(0, 0, h, w);

            //фигуры
            ctx.fillStyle = '#006AD3';
            ctx.fillRect(w / 2 - r, h / 2 - r, r, r);

            ctx.beginPath();
            ctx.strokeStyle = '#006AD3';
            ctx.lineWidth = '1';
            ctx.moveTo(w / 2, h / 2);
            ctx.lineTo(w / 2 + r / 2, h / 2);
            ctx.lineTo(w / 2, h / 2 + r / 2);
            ctx.stroke();
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(w / 2, h / 2, r / 2, 3 * Math.PI / 2, 0, false);
            ctx.moveTo(w / 2, h / 2 - r / 2);
            ctx.lineTo(w / 2 + r / 2, h / 2);
            ctx.lineTo(w / 2, h / 2);
            ctx.stroke();
            ctx.closePath();
            ctx.fill();

            //координатные оси
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = '1';
            ctx.moveTo(w / 2, 0);
            ctx.lineTo(w / 2, h);
            ctx.stroke();

            ctx.moveTo(0, h / 2);
            ctx.lineTo(w, h / 2);
            ctx.stroke();

            //стрелки
            ctx.moveTo(w / 2, 0);
            ctx.lineTo(w / 2 - 5, 10);
            ctx.stroke();

            ctx.moveTo(w / 2, 0);
            ctx.lineTo(w / 2 + 5, 10);
            ctx.stroke();

            ctx.moveTo(w, h / 2);
            ctx.lineTo(w - 10, h / 2 - 5);
            ctx.stroke();

            ctx.moveTo(w, h / 2);
            ctx.lineTo(w - 10, h / 2 + 5);
            ctx.stroke();

            //метки
            let s = -200;
            for (let i = 1; i < 400/40; i ++) {
                s = s + 40
                ctx.moveTo(w / 2 + s, h / 2 + 4);
                ctx.lineTo(w / 2 + s, h / 2 - 4);
                ctx.stroke();
            }

            s = -200;
            for (let i = 1; i < 400/40; i ++) {
                s = s + 40
                ctx.moveTo(w / 2 + 4, h / 2 + s);
                ctx.lineTo(w / 2 - 4, h / 2 + s);
                ctx.stroke();
            }
            ctx.closePath();
            ctx.beginPath();
            //область определения
            ctx.strokeStyle = 'red';
            ctx.lineWidth = '1';
            ctx.moveTo(w / 2 + (-4 * 40), h / 2 + (3 * 40));
            ctx.lineTo(w / 2 + (-4 * 40), h / 2 + (-3 * 40));
            ctx.stroke();
            ctx.moveTo(w / 2 + (4 * 40), h / 2 + (3 * 40));
            ctx.lineTo(w / 2 + (4 * 40), h / 2 + (-3 * 40));
            ctx.stroke();
            ctx.moveTo(w / 2 + (4 * 40), h / 2 + (3 * 40));
            ctx.lineTo(w / 2 + (-4 * 40), h / 2 + (3 * 40));
            ctx.stroke();
            ctx.moveTo(w / 2 + (4 * 40), h / 2 + (-3 * 40));
            ctx.lineTo(w / 2 + (-4 * 40), h / 2 + (-3 * 40));
            ctx.stroke();
        }

        function convertX(x) {
            return x * 40 + 400 / 2;
        }

        function convertY(y) {
            return y * (-40) + 400 / 2;
        }
        function drawDots(data) {
            const points = data.map(row => {
                return {
                    x: row.point.x,
                    y: row.point.y,
                    r: row.point.r,
                    hit: row.hit
                };
            });
            for (let i = 0; i < points.length; i ++ ) {
                if (points[i].r === rValue) {
                    if (points[i].hit === true) {
                        ctx.fillStyle = "#41DF19";
                    } else {
                        ctx.fillStyle = "red";
                    }
                    ctx.fillRect(convertX(points[i].x), convertY(points[i].y), 5, 5);
                }
            }
        }

        drawImage(rValue, ctx);
        drawDots(data, ctx);
    }, [ rValue, data ]);


    return (
        <div>
            {/*<span>{(!rIsValid) ? rError : ((!xIsValid) ? xError : ((!yIsValid) ? yError : null))}</span>*/}
            <span>{(!rIsValid || !xIsValid || !yIsValid) && (<Message severity="error" text={rError || xError || yError}/>)}</span>
            <canvas ref={canvasRef} onMouseDown={handleMouseDown} width="400px" height="400px"/>
        </div>
    );
}