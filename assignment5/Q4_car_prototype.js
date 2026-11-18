// Q4: Constructor function and shared prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// This method is created once and shared by all Car objects.
Car.prototype.getDetails = function () {
    console.log(`${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

// Both objects use the same prototype method:
console.log(car1.getDetails === car2.getDetails); // true
