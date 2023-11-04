function ajax() {
    if (validate()) {
        var data = formData();
        console.log(data);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/main.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("data=" + JSON.stringify(data));
        xhr.onload = function() {
            console.log(xhr.responseText); //тут надо будет добавить вывод в таблицу
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