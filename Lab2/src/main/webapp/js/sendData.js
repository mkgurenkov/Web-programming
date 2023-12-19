function sendHtmlForm() {
    var x = getHtmlX();
    var y = getHtmlY();
    var r = getHtmlR();
    console.log(x);
    console.log(y);
    console.log(r);
    manageHtmlFormErrors(x, y, r);
    if (validate(x, y, r)) {
        ajax(x, y, r);
    }
}

function sendCanvas(event) {
    var x = getCanvasX(event);
    var y = getCanvasY(event);
    var r = getHtmlR();
    manageCanvasError(x, y, r);
    if (validate(x, y, r)) {
        drawDot(event);
        ajax(x, y, r);
    }
}