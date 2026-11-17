/**
 * Q10: Citizen Eligibility Validator
 * Evaluates voting, driving, and passport eligibility based on age and citizenship.
 */

const age = 19;
const isCitizen = true;

console.log(`--- Citizen Eligibility Validator ---`);
console.log(`Profile -> Age: ${age}, Is Citizen: ${isCitizen}`);

if (isCitizen && age >= 18) {
    if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only."); // Note: Or citizen >= 18 general check
    } else {
        console.log("Eligible for all services.");
    }
} else if (!isCitizen && age >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}
