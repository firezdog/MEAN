class Ninja {

    constructor(name, health, speed, strength) {
        this.name = name;
        if (health) {
            this.health = health;
        } else {
            this.health = 100;
        }
        if (speed) {
            this.speed = speed;
        } else {
            this.speed = 3;
        }
        if (strength) {
            this.strength = strength;
        } else {
            this.strength = 3;
        }
    }

    sayname() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }

}

class Sensei extends Ninja {

    constructor(name, health, speed, strength, wisdom) {
        if (!health) {
            health = 200;
        }
        if (!speed) {
            speed = 10;
        }
        if (!strength) {
            strength = 10;
        }
        super(name, health, speed, strength);
        if (!wisdom) {
            this.wisdom = 10;
        } else {
            this.wisdom = wisdom;
        }
    }

    speakWisdom() {
        super.drinkSake()
        console.log("学而时习之不亦说乎")
    }

}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"