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
    drawImage(rValue.value);
    document.getElementById("canvasError").innerHTML = null;
}

function removeOtherSelections(checkBox) {
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].value != checkBox.value) {
            checkBoxes[i].checked = false;
        }
    }
}

function getHtmlX(){
    var checkBoxes = document.getElementsByClassName("xValue");
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            return parseInt(checkBoxes[i].value);
        }
    }
    return NaN;
}

function getHtmlY(){
    return parseFloat(document.getElementById("yValue").value);
}

function getHtmlR(){
    return parseInt(document.getElementById("rValue").value);
}