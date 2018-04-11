class Bike {
    miles: number
    constructor(public price: number, public max_speed: number) {
        this.miles = 0;
    }
    displayInfo = () => console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Mileage: ${this.miles}`);
    ride = () => {
        console.log("Riding...");
        this.miles += 10;
        return this
    }
    reverse = () => {
        console.log("Reversing...");
        if (this.miles > 5) {
            this.miles -= 5;
        } else {
            this.miles = 0;
            console.log("Backed up to the start.");
        }
        return this;
    }
}

let bike1 = new Bike(30000,120);
let bike2 = new Bike(20000,90);
let bike3 = new Bike(10000, 75);

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();