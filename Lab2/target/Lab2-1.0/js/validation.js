function validate(x, y, r) {
    return validateX(x) && validateY(y) && validateR(r);
}

function manageHtmlFormErrors(x, y, r) {
    if (!validateX(x)) {
        document.getElementById("xError").innerHTML = "Выберите значение X";
    } else {
        document.getElementById("xError").innerHTML = null;
    }

    if (!validateY(y)) {
        var yFromDoc = document.getElementById("yValue").value;
        if (yFromDoc.trim() == "")  {
            document.getElementById("yError").innerHTML = "Введите значение Y";
        } else if (!Number.isFinite(parseFloat(yFromDoc))) {
            document.getElementById("yError").innerHTML = "Y должен быть числом";
        } else {
            document.getElementById("yError").innerHTML = "Y должен принимать значения (-3; 3)";
        }
    } else {
        document.getElementById("yError").innerHTML = null;
    }

    if (!validateR(r)) {
        document.getElementById("rError").innerHTML = "Установите R";
    } else {
        document.getElementById("rError").innerHTML = null;
    }
}

function manageCanvasError(x, y, r) {
    if (!validateR(r)) {
        document.getElementById("canvasError").innerHTML = "Установите R";
    } else if (!validateX(x) || !validateY(y)) {
        document.getElementById("canvasError").innerHTML = "Точка лежит вне области определения";
    } else {
        document.getElementById("canvasError").innerHTML = null;
    }
}

function validateX(x) {
    if (x >= -4 && x <= 4) {
        return true;
    } else {
        return false;
    }
}
function validateY(y) {
    if (y > -3 && y < 3) {
        return true;
    } else {
        return false;
    }
}
function validateR(r) {
    if (r != 0) {
        return true;
    } else {
        return false;
    }
}