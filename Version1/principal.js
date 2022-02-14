var sp = document.getElementsByTagName("span");
var btnStart = document.getElementById("btnStart");
var btnStop = document.getElementById("btnStop");
var btnPause = document.getElementById("btnPause");
var btnReprendre = document.getElementById("btnReprendre");
var t;
var sec = 0, min = 0, hour = 0;


function start() {

    t = setInterval(update_chrono, 1000);
    //btnStart.disabled = true;
    btnStart.style.display = 'none';
    btnStop.style.display = 'block';
    btnPause.style.display = 'block';
    sec = 0, min = 0, hour = 0;
}

function restart() {
    t = setInterval(update_chrono, 1000);
    //btnReprendre.disabled = true;
    btnPause.style.display = 'block';
    btnReprendre.style.display = 'none';
}

function update_chrono() {
    sec += 1;
    //if (sec<10){
    //  sec = "0"+sec;
    //sec += 1;
    //}
    if (sec == 60) {
        sec = 0;
        min += 1;
    }
    if (min == 60) {
        min = 0;
        hour += 1;
    }

    if (hour<10){
        sp[0].innerHTML = "0"+hour;
    }else{
        sp[0].innerHTML = hour;
    }
    

    if (min<10){
        sp[1].innerHTML = "0"+min;
    }else{
        sp[1].innerHTML = min;
    }
    
    if (sec<10){
        sp[2].innerHTML = "0"+sec;
    }else{
        sp[2].innerHTML = sec;
    }
    

}

function pause() {
    clearInterval(t)
    //btnReprendre.disabled = false;
    btnPause.style.display = 'none';
    btnReprendre.style.display = 'block';
}

function stop() {
    clearInterval(t);
    //btnStart.disabled = false;
    btnStart.style.display = 'block';
    btnStop.style.display = 'none';
    btnReprendre.style.display = 'none';
    btnPause.style.display = 'none';
    sp[0].innerHTML = '00';
    sp[1].innerHTML = '00';
    sp[2].innerHTML = '00';
}

