var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
//Need quotation marks around the number because of type.
myString = "9";

function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
//Again, need quotation marks around the number.
console.log(sayHello("9"));

function fullName(firstName: string, lastName: string, middleName: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
//Enter an empty string if there's no middle name.
console.log(fullName("Jimbo", "Jones", ""));

//Apparently an object is called an "interface"?
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
//belt was not spelled properly in definition of jay.
console.log(graduate(jay));

class Ninja {
   fullName: string;
    constructor(
        public firstName: string,
        public lastName: string
    )
        {
         this.fullName = `${firstName} ${lastName}`;
        }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
//Need "new" keyword to make instance, all arguments must be filled (including those used in constructor)
const shane = new Ninja("Shane", "Mills");
const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing",
    debug(){"Console.log() is my friend."}

}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing));

var increment = x => x + 1;
// This works great:
console.log(increment(3));
// use () instead of {}
var square = x => (x * x);
console.log(square(4));
// Need parantheses around the output
var multiply = (x, y) => (x * y);
console.log(multiply(5,4));
// use {} for function definition
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
console.log(math(12, 3));

class Elephant {
   constructor(public age: number){}
    birthday = () => {
        // here "this" refers to the window, not the instance -- use arrow notation to fix
        // this.age++;
        this.age++
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
