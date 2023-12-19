function ajax() {
    if (validate()) {
        var data = formData();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/main.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("data=" + JSON.stringify(data));
        xhr.onload = function() {
            document.getElementById("tableBody").innerHTML += "<tr><td>" + data.x + "</td><td>" + data.y + "</td><td>" + data.r + "</td><td>" + xhr.responseText + "</td></tr>";
        }
    }
}

function formData() {
    var xs = document.getElementsByClassName("xValue");
    for (var i = 0; i < xs.length; i ++) {
        if (xs[i].checked == true) {
            var x = parseInt(xs[i].value);
        }
    }
    var y = parseFloat(document.getElementById("yValue").value);
    var r = parseInt(document.getElementById("rValue").value);
    return {'x': x, 'y': y, 'r': r};
}