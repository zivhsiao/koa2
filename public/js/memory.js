
cpu_usage()

var myInt = setInterval(function () {
    cpu_usage();
}, 3000);


function cpu_usage() {
    // console.log('Cant stop me now!');
    $.get('/api/system_usage', function (data) {
        // $('.cpu_usage').html(data.cpu);

        changeHour(parseInt(Math.ceil(data.cpu)));
    })
}


var n;
changeHour();
// range.oninput = changeHour;
function changeHour(data) {
    var circle = document.querySelectorAll(".circle")[0];
    var mask  = document.querySelectorAll(".mask")[0];
    var left = document.querySelectorAll(".left")[0];
    var right = document.querySelectorAll(".right")[0];
    var range = document.getElementById("range");

    var hour = document.querySelectorAll("#hour")[0];

    hour.innerHTML = data;
    // n = range.value;
    n = data;
    console.log(data)
    if(n <= 50) {
        left.style.webkitTransform="rotate(" + 3.6 * n + "deg)";
        right.style.opacity = 0;
        mask.style.opacity = 1;
    }else {
        right.style.opacity = 1;
        mask.style.opacity = 0;
        left.style.webkitTransform="rotate(" + 180 + "deg)";
        right.style.webkitTransform="rotate(" + 3.6 * n + "deg)";
    }
}