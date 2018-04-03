function magic_multiply(x,y){
    if (x == 0 && y == 0) {
        return "All inputs 0"
    } else if(typeof(x) == "number" && typeof(y) == "number") {
        x = x*y;
    } else if (x.constructor === Array && typeof(y) == "number") {
        for (i in x) {
            x[i] *= y
        }
    } else if (typeof(x) == "number" && typeof(y) == "string") {
        return "Cannot multiply by string."
    } else if (typeof(x) == "string" && typeof(y) == "number") {
        x = x.repeat(y) //Not possible to multiply a string by a number (NaN)
    }
    return x
}

let test1 = magic_multiply(5,2);
console.log(test1);
let test2 = magic_multiply(0,0);
console.log(test2);
let test3 = magic_multiply([1,2,3],2);
console.log(test3);
let test4 = magic_multiply(7, "three");
console.log(test4);
let test5 = magic_multiply("three", 7);
console.log(test5);