/**
 * Q7: Smart Guessing Game (Number Range)
 * Generates a random secret number between 1-50 and checks test values.
 */

// Generating secret number: Math.floor(Math.random() * 50) + 1
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27; // Test value

console.log(`--- Smart Guessing Game ---`);
console.log(`Secret Number: ${secretNumber} | User Guess: ${userGuess}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("Very close!");
} else if (userGuess > secretNumber) {
    console.log("Too high");
} else {
    console.log("Too low");
}
