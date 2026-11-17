"use strict";

// Q3 – Transaction Validator

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

console.log("===== Transaction Validator =====\n");

// Custom error classes for clear categorization
class NegativeAmountError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "NegativeAmountError";
  }
}
class MissingPropertyError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "MissingPropertyError";
  }
}
class NullEntryError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "NullEntryError";
  }
}

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  // Debugger breakpoint suggestion: place a breakpoint here in VS Code
  // to watch 'tx', 'i', 'valid', 'invalid' variable states

  try {
    if (tx === null || tx === undefined) {
      throw new NullEntryError(`Null/undefined entry at index ${i}`);
    }
    if (tx.id === undefined || tx.id === null) {
      throw new MissingPropertyError(`Missing 'id' at index ${i}`);
    }
    if (tx.amount === undefined || tx.amount === null) {
      throw new MissingPropertyError(`Missing 'amount' at index ${i}`);
    }
    if (tx.amount < 0) {
      throw new NegativeAmountError(`Negative amount (${tx.amount}) at index ${i}`);
    }

    // Valid transaction
    valid.push(tx);
    console.log(`✓ Valid   : id=${tx.id}, amount=${tx.amount}`);
  } catch (error) {
    invalid.push({ index: i, errorType: error.name, message: error.message });
    console.log(`✗ Invalid : ${error.name} → ${error.message}`);
  }
}

console.log("\n===== FINAL REPORT =====");
console.log(`Successful (valid)   : ${valid.length}`);
console.log(`Failed (invalid)     : ${invalid.length}`);
console.log("Valid transactions   :", valid);
console.log("Invalid details      :", invalid);
