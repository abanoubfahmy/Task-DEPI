// function Ball(top, left, radius, color) {
//     this.top = top;
//     this.left = left;
//     this.radius = radius;
//     this.color = color;

//     // Method to calculate the area of the ball
//     this.calculateArea = function() {
//         return Math.PI * Math.pow(this.radius, 2);
//     };

//     // Overriding toString method to display ball dimensions and color
//     this.toString = function() {
//         return `Ball [Top: ${this.top}, Left: ${this.left}, Radius: ${this.radius}, Color: ${this.color}]`;
//     };
// }

// // Create an array of Ball objects
// let balls = [
//     new Ball(10, 20, 5, 'red'),
//     new Ball(30, 10, 10, 'blue'),
//     new Ball(15, 25, 7, 'green'),
// ];

// // A. Loop through the array to print all colors and areas
// balls.forEach(ball => {
//     console.log(`Color: ${ball.color}, Area: ${ball.calculateArea()}`);
// });

// // B. Sort balls by top, then by left, and display the result
// balls.sort((a, b) => {
//     if (a.top === b.top) {
//         return a.left - b.left;
//     }
//     return a.top - b.top;
// });

// console.log("Sorted Balls:");
// balls.forEach(ball => console.log(ball.toString()));

//EM6
class Engine {
    static count = 0;
    #color; // Private property

    constructor(color) {
        if (new.target === Engine) {
            throw new Error("Cannot instantiate an abstract class");
        }
        this.#color = color;
        Engine.count++;
    }

    static getCount() {
        return Engine.count;
    }

    move() {
        console.log("Moving");
    }

    get color() {
        return this.#color;
    }

    set color(value) {
        this.#color = value;
    }
}

class Car extends Engine {
    #ownerName;

    constructor(ownerName, brandName, productionYear, color) {
        super(color);
        this.#ownerName = ownerName;
        this.brandName = brandName;
        this.productionYear = productionYear;
    }

    // Setter and getter for ownerName
    set ownerName(value) {
        this.#ownerName = value;
    }

    get ownerName() {
        return this.#ownerName;
    }

    // Overriding move method
    move() {
        console.log(`Car [Owner: ${this.#ownerName}, Brand: ${this.brandName}, Year: ${this.productionYear}, Color: ${this.color}] is moving`);
    }
}

// Create objects and count them
const car1 = new Car("John Doe", "Toyota", 2020, "red");
const car2 = new Car("Jane Smith", "Honda", 2021, "blue");

car1.move();
car2.move();

console.log(`Total cars created: ${Engine.getCount()}`);
