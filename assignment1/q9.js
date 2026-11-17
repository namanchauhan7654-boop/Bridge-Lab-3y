/**
 * Q9: Random Math Quiz Generator
 * Generates random arithmetic questions and evaluates answers.
 */

const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const operators = ['+', '-', '*', '/'];
const selectedOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (selectedOperator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        // Ensure division is rounded to 2 decimals
        correctAnswer = Number((num1 / num2).toFixed(2));
        break;
}

console.log("--- Random Math Quiz ---");
console.log(`Question: What is ${num1} ${selectedOperator} ${num2}?`);
console.log(`Correct Answer: ${correctAnswer}`);
