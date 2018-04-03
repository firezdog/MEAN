// Assignment: Ninja Class
// Create a new class called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// // drinkSake() - This should add +10 Health to the Ninja

// Example Outputs

// const ninja1 = new Ninja("Hyabusa", 100, 4);
// ninja1.sayName();
// -> "My ninja name is Hyabusa!"
// console.log(ninja1.strength)
// -> undefined
// ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 4, Strength: 3"
// ninja1.drinkSake();
// -> "Drank sake. Name: Hyabusa, Speed: 4, Strength: 3, Health: 110"

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"

const dog = {}
blueNinja.punch(dog);
// -> "Ninjas can only punch ninjas."


function Ninja (name, health, op_speed, op_strength) { // Assuming "by default" means other values could be assigned
    
    //Setup attributes (isn't there an __init__ method in JS too?
    this.name = name;
    if (health) {
        this.health = health
    } else {
        this.health = 100;
    }
    var speed;
    var strength;
    if (op_speed) {
        speed = op_speed;
    } else {
        speed = 3;
    }
    if (op_strength) {
        strength = op_strength;
    } else {
        strength = 3;
    }

    //Setup methods. None are private, so we can use "this" in them.
    this.sayName = function() {
        console.log(`My name is ${this.name}`);
    }
    this.showStats = function() {
        console.log(`Name: ${this.name}, Speed: ${speed}, Strength: ${strength}, Health: ${this.health}`);
    }
    this.drinkSake = function() {
        this.health += 10;
        console.log("Drank sake.")
        this.showStats();
    }
    this.punch = function(ninja) {
        if (ninja.constructor === Ninja) {
            console.log(`${ninja.name} was punched by ${this.name} and lost 5 health.`)
            ninja.health -= 5;
            ninja.showStats();
        } else {
            console.log("Ninjas only punch ninjas.")
        }
    }
    this.kick = function(ninja) {
        if (ninja.constructor === Ninja) {
            console.log(`${ninja.name} was kicked by ${this.name} and lost ${15*strength} health.`)
            ninja.health -= 15*strength;
            ninja.showStats();
        } else {
            console.log("Ninjas can only kick ninjas.")
        }
    }
}