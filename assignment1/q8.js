/**
 * Q8: Employee Salary Projection
 * Computes 5-year salary projection with yearly increments using a for loop.
 */

let currentSalary = 600000; // Starting annual salary in INR
const annualIncrementRate = 8; // 8% increment per year

const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    salaryProjection.push({
        Year: `Year ${year}`,
        "Salary (INR)": Math.round(currentSalary)
    });
    // Apply increment
    currentSalary += currentSalary * (annualIncrementRate / 100);
}

console.log("--- 5-Year Employee Salary Projection ---");
console.table(salaryProjection);
