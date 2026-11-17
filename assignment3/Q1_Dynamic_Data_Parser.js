"use strict";

// Q1 – Dynamic Data Parser
// Mixed API data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

console.log("===== Dynamic Data Parser Report =====\n");

// Loop through each value
for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];

  // Convert to Number, Boolean, String
  const asNumber = Number(value);
  const asBoolean = Boolean(value);
  const asString = String(value);

  console.log(`--- Index ${i} ---`);
  console.log(`  Original :`, value);
  console.log(`  Number   :`, asNumber);
  console.log(`  Boolean  :`, asBoolean);
  console.log(`  String   :`, asString);

  // Skip invalid numbers (NaN, empty-ish, "100px") but log them separately
  // Number(" ") → 0 (which is valid number but we treat space as invalid per requirement)
  // Number("100px") → NaN
  // Number("NaN") → NaN
  // null → 0, undefined → NaN

  const isInvalid =
    value === " " ||
    value === "100px" ||
    value === "NaN" ||
    Number.isNaN(asNumber) ||
    value === null ||
    value === undefined;

  if (isInvalid) {
    invalidEntries.push({
      index: i,
      original: value,
      reason: Number.isNaN(asNumber) ? "NaN conversion" : "Explicitly invalid / null / undefined / space"
    });
    console.log(`  Status   : INVALID → logged separately`);
  } else {
    validNumbers.push(asNumber);
    console.log(`  Status   : VALID numeric`);
  }
  console.log("");
}

// Final arrays and report
console.log("===== SUMMARY =====");
console.log("Valid numeric data :", validNumbers);
console.log("Invalid entries    :", invalidEntries);
console.log(`Total valid   : ${validNumbers.length}`);
console.log(`Total invalid : ${invalidEntries.length}`);
