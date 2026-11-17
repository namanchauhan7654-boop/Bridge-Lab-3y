"use strict";

// Q7 – Smart Calculator

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

// Custom error for unrecognized operations
class InvalidOperationError extends Error {
  constructor(op) {
    super(`Operation "${op}" is not recognized`);
    this.name = "InvalidOperationError";
  }
}

console.log("===== Smart Calculator =====\n");
console.log(`Operands: num1 = ${num1}, num2 = ${num2}\n`);

for (const op of operations) {
  try {
    let result;

    switch (op) {
      case "add":
        result = num1 + num2;
        break;

      case "subtract":
        result = num1 - num2;
        break;

      case "divide":
        if (num2 === 0) {
          throw new Error("Division by zero is not allowed");
        }
        result = num1 / num2;
        break;

      case "power":
        result = Math.pow(num1, num2);
        break;

      case "root":
        // Square root of num1 (num2 is ignored for simplicity, or treat as root index)
        if (num1 < 0) {
          throw new Error("Cannot calculate square root of a negative number");
        }
        result = Math.sqrt(num1);
        break;

      default:
        throw new InvalidOperationError(op);
    }

    console.log(`Operation: ${op.padEnd(10)} → Result: ${result}`);
  } catch (error) {
    console.log(`Operation: ${op.padEnd(10)} → ERROR: [${error.name}] ${error.message}`);
  }
}

console.log("\n===== Formatted Summary Complete =====");
