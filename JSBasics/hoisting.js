//1.  console.log(hello);
// var hello = 'world';

//Prediction: outputs "undefined"
// Actual (if different): 
//Explanation: declaration hoisted to top but declaration anchored bellow call

// 2. var needle = 'haystack';
// test();

// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

//Prediction: outputs "magnet"
//Actual (if different):
//Explanation: logs local variable

// 3. var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//Prediction: "super cool"
//Actual (if different):
//Explanation: function never called

// 4. var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

//Prediction: "chicken half-chicken gone"
//Actual (if different): "chicken half-chicken"
//Explanation: value of food was changed but never logged

// 5.

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

//Prediction:
//Actual (if different):
//Explanation:

// 6.

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

//Prediction: "undefined error"
//Actual (if different): "mean is not a function"
//Explanation: code crashes once it fails to run first line (variable but not value is hoisted)

// 7.

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

//Prediction: "san jose / seattle / burbank / burbank"
//Actual (if different): "san jose / seattle / burbank / ***san jose***"
//Explanation: it isn't burbank because dojo redeclared as local after change to "seattle" -- declaration was hoisted to top of function, so that "dojo" in the function was always a local variable -- thus global variable value remained unchanged.