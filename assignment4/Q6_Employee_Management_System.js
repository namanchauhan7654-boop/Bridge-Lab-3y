"use strict";

// Q6: Employee Management System (Classes + Object Methods)

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  // Calculate annual salary
  getAnnualSalary() {
    return this.salary * 12;
  }

  // Apply a bonus percentage to the monthly salary
  applyBonus(percent) {
    if (percent < 0) {
      console.warn("Bonus percent cannot be negative");
      return this.salary;
    }
    const bonusAmount = this.salary * (percent / 100);
    this.salary += bonusAmount;
    return this.salary;
  }

  getDetails() {
    return `ID: ${this.id} | ${this.name} | ${this.department} | Monthly: ₹${this.salary.toFixed(2)} | Annual: ₹${this.getAnnualSalary().toFixed(2)}`;
  }
}

// Create 5 employee objects
const employees = [
  new Employee(1, "Amit Sharma", "Engineering", 55000),
  new Employee(2, "Priya Patel", "Marketing", 42000),
  new Employee(3, "Rahul Verma", "Finance", 48000),
  new Employee(4, "Sneha Reddy", "HR", 38000),
  new Employee(5, "Vikram Singh", "Engineering", 62000)
];

console.log("===== Employee Details (Initial) =====");
employees.forEach(emp => console.log(emp.getDetails()));

// Calculate annual salary for each
console.log("\n===== Annual Salaries =====");
employees.forEach(emp => {
  console.log(`${emp.name}: ₹${emp.getAnnualSalary().toLocaleString()}`);
});

// Apply bonus to one employee as demo
console.log("\n===== Applying 10% bonus to Vikram =====");
const vikram = employees.find(e => e.id === 5);
console.log("Before bonus:", vikram.getDetails());
vikram.applyBonus(10);
console.log("After bonus :", vikram.getDetails());

// Use reduce() to calculate total annual payout of the company
const totalAnnualPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("\n===== Company Total Annual Payout =====");
console.log(`Total Annual Payout: ₹${totalAnnualPayout.toLocaleString()}`);
