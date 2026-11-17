// Q10. Departmental Employee Evaluator
// Nested array for departments
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

console.log("===== Departmental Employee Evaluator =====\n");

// Use loops and nested if-else conditionals
for (let i = 0; i < departments.length; i++) {
  const deptName = departments[i][0];
  const score = departments[i][1];

  let rating;
  if (score >= 90) {
    rating = "Excellent";
  } else if (score >= 75 && score <= 89) {
    rating = "Good";
  } else if (score >= 60 && score <= 74) {
    rating = "Average";
  } else {
    rating = "Needs Improvement";
  }

  console.log(`${deptName} (Score: ${score}) → ${rating}`);
}
