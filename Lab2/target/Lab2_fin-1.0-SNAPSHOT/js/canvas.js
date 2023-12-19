var canvas = document.getElementById("canvasElement");
var ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", sendCanvas);
drawImage(0);

function getCanvasX(event) {
    return (event.offsetX - (document.getElementById("canvasElement").width / 2)) / 40;
}
function getCanvasY(event) {
    return ((event.offsetY - (document.getElementById("canvasElement").height / 2))*(-1)) / 40;
}
function drawDot(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, 5, 5);
}


function drawImage(r) {
    let h = 400;
    let w = 400;
    var r = r*40;
    //задний фон
    ctx.fillStyle = '#c8f3e1';
    ctx.fillRect(0, 0, h, w);

    //фигуры
    ctx.fillStyle = '#42aaff';
    ctx.fillRect(w / 2 - r, h / 2 - r, r, r);

    ctx.beginPath();
    ctx.strokeStyle = '#42aaff';
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