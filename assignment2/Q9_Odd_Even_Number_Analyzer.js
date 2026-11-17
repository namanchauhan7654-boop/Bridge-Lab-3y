// Q9. Odd–Even Number Analyzer
// Accept numbers 1–30 in an array using a loop
const numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Store results in a new array
const results = [];

// For each number apply the conditions
for (let num of numbers) {
  if (num % 3 === 0 && num % 5 === 0) {
    results.push(`${num}: FizzBuzz`);
  } else if (num % 2 === 0) {
    results.push(`${num}: Even`);
  } else {
    results.push(`${num}: Odd`);
  }
}

// Display the results array
console.log("===== Odd–Even Number Analyzer (1-30) =====");
results.forEach(r => console.log(r));
console.log("\nResults array:", results);
