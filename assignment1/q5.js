/**
 * Q5: Weather Activity Planner
 * Advises users based on temperature, rain status, and wind speed.
 */

const temperature = 28; // in Celsius
const isRaining = false;
const windSpeed = 10;   // in km/h

let advice = "";

if (isRaining) {
    advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
} else {
    advice = "Perfect day for a walk.";
}

console.log("--- Weather Activity Planner ---");
console.log(`Conditions -> Temp: ${temperature}°C, Raining: ${isRaining}, Wind: ${windSpeed} km/h`);
console.log(`Advice: ${advice}`);
