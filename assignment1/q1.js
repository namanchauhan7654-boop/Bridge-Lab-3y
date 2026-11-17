/**
 * Q1: Personalized Login Greeting
 * Greets users with a time-based message using new Date().getHours() and template literals.
 */

const userName = "Aarav Sharma";
const currentHour = new Date().getHours(); // Get current hour (0-23)

let greetingMessage = "";

if (currentHour < 12) {
    greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    greetingMessage = `Good Afternoon ${userName}!`;
} else {
    greetingMessage = `Good Evening ${userName}!`;
}

console.log(`Current Hour: ${currentHour}`);
console.log(greetingMessage);
