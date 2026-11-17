"use strict";

// Q9 – JSON Audit

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

console.log("===== JSON Audit =====\n");

for (let i = 0; i < rawData.length; i++) {
  const entry = rawData[i];
  // Debugger tip: set breakpoint here to watch control flow on each iteration

  try {
    const parsed = JSON.parse(entry);

    // Detect missing required keys
    if (parsed.user === undefined || parsed.age === undefined) {
      throw new Error(`Missing required key(s) – user or age`);
    }

    // Bonus: convert age to Number
    const ageNum = Number(parsed.age);
    if (Number.isNaN(ageNum)) {
      throw new Error(`age is not a valid number: ${parsed.age}`);
    }

    // Bonus: filter under-18 users
    if (ageNum < 18) {
      console.log(`[Line ${i}] Skipped under-18 user: ${parsed.user} (age ${ageNum})`);
      continue;
    }

    // Valid entry
    clean.push({
      user: parsed.user,
      age: ageNum
    });
    console.log(`[Line ${i}] ✓ Valid → user: ${parsed.user}, age: ${ageNum}`);
  } catch (error) {
    errors.push({
      line: i,
      raw: entry,
      message: error.message
    });
    console.log(`[Line ${i}] ✗ Error → ${error.message}`);
  }
}

console.log("\n===== AUDIT SUMMARY =====");
console.log("Clean (valid adult) entries:", clean);
console.log("Errors logged:", errors);
console.log(`Valid count : ${clean.length}`);
console.log(`Error count : ${errors.length}`);
