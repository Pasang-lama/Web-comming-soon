
var overlay = document.getElementById("curtain");
var comingdate = new Date("Apr 15, 2023 00:00:00");
var d = document.getElementById("days");
var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("second");
var x = setInterval(calDate, 1000);

function calDate() {
    var now = new Date();
    var des = comingdate.getTime() - now.getTime();
    console.log(des);
    var days = Math.floor(des / (1000 * 60 * 60 * 24));
    var hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((des % (1000 * 60)) / 1000);

    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hours);
    m.innerHTML = getTrueNumber(mins);
    s.innerHTML = getTrueNumber(secs);

    if (des > 172800000) {
        overlay.classList.add("defalutwidth");
    } else if (des < 172800000 && des > 0) {
        overlay.classList.remove("defalutwidth");
        overlay.classList.add("partialwidth");
    } else {
        clearInterval(x);
        overlay.style.display = "none";
    }
}

function getTrueNumber(x) {
    if (x < 10) return "0" + x;
    else return x;
}
