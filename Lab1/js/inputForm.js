var rValue = document.getElementById("rValue");
var checkBoxes = document.getElementsByClassName("xValue");
var yValue = document.getElementById("yValue");

function changeRValue(button) {
    if (button.id == "upButton") {
        if (rValue.value == 5) {
            rValue.value = 0
        } else {
            rValue.value ++;
        }
    } else {
        if (rValue.value == 0) {
            rValue.value = 5
        } else {
            rValue.value --;
        }
    }
}

function removeOtherSelections(checkBox) {
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].value != checkBox.value) {
            checkBoxes[i].checked = false;
        }
    }
}

function validate() {
    var xIsValid = false;
    var yIsValid = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            xIsValid = true;
            document.getElementById("xInvalid").innerHTML = null;
        }
    }
    if ((parseFloat(yValue.value) > -3) && (parseFloat(yValue.value) < 3)) {
        yIsValid = true;
        document.getElementById("yInvalid").innerHTML = null;
    }
    
    if (!xIsValid) {
        document.getElementById("xInvalid").innerHTML = "Выберите значение X";
    }
    if (!yIsValid) {
        if (yValue.value.trim() == "")  {
            document.getElementById("yInvalid").innerHTML = "Введите значение Y";
        } else if (!Number.isFinite(parseFloat(yValue.value))) {
            document.getElementById("yInvalid").innerHTML = "Y должен быть числом";
        } else {
            document.getElementById("yInvalid").innerHTML = "Y должен принимать значения (-3; 3)";
        }
    }
    return xIsValid && yIsValid;
}