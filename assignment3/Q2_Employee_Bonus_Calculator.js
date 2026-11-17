"use strict";

// Q2 – Employee Bonus Calculator
// Using "use strict" to prevent implicit globals and enforce safer coding

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== Employee Bonus Calculator =====\n");

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    // Convert salary and years to numbers
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    // Validation
    if (Number.isNaN(salary) || Number.isNaN(years)) {
      throw new Error(`Invalid number conversion for employee: ${emp.name}`);
    }
    if (!emp.name) {
      throw new Error("Missing employee name");
    }

    // Calculate bonus
    // years > 3 → 10%, else 5%
    const bonusRate = years > 3 ? 0.1 : 0.05;
    const bonus = salary * bonusRate;
    const total = salary + bonus;

    // Template strings for formatted output
    console.log(`Employee : ${emp.name}`);
    console.log(`  Salary : ₹${salary.toLocaleString()}`);
    console.log(`  Years  : ${years}`);
    console.log(`  Bonus  : ₹${bonus.toFixed(2)} (${bonusRate * 100}%)`);
    console.log(`  Total  : ₹${total.toFixed(2)}`);
    console.log("--------------------------------");
  } catch (error) {
    // Handle conversion or missing property errors
    console.error(`Error processing employee at index ${i}:`, error.message);
  }
}
