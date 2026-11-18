// Q5: Ride-sharing application using User, Driver and Trip classes

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }

    showDriverDetails() {
        console.log(`${this.name} | Rating: ${this.rating} | ${this.vehicle} (${this.vehicleNumber})`);
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (typeof this.distance !== "number" ||
            !Number.isFinite(this.distance) ||
            this.distance <= 0) {
            throw new Error("Trip distance must be a positive number.");
        }

        const ratePerKm = 12;
        return this.distance * ratePerKm;
    }
}

const driver = new Driver("Rahul", 4.8, "Car", "UP-85-AB-1234");
driver.showDriverDetails();

try {
    const trip = new Trip("Mathura", "Agra", 60);
    console.log(`Fare: ₹${trip.calculateFare()}`);
} catch (error) {
    console.error("Unable to calculate fare:", error.message);
}

try {
    const invalidTrip = new Trip("Mathura", "Agra", -5);
    console.log(`Fare: ₹${invalidTrip.calculateFare()}`);
} catch (error) {
    console.error("Unable to calculate fare:", error.message);
}
