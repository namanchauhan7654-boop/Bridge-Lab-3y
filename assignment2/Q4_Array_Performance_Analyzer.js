// Q4. Array Performance Analyzer
// Create an array of 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () =>
  Math.floor(Math.random() * 71) + 30
);

console.log("Generated Scores:", scores);

// Highest and lowest score
const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// Average score using reduce
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

// Number of students who passed (≥ 50) using filter
const passedCount = scores.filter(score => score >= 50).length;

// Display a full summary in a formatted output
console.log(`
===== Student Performance Summary =====
Scores          : ${scores.join(", ")}
Highest Score   : ${highest}
Lowest Score    : ${lowest}
Average Score   : ${average.toFixed(2)}
Students Passed : ${passedCount} out of 8
=======================================
`);
