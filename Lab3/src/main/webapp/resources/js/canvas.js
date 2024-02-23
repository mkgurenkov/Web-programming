var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", sendCanvas);
drawImage(0);

function getCanvasX(event) {
    return (event.offsetX - (document.getElementById("canvas").width / 2)) / 40;
}
function getCanvasY(event) {
    return ((event.offsetY - (document.getElementById("canvas").height / 2))*(-1)) / 40;
}
function convertX(x) {
    return x * 40 + document.getElementById("canvas").width / 2;
}
function convertY(y) {
    return y * (-40) + document.getElementById("canvas").width / 2;
}

function drawDots() {
    var XValues = document.getElementsByClassName("XValues");
    var YValues = document.getElementsByClassName("YValues");
    var RValues = document.getElementsByClassName("RValues");
    var HitValues = document.getElementsByClassName("HitValues");
    var currentR = document.getElementById("form:rValue_input").value;
    var len = XValues.length;
    for (var i = 0; i < len; i ++ ) {
        if (RValues[i].innerHTML == currentR) {
            if (HitValues[i].innerHTML == "true") {
                ctx.fillStyle = "#41DF19";
            } else {
                ctx.fillStyle = "red";
            }
            ctx.fillRect(convertX(XValues[i].innerHTML), convertY(YValues[i].innerHTML), 5, 5);
        }
    }
}

function drawImage(r) {
    let h = 400;
    let w = 400;
    var r = r*40;
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
    var s = -200;
    for (i = 1; i < 400/40; i ++) {
        s = s + 40
        ctx.moveTo(w / 2 + s, h / 2 + 4);
        ctx.lineTo(w / 2 + s, h / 2 - 4);
        ctx.stroke();
    }

    s = -200;
    for (i = 1; i < 400/40; i ++) {
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

function sendCanvas(event) {
    var x = getCanvasX(event);
    var y = getCanvasY(event);
    var r = document.getElementById("form:rValue_input").value;
    document.getElementById("canvasForm:xValueCanvas").value = x;
    document.getElementById("canvasForm:yValueCanvas").value = y;
    document.getElementById("canvasForm:rValueCanvas").value = r;
    document.getElementById("canvasForm:canvasSenderButton").click();
}

function manageCanvasErrorMessages() {
    xCanvasError = document.getElementById("canvasForm:xCanvasError");
    yCanvasError = document.getElementById("canvasForm:yCanvasError");
    rCanvasError = document.getElementById("canvasForm:rCanvasError");
    if (rCanvasError.innerHTML != "") {
        console.log("r");
        rCanvasError.style.display = "";
    } else if (xCanvasError.innerHTML != "") {
        console.log("x");
        xCanvasError.style.display = "";
    } else if (yCanvasError.innerHTML != "") {
        console.log("y");
        yCanvasError.style.display = "";
    }
}