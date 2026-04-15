// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implement the Car class that implements Vehicle
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    // Constructor to initialize properties
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implement the start method
    start(): void {
        console.log("Car engine started");
    }
}

// Create an instance of Car
const myCar = new Car("Toyota", "Corolla", 2023);

// Call the start method to verify it works
myCar.start();