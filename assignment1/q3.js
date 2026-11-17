/**
 * Q3: Monthly Expense Tracker
 * Calculates total, average, and 10% tax addition rounded using toFixed(2).
 */

// Expenses for 5 categories: food, travel, rent, bills, leisure
const expenses = [8500, 3200, 15000, 4100, 2500];

let totalExpense = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}

const averageExpense = totalExpense / expenses.length;

// Add 10% tax using assignment operators
let taxAmount = totalExpense * 0.10;
let finalAmountWithTax = totalExpense + taxAmount;

console.log("--- Monthly Expense Tracker ---");
console.log(`Expenses Breakdown: Food: ₹${expenses[0]}, Travel: ₹${expenses[1]}, Rent: ₹${expenses[2]}, Bills: ₹${expenses[3]}, Leisure: ₹${expenses[4]}`);
console.log(`Total Expense (Before Tax): ₹${totalExpense.toFixed(2)}`);
console.log(`Average Monthly Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax Added (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final Amount (After Tax): ₹${finalAmountWithTax.toFixed(2)}`);
