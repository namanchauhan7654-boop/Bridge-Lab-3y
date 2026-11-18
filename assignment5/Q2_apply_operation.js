// Q2: Use a callback to apply operations to an array

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number
const doubledNumbers = applyOperation(numbers, number => number * 2);
console.log("Doubled:", doubledNumbers);

// Square each number
const squaredNumbers = applyOperation(numbers, number => number * number);
console.log("Squared:", squaredNumbers);

// Output:
// Doubled: [ 2, 4, 6, 8 ]
// Squared: [ 1, 4, 9, 16 ]
