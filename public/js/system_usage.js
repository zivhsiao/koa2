
cpu_usage()

var myInt = setInterval(function () {
    cpu_usage();
}, 3000);


function cpu_usage() {
    // console.log('Cant stop me now!');
    $.get('/api/system_usage', function (data) {
        // $('.cpu_usage').html(data.cpu);

        changeCPU(parseInt(Math.ceil(data.cpu[1])));
        changeRAM(parseInt(Math.ceil(data.cpu[0])));
        changeDisk(parseInt(Math.ceil((100 / data.cpu[2]) * data.cpu[3])));
    })
}

function changeCPU(data) {

    var hourBox = document.getElementById("hour");
    var hourLeft = hourBox.querySelectorAll(".left")[0];
    var hourRight = hourBox.querySelectorAll(".right")[0];
    var hourMask = hourBox.querySelectorAll(".mask")[0];

    var hourText = document.getElementById("hourText");

    var n = data;

    hourText.innerHTML = data;

    changeProgress(n, hourLeft, hourRight, hourMask);
}

function changeRAM(data){
    var minuteBox = document.getElementById("minute");
    var minuteMask = minuteBox.querySelectorAll(".mask")[0];
    var minuteLeft = minuteBox.querySelectorAll(".left")[0];
    var minuteRight = minuteBox.querySelectorAll(".right")[0];
    var minuteText = document.getElementById("minuteText");
    var minute;

    minuteText.innerHTML = data;

    var n2 = data;

    changeProgress(n2, minuteLeft, minuteRight, minuteMask);
}

function changeDisk(data) {
    var secondBox = document.getElementById("second");
    var secondMask = secondBox.querySelectorAll(".mask")[0];
    var secondLeft = secondBox.querySelectorAll(".left")[0];
    var secondRight = secondBox.querySelectorAll(".right")[0];
    var secondText = document.getElementById("secondText");
    var second;

    var n3 = data;
    secondText.innerHTML = data;
    console.log(data);

    changeProgress(n3, secondLeft, secondRight, secondMask);
}


function changeProgress(n, left, right, mask) {
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

function formatBytes(bytes,decimals) {
    if(bytes == 0) return '0';
    var k = 1000,
        dm = decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}