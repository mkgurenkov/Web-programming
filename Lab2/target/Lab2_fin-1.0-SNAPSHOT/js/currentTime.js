setInterval(function() {
    var date = new Date();
    document.getElementById("time").innerHTML = formTime(date.getHours()) + ":" + formTime(date.getMinutes()) + ":" + formTime(date.getSeconds());
}, 1000);

function formTime(time) {
    if (time < 10) {
        return "0" + time;
    } else {return time;}
}