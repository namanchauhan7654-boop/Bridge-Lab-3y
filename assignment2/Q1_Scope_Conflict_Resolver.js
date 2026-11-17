// Q1. Scope Conflict Resolver
// Global variable
let bonus = 5000;

function calculateSalary() {
  // Local variable
  let salary = 40000;
  // Local boolean variable
  let isPermanent = true; // Change this value to test different outcomes

  // Add the bonus only if isPermanent is true
  if (isPermanent) {
    salary += bonus;
  }

  // Print total salary inside the function
  console.log("Total Salary:", salary);
}

// Demonstrate how changing isPermanent affects (or doesn't affect) global scope
console.log("=== Test 1: isPermanent = true ===");
calculateSalary();
console.log("Global bonus remains unchanged:", bonus);

console.log("\n=== Test 2: isPermanent = false ===");
function calculateSalaryNonPermanent() {
  let salary = 40000;
  let isPermanent = false; // local variable - does not affect global

  if (isPermanent) {
    salary += bonus;
  }
  console.log("Total Salary (non-permanent):", salary);
}
calculateSalaryNonPermanent();
console.log("Global bonus is still:", bonus);
console.log("Note: isPermanent is local to the function, so changing it never affects the global bonus.");
