function ajax(x, y, r) {
    var data = {'x': String(x), 'y': String(y), 'r': String(r)};
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/Lab2_fin-1.0-SNAPSHOT/ControllerServlet', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("data=" + JSON.stringify(data));
    xhr.onload = function() {
        var response = xhr.responseText;
        document.getElementById("tableBody").innerHTML += response;
    }
}