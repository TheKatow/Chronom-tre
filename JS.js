document.getElementById("btnstop").style.display = "none";
document.getElementById("btnpause").style.display = "none";
document.getElementById("btnreprendre").style.display = "none";

var time = document.getElementById("time");
var sp = document.getElementsByTagName("span");
var btnstart = document.getElementById("btnstart");
var btnstop = document.getElementById("btnstop");
var btnpause = document.getElementById("btnpause");
var btnreprendre = document.getElementById("btnreprendre");
var t;
var sec = 0, min = 0, hour = 0;

function start() {
    t = setInterval(update_chrono, 1000);
    btnstart.style.display = 'none';
    btnstop.style.display = 'inline-block';
    btnpause.style.display = 'inline-block';
    time.setAttribute ("style", "text-shadow: 1px 1px 3px green")
    sec = 0, min = 0, hour = 0;
}

function restart() {
    t = setInterval(update_chrono, 1000);
    btnpause.style.display = 'inline-block';
    btnreprendre.style.display = 'none';
    time.setAttribute ("style", "text-shadow: 1px 1px 3px green")
}

function update_chrono() {
    sec += 1;

    if (sec == 60) {
        sec = 0;
        min += 1;
    }
    if (min == 60) {
        min = 0;
        hour += 1;
    }

    if (hour < 10) {
        sp[0].innerHTML = "0" + hour;
    } else {
        sp[0].innerHTML = hour;
    }


    if (min < 10) {
        sp[1].innerHTML = "0" + min;
    } else {
        sp[1].innerHTML = min;
    }

    if (sec < 10) {
        sp[2].innerHTML = "0" + sec;
    } else {
        sp[2].innerHTML = sec;
    }
}

function pause() {
    clearInterval(t)
    btnpause.style.display = 'none';
    btnreprendre.style.display = 'inline-block';
    time.setAttribute ("style", "text-shadow: 1px 1px 3px blue")
}

function stop() {
    clearInterval(t);
    btnstart.style.display = 'inline-block';
    btnstop.style.display = 'none';
    btnreprendre.style.display = 'none';
    btnpause.style.display = 'none';
    time.setAttribute ("style", "text-shadow: 1px 1px 3px white")
    sp[0].innerHTML = '00';
    sp[1].innerHTML = '00';
    sp[2].innerHTML = '00';
}
