// Q1: Asynchronous coffee process using Promise chaining

// Helper: resolve after a random delay between 1 and 2 seconds.
function waitForStep(message) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            // Simulate an occasional failure.
            if (Math.random() < 0.15) {
                reject(new Error(`${message} failed.`));
            } else {
                console.log(message);
                resolve();
            }
        }, delay);
    });
}

function boilWater() {
    return waitForStep("Water boiled.");
}

function brewCoffee() {
    return waitForStep("Coffee brewed.");
}

function pourCoffee() {
    return waitForStep("Coffee poured into the cup.");
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process error:", error.message));
