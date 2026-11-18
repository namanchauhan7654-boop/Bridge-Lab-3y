// Q1: Demonstrate callback flow

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // Execute the callback after greeting
}

greetUser("Naman", showEndMessage);

// Output:
// Hello Naman
// Welcome to the course!
