function negTest(arr) {
    for (let i in arr) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}

function evenTest(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function evenCount(arr) {
    return arr.reduce(function(acc, el) {
        if (evenTest(el)) {
            acc += 1;
        }
        return acc;
    }, 0);
}

function dummyArray(n) {
    var arr = [];
    for (i = 0; i < n; i++) {
        var random = Math.floor(Math.random()*10)
        arr.push (random);
    }
    return arr;
}

function randomChoice(arr) {
    var random = Math.floor(Math.random()*arr.length);
    return arr[random];
}