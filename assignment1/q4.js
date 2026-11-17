/**
 * Q4: Academic Performance Evaluator
 * Evaluates student promotion based on marks, percentage, and passing criteria.
 */

// Marks of 5 subjects out of 100
const subjectMarks = [78, 82, 85, 90, 88];

let totalMarks = 0;
let hasFailed = false;

for (let i = 0; i < subjectMarks.length; i++) {
    totalMarks += subjectMarks[i];
    // Validation: if any subject < 35 -> automatically Detained
    if (subjectMarks[i] < 35) {
        hasFailed = true;
    }
}

const maxPossibleMarks = subjectMarks.length * 100;
const overallPercentage = (totalMarks / maxPossibleMarks) * 100;
const averageMarks = totalMarks / subjectMarks.length;

let performanceStatus = "";

if (hasFailed) {
    performanceStatus = "Detained (Failed in one or more subjects with < 35 marks)";
} else if (overallPercentage >= 85) {
    performanceStatus = "Promoted with Distinction";
} else if (overallPercentage >= 50 && overallPercentage <= 84) {
    performanceStatus = "Promoted";
} else {
    performanceStatus = "Detained";
}

console.log("--- Academic Performance Report ---");
console.log(`Subject Marks: ${subjectMarks.join(", ")}`);
console.log(`Overall Percentage: ${overallPercentage.toFixed(2)}%`);
console.log(`Status: ${performanceStatus}`);
