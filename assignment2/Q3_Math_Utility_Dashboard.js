// Q3. Math Utility Dashboard
const x = 16.75;

// Calculate required values
const rounded = Math.round(x);
const squareRoot = Math.sqrt(x);
const power = Math.pow(x, 3);
const randomNum = Math.floor(Math.random() * 41) + 10; // Random between 10 and 50

// Use template literals to show a formatted result summary
console.log(`
===== Math Utility Dashboard =====
Original Number : ${x}
Rounded Value   : ${rounded}
Square Root     : ${squareRoot.toFixed(4)}
Power (x³)      : ${power}
Random (10-50)  : ${randomNum}
==================================
`);
