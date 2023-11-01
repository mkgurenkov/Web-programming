var rValue = document.getElementById("rValue");
var checkBoxes = document.getElementsByClassName("xValue");
var yValue = document.getElementById("yValue");

function changeRValue(button) {
    if (button.id == "upButton") {
        if (rValue.value == 5) {rValue.value = -1}
        rValue.value ++;
    } else {
        if (rValue.value == 0) {rValue.value = 6}
        rValue.value --;
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
        }
    }
    if ((Number(yValue.value) > -3) && (Number(yValue.value) < 3)) {
        yIsValid = true;
    }
    
    if (!xIsValid) {
        console.log("x не валиден");
    }
    if (!yIsValid) {
        console.log("y не валиден");
    }
    return xIsValid && yIsValid;
}