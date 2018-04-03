function starString(el) {
    var str = '';
    if (typeof el == "number") {
        for (i= 0; i < el; i++) {
            str += '*';
        }
    }
    else {
        var firstChar = el[0];
        for (i=0; i < el.length; i++) {
            str += firstChar;
        }
    }
    console.log(str)
}

function drawStars(arr) {
    arr.forEach(starString);
}

drawStars([3,8,"tarantara",2,1]);